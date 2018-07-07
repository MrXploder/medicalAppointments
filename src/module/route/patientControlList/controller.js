(function(){
	'use strict';

	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "$ngConfirm", "Appointments", "Patients", "$filter", "Printer", "$q"];

	function patientControlListController($scope, ngDialog, $ngConfirm, Appointments, Patients, $filter, Printer, $q){
		let pclc = this;

		pclc.patients                   = [];
		pclc.isAdding								    = false;
		pclc.searchTerm							    = "";
		pclc.appointments               = [];
		pclc.addPatientToControl 	      = addPatientToControl;
		pclc.changeAppointmentStatus    = changeAppointmentStatus;
		pclc.addNewAppointmentToPatient = addNewAppointmentToPatient;
		pclc.dischargePatient           = dischargePatient;
		pclc.printAppointmentSummary    = printAppointmentSummary;

		activate();
		///////////////////////////////////////////////////////

		function activate(){
			$q.all([
				Appointments.query().$promise,
				Patients.query().$promise
				])
			.then(function(response){
				pclc.patients 	  = response[1];
				pclc.appointments = [];

				let _filtered = $filter('filter')(response[0], {end_status: "pending"});
				let _grouped  = _.groupBy(_filtered, 'patient_id');
				angular.forEach(_grouped, function(item){
					let _private  = $filter('filter')(pclc.patients, {id: item[0].patient_id}, true)[0];
					pclc.appointments.push({
						data: item,
						meta: {
							private: _private,
							public:{
								patient_id      : item[0].patient_id,
								patient_fullname: item[0].patient_fullname,
								patient_fullname: item[0].patient_fullname,
								comes_from			: item[0].comes_from,
								reason 					: item[0].reason,
								diagnosis_text  : item[0].diagnosis_text,
								membership			: item[0].membership,
							}
						}
					});
				});
			});
		}

		function addPatientToControl(){
			pclc.isAdding = true;
			ngDialog.open({
				templateUrl: "src/module/modal/controlAppointment/template.html",
				controller: "controlAppointmentController",
				controllerAs: "cac",
				showClose: true,
			})
			.closePromise.then(doThis => {
				Appointments.query().$promise.then(doThis => {
					activate();
					pclc.isAdding = false;
				});
			});
		}

		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);
			
			if(statusText === "absent"){
				appointment.status = statusText;
				appointment.$update().then(function(response){
					activate();
				});
			}

			else if(statusText === "done"){
				ngDialog.openConfirm({
					templateUrl: "src/module/modal/fulfillAppointment/template.html",
					controller: "fulfillAppointmentController",
					controllerAs: "fac",
					data: appointment,
					showClose: true,
				})
				.then(doThis => {
					appointment.status = statusText;
					appointment.$update().then(doThis => activate());
				});
			}
		}

		function addNewAppointmentToPatient(appointment){
			let _data = angular.copy(appointment.data[0]);
			_data.full_name = appointment.meta.private.full_name;
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/addAppointment/template.html",
				controller: "addAppointmentController",
				controllerAs: "aac",
				showClose: true,
				data: _data,
			})
			.then(thisData => {
				Printer.print("src/module/print/printAppointment/template.html", {
					vm: {
						data: thisData,
						meta: {
							currentDate: moment().format("DD/MM/YYYY").toString(),
						},
					}
				}, thenDoThis => activate());
			});
		}

		function dischargePatient(appointment){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/dischargePatient/template.html",
				controller: "dischargePatientController",
				controllerAs: "dpc",
				data: appointment,
				showClose: true,
			})
			.then(function(response){
				appointment.meta.public.end_text = response;
				printAppointmentSummary(appointment);
			});
		}

		function printAppointmentSummary(appointment){
			console.log(appointment);
			Printer.print('src/module/print/printSummary/template.html',{
				vm: appointment
			}, thenDoThis => activate());
		}
	}
})();
