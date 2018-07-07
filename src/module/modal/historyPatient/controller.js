(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('historyPatientController', historyPatientController);

	historyPatientController.$inject = ["$scope", "Appointments"];

	function historyPatientController($scope, Appointments){
		let hpc = this;

		hpc.appointments = [];

		activate();
		//////////////////////////////////////////

		function activate(){
			Appointments.query({patient_id: $scope.ngDialogData.id}).$promise.then(function(response){
				hpc.appointments = response;
			})
		}
	}
})();