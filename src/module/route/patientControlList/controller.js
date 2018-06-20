(function(){
	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "$ngConfirm", "Appointments", "Patients", "$filter", "Printer"];

	function patientControlListController($scope, ngDialog, $ngConfirm, Appointments, Patients, $filter, Printer){
		var pclc = this;

		pclc.addControlAppointment 	 = addControlAppointment;
		pclc.changeAppointmentStatus = changeAppointmentStatus;
		pclc.chunckedAppointents		 = [];
		pclc.searchTerm							 = "";

		Appointments
		.query()
		.$promise
		.then(function(response){
			pclc.appointments = response;
			recalculateChunk(response);
			Patients
			.query()
			.$promise
			.then(function(response){
				pclc.patients = response;
				recalculateChunk(pclc.appointments);
			})
		});		

		function addControlAppointment(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/controlAppointment/template.html",
				controller: "controlAppointmentController",
				controllerAs: "cac",
				showClose: true,
			})
			.closePromise
			.then(function(response){
				Appointments
				.query()
				.$promise
				.then(function(response){
					pclc.appointments = response;
					recalculateChunk(response);
				});
			});
		}

		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);
			
			if(statusText === "absent"){
				$ngConfirm({
					title: "Precaución",
					content: "Esta accion no se puede deshacer",
					autoClose: "cancel|5000",
					buttons: {
						confirm: {
							text: "Dejar como Ausente",
							btnClass: "btn waves-effect waves-light red",
							action: function(){
								appointment.status = statusText;
								appointment
								.$update()
								.then(function(response){
									$ngConfirm({
										title: "Elige",
										content: "",
										buttons: {
											confirm: {
												text: "Dar de Alta",
												btnClass: "btn waves-effect waves-light red",
												action: function(){
													console.log("exit");
													ngDialog.openConfirm({
														templateUrl: "src/module/modal/dischargePatient/template.html",
														controller: "dischargePatientController",
														controllerAs: "dpc",
														data: appointment,
														showClose: true,
													})
													.then(function(response){
														Appointments
														.query()
														.$promise
														.then(function(response){
															pclc.appointments = response;
															recalculateChunk(response);
														});
													});
												}
											},
											cancel:{
												text: "Agendar nuevo Turno",
												btnClass: "btn waves-effect waves-light green",
												action: function() {
													ngDialog.openConfirm({
														templateUrl: "src/module/modal/addAppointment/template.html",
														controller: "addAppointmentController",
														controllerAs: "aac",
														data: appointment,
													})
													.then(function(response){
														Printer.print("src/module/print/printAppointment/template.html", 
															{vm: {
																data: appointment,
																meta: {
																	currentDate: moment().format("DD/MM/YYYY").toString(),
																},
															}
														}, function(){
															Appointments
															.query()
															.$promise
															.then(function(response){
																pclc.appointments = response;
																recalculateChunk(response);
															});
														});
													});
												},
											}
										}
									});
								})
								.catch(function success(response){
									Materialize.toast(response.statusText, 5000, "red");
									appointment.status = oldStatus;
								});
							}
						},
						cancel:{
							text: "Salir",
							btnClass: "btn waves-effect waves-light white black-text",
							action: function() {},
						}
					}
				})
			}
			else if(statusText === "done"){
				/*Now the operator must fill the data*/
				ngDialog.openConfirm({
					templateUrl: "src/module/modal/fulfillAppointment/template.html",
					controller: "fulfillAppointmentController",
					controllerAs: "fac",
					data: appointment,
					showClose: true,
				})
				.then(function(response){
					appointment.status = statusText;
					appointment
					.$update()
					.then(function(response){
						$ngConfirm({
							title: "Elige",
							content: "",
							buttons: {
								confirm: {
									text: "Dar de Alta",
									btnClass: "btn waves-effect waves-light red",
									action: function(){
										ngDialog.openConfirm({
											templateUrl: "src/module/modal/dischargePatient/template.html",
											controller: "dischargePatientController",
											controllerAs: "dpc",
											data: appointment,
										})
										.then(function(response){
											Appointments
											.query()
											.$promise
											.then(function(response){
												Printer.print('src/module/print/printSummary/template.html',{
													vm: {
														/*extract from chunckedAppointments only the patient data*/
														data: _.pickBy(pclc.chunckedAppointents, function(value, key){
															return key === appointment.patient_id.toString();
														}),
														meta: {},
													}
												}, function(response){
													pclc.appointments = response;
													recalculateChunk(response);
												});
											});
										});
									}
								},
								cancel:{
									text: "Agendar nuevo Turno",
									btnClass: "btn waves-effect waves-light green",
									action: function() {
										ngDialog.openConfirm({
											templateUrl: "src/module/modal/addAppointment/template.html",
											controller: "addAppointmentController",
											controllerAs: "aac",
											data: appointment,
										})
										.then(function(response){
											Printer.print("src/module/print/printAppointment/template.html", 
												{vm: {
													data: response,
													meta: {
														currentDate: moment().format("DD/MM/YYYY").toString(),
													},
												}
											}, function(){
												Appointments
												.query()
												.$promise
												.then(function(response){
													pclc.appointments = response;
													recalculateChunk(response);
												});
											});
										});
									},
								}
							}
						});
					})
					.catch(function(response){
						Materialize.toast(response.statusText, 5000, "red");
						appointment.status = oldStatus;
					});
				})
			}
		}

		function recalculateChunk(data){
			let notEndedOnly = $filter('filter')(angular.copy(data), {end_status: "pending"});
			pclc.chunckedAppointents = _.groupBy(notEndedOnly, 'patient_id');
			pclc.betterAppointments = [];
			angular.forEach(pclc.chunckedAppointents, function(item){	
				pclc.betterAppointments.push({
					patient_id: item[0].patient_id,
					patient_fullname: item[0].patient_fullname,
					comes_from: item[0].comes_from,
					reason: item[0].reason,
					diagnosis_text: item[0].diagnosis_text,
					membership: item[0].membership,
					patient_data: $filter('filter')(pclc.patients, {id: item[0].patient_id}, true),
					data: item
				});
			});
			console.log(pclc.betterAppointments);
		}
	}
})();