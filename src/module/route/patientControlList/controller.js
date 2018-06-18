(function(){
	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "$ngConfirm", "Appointments", "$filter"];

	function patientControlListController($scope, ngDialog, $ngConfirm, Appointments, $filter){
		var pclc = this;

		pclc.appointments 					 = Appointments.query();
		pclc.addControlAppointment 	 = addControlAppointment;
		pclc.changeAppointmentStatus = changeAppointmentStatus;
		pclc.chunckedAppointents		 = [];

		pclc.appointments
		.$promise
		.then(response => {
			recalculateChunk(response);
		});		

		function addControlAppointment(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/controlAppointment/template.html",
				controller: "controlAppointmentController",
				controllerAs: "cac",
				width: "60%",
			})
			.closePromise
			.then(function(response){
				pclc.appointments = Appointments.query().$promise.then(response => recalculateChunk(response));
			});
		}

		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);
			
			if(statusText === "absent"){
				$ngConfirm({
					useBootstrap: false,
					boxWidth: '30%',
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
				ngDialog.open({
					templateUrl: "src/module/modal/fulfillAppointment/template.html",
					controller: "fulfillAppointmentController",
					controllerAs: "fac",
					data: appointment,
				})
				.closePromise
				.then(function(response){
					appointment.status = statusText;
					appointment
					.$update()
					.then(response => {
						$ngConfirm({
							title: "Elige",
							content: "",
							buttons: {
								confirm: {
									text: "Dar de Alta",
									btnClass: "btn waves-effect waves-light red",
									action: function(){
										ngDialog.open({
											templateUrl: "src/module/modal/dischargePatient/template.html",
											controller: "dischargePatientController",
											controllerAs: "dpc",
											data: appointment,
										})
										.closePromise
										.then(response => {
											Appointments
											.query()
											.$promise
											.then(response => {
												pclc.appointments = response;
												recalculateChunk(response);
											});
										}
									}
								},
								cancel:{
									text: "Agendar nuevo Turno",
									btnClass: "btn waves-effect waves-light green",
									action: function() {
										ngDialog.open({
											templateUrl: "src/module/modal/addAppointment/template.html"
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
					})
				}
			}

			function recalculateChunk(data){
				let notEndedOnly = $filter('filter')(angular.copy(data), {end_status: "pending"});
				pclc.chunckedAppointents = _.groupBy(notEndedOnly, 'patient_id');
			}
		}
	})();