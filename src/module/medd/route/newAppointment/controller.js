(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('newAppointmentController', newAppointmentController);

	newAppointmentController.$inject = ["Doctors", "Patients", "Appointments", "$scope", "$filter", "Modal", "$timeout", "$location"];

	function newAppointmentController(Doctors, Patients, Appointments, $scope, $filter, Modal, $timeout, $location){
		var nac = this;

		nac.form = {};
		nac.patients = Patients.query();
		nac.doctors = Doctors.query();
		nac.showSchedule = showSchedule;
		nac.createAppointment = createAppointment;


		nac.patients
		.$promise
		.then(function success(response){
			let autocompleteData = {};
			nac.patients.forEach(function(patient){
				autocompleteData[patient.full_name] = null;
			});
			$('#patient-autocomplete').autocomplete({
				data: autocompleteData,
				limit: 20,
				minLength: 1,
			});
		});		

		function showSchedule(){

		}

		function createAppointment(){
			Appointments
			.create(nac.form)
			.$promise
			.then(function success(response){
				Materialize.toast("Agendado", 5000, "green");
				$timeout(function(){
					$location.path("/manageCensus");
				},0);
			})
			.catch(function error(response){
				Materialize.toast(response.statusText, 5000, "red");
			});
		};

		$scope.$watch('nac.form.patient_fullname', function(){
			if(nac.form.patient_fullname === undefined) return;

			var filteredPatient = $filter('filter')(angular.copy(nac.patients), {full_name: nac.form.patient_fullname}, true)[0];

			if(typeof filteredPatient === "undefined"){ 
				nac.form.patient_id = 0;
			}
			else { 
				nac.form.patient_id = filteredPatient.id;
			}
		}, true);

	}
})();