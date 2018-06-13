(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("controlAppointmentController", controlAppointmentController);

	controlAppointmentController.$inject = ["$scope", "Patients", "Doctors", "Operators", "ngDialog", "$filter"];

	function controlAppointmentController($scope, Patients, Doctors, Operators, ngDialog, $filter){
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
			})
			.closePromise
			.then(function(response){
				cac.form.date = response.value.date;
				cac.form.time = response.value.time;
			});
		}

		$scope.$watch('cac.form.patient_fullname', function(){
			if(cac.form.patient_fullname === undefined) return;
			var filteredPatient = $filter('filter')(angular.copy(cac.patients), {full_name: cac.form.patient_fullname}, true)[0];
			if(typeof filteredPatient === "undefined"){ 
				cac.form.patient_id = 0;
			}
			else { 
				cac.form.patient_id = filteredPatient.id;
			}
		}, true);
	}
})();