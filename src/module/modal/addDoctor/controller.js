(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("addDoctorController", addDoctorController);

	addDoctorController.$inject = ["$scope", "Doctors"];

	function addDoctorController($scope, Doctors){
		let adc = this;

		adc.form 	 = {};
		adc.commit = commit;

		activate();
		////////////////////////////////////////////

		function activate(){

		}

		function commit(){
			Doctors
			.create(adc.form)
			.$promise
			.then(function(response){
				$scope.confirm();
			});
		}
	}
})();