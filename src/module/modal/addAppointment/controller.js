(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('addAppointmentController', addAppointmentController);

	addAppointmentController.$inject = ["$scope", "ngDialog", "Operators", "Appointments"];

	function addAppointmentController($scope, ngDialog, Operators, Appointments){
		let aac = this;
		
		aac.operators 		 = Operators.query();
		aac.addAppointment = addAppointment;
		aac.showSchedule   = showSchedule;

		/*clean up previus appointment to add as a new one*/
		aac.form = angular.copy($scope.ngDialogData);
		delete aac.form.ngDialogId;
		delete aac.form.date;
		delete aac.form.time;

		function addAppointment(){
			Appointments
			.create(aac.form)
			.$promise
			.then(response => {
				$scope.confirm(aac.form);
			})
		}

		function showSchedule(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/eventCalendar/template.html",
				controller: "eventCalendarController",
				controllerAs: "ecc",
			})
			.closePromise
			.then(function(response){
				aac.form.date = response.value.date;
				aac.form.time = response.value.time;
			});
		}

	} 
})();