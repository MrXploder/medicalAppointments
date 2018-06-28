(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("detailsDoctorController", detailsDoctorController);

	detailsDoctorController.$inject = ["$scope", "Doctors"];

	function detailsDoctorController($scope, Doctors){
		let ddc = this;

		ddc.form 	 = $scope.ngDialogData;
		ddc.commit = commit;

		activate();
		////////////////////////////////////////////

		function activate(){

		}

		function commit(){
			delete ddc.form.ngDialogId;
			ddc.form
			.$update()
			.then(function(response){
				$scope.confirm();
			});

		}
	}
})();