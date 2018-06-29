(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('managePatientsController', managePatientsController);

	managePatientsController.$inject = ["Patients", "$scope", "ngDialog"];

	function managePatientsController(Patients, $scope, ngDialog){
		var mpc = this;

		mpc.patients 		   = Patients.query();
		mpc.sortBy 		 	   = 'id';
		mpc.searchTerm     = "";
		mpc.sortReverse    = false;
		mpc.itemsPerPage   = 10;
		mpc.isAdding       = false;
		mpc.addPatient     = addPatient;
		mpc.detailsPatient = detailsPatient;
		mpc.deletePatient  = deletePatient;

		function addPatient(){
			mpc.isAdding = true;
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/addPatient/template.html",
				controller: "addPatientController",
				controllerAs: "apc",
				showClose: true,
			})
			.then(function(response){
				Materialize.toast("Exito", 5000, "green");
				Patients.query().$promise.then(response => mpc.patients = response);
			})
			.finally(function(response){
				mpc.isAdding = false;
			})
		}

		function detailsPatient(patient){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/detailsPatient/template.html",
				controller: "detailsPatientController",
				controllerAs: "dpc",
				showClose: true,
				data: patient,
			});
		}

		function deletePatient(patient){
			Patients
			.delete({id: patient.id})
			.$promise
			.then(function(response){
				mpc.patients.splice(mpc.patients.indexOf(patient),1);
				Materialize.toast("Erased", 5000, "red");
			});
		}
	}
})();