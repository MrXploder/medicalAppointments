(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("addPatientController", addPatientController);

	addPatientController.$inject = ["$scope", "Patients"];

	function addPatientController($scope, Patients){
		let apc = this;

		apc.form 	 = {};
		apc.commit = commit;

		activate();
		////////////////////////////////////////////

		function activate(){

		}

		function commit(){
			Patients
			.create(apc.form)
			.$promise
			.then(function(response){
				$scope.confirm();
			});
		}
	}
})();