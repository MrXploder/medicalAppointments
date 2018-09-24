(function() {
	'use strict';

	angular
		.module("angularApp")
		.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "Appointments", "Patients", "$filter", "Printer"];

	function patientControlListController($scope, ngDialog, Appointments, Patients, $filter, Printer) {
		let pclc = this;

		pclc.isAdding = false;
		pclc.dischargePatient = dischargePatient;
		pclc.addPatientToControl = addPatientToControl;
		pclc.changeAppointmentStatus = changeAppointmentStatus;
		pclc.printAppointmentSummary = printAppointmentSummary;
		pclc.searchTerm = "";
		pclc.addNewAppointmentToPatient = addNewAppointmentToPatient;

		activate();
		///////////////////////////////////////////////////////

		function activate(){
			Promise.all([Appointments.query().$promise, Patients.query().$promise]).then(function(response){
				pclc.patients 	  = response[1];
				pclc.appointments = [];

				let _grouped  = _.groupBy(_.filter(response[0], {end_status: "pending"}), 'patient_id');

				_.forEach(_grouped, function(item){
					pclc.appointments.push({
						data: item,
						meta: {
							private: _.filter(pclc.patients, {id: item[0].patient_id})[0],
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

		function addPatientToControl() {
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

		function changeAppointmentStatus(statusText, appointment) {
			let oldStatus = angular.copy(appointment.status);

			if (statusText === "absent") {
				appointment.status = statusText;
				appointment.$update().then(function(response) {
					activate();
				});
			} else if (statusText === "done") {
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

		function addNewAppointmentToPatient(appointment) {
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

		function dischargePatient(appointment) {
			ngDialog
				.openConfirm({
					templateUrl: "src/module/modal/dischargePatient/template.html",
					controller: "dischargePatientController",
					controllerAs: "dpc",
					data: appointment,
					showClose: true,
					width: "30%",
				})
				.then(function(response) {
					appointment.meta.public.end_text = response;
					console.log(appointment);
					printAppointmentSummary(appointment);
				});
		}

		function printAppointmentSummary(appointment) {
			appointment.meta.currentDate = moment().utc().format("DD/MM/YYYY").toString();
			Printer.print('src/module/print/printSummary/template.html', {
				vm: appointment
			}, () => activate());
		}
	}
})();