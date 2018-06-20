(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('refillAppointmentController', refillAppointmentController);

	refillAppointmentController.$inject = ["$scope", "$filter", "Operators", "Doctors", "Patients"];

	function refillAppointmentController($scope, $filter, Operators, Doctors, Patients){
		let rac = this;

		rac.form      = $scope.ngDialogData;
		rac.update    = update;
		rac.doctors   = Doctors.query();
		rac.operators = Operators.query();

		Patients
		.query()
		.$promise
		.then(function(response){
			rac.patients = response;
			let filteredPatient = $filter('filter')(angular.copy(rac.patients), {full_name: rac.form.patient_fullname}, true)[0];
			rac.form.patient_id 			    = filteredPatient.id;
			rac.form.patient_rut          = filteredPatient.rut;
			rac.form.patient_mobilenumber = filteredPatient.mobile_number; 
			rac.form.patient_phonenumber  = filteredPatient.phone_number;
			rac.form.patient_allergies    = filteredPatient.allergies;
		});

		function update(){
			delete rac.form.ngDialogId;
			delete rac.form.patient_allergies
			delete rac.form.patient_fullname
			delete rac.form.patient_mobilenumber
			delete rac.form.patient_phonenumber
			delete rac.form.patient_rut

			rac.form
			.$update()
			.then(function(response){
				$scope.confirm();
			});
		}
	}
})();