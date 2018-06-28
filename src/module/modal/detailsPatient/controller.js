(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("detailsPatientController", detailsPatientController);

	detailsPatientController.$inject = ["$scope", "Patients"];

	function detailsPatientController($scope, Patients){
		let dpc = this;

		dpc.form 	 = $scope.ngDialogData;
		dpc.commit = commit;

		activate();
		////////////////////////////////////////////

		function activate(){

		}

		function commit(){
			delete dpc.form.ngDialogId;
			dpc.form
			.$update()
			.then(function(response){
				$scope.confirm();
			});

		}
	}
})();