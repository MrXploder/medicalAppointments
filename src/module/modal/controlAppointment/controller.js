(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("controlAppointmentController", controlAppointmentController);

	controlAppointmentController.$inject = ["$scope", "Patients", "Doctors", "Appointments", "ngDialog", "$filter", "$localStorage"];

	function controlAppointmentController($scope, Patients, Doctors, Appointments, ngDialog, $filter, $localStorage){
		let cac = this;
		
		cac.form        			= {};
		cac.patients  	 			= Patients.query();
		cac.doctors      			= Doctors.query();
		cac.showSchedule 			= showSchedule;
		cac.createAppointment = createAppointment;

		function showSchedule(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/eventCalendar/template.html",
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

		function createAppointment(){
			cac.form.operator_id = $localStorage.currentUser.id;
			console.log(cac.form);
			Appointments
			.create(cac.form)
			.$promise
			.then(function success(response){
				Materialize.toast("Agendado", 5000, "green");
				$scope.closeThisDialog();
				$route.reload();
			})
			.catch(function error(response){
				Materialize.toast(response.statusText, 5000, "red");
			});
		};

		$scope.$watch('cac.form.patient_fullname', function(){
			if(cac.form.patient_fullname === undefined) return;
			var filteredPatient = $filter('filter')(angular.copy(cac.patients), {full_name: cac.form.patient_fullname}, true)[0];
			
			if(filteredPatient === undefined){ 
				cac.form.patient_id = 0;
			}
			else { 
				cac.form.patient_id = filteredPatient.id;
			}
		}, true);
	}
})();