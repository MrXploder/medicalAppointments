(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("controlAppointmentController", controlAppointmentController);

	controlAppointmentController.$inject = ["$scope", "Patients", "Doctors", "Operators", "ngDialog"];

	function controlAppointmentController($scope, Patients, Doctors, Operators, ngDialog){
		var cac = this;
		
		cac.form = {};
		cac.patients = Patients.query();
		cac.doctors = Doctors.query();
		cac.operators = Operators.query();
		cac.showSchedule = showSchedule;

		function showSchedule(){
			ngDialog
			.open({
				templateUrl: "src/module/medd/modal/eventCalendar/template.html",
				controller: "eventCalendarController",
				controllerAs: "ecc",
				width: "60%",
				overlay: false,
			})
			.closePromise
			.then(function(response){
			});
		}
	}
})();