(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('dischargePatientController', dischargePatientController);

	dischargePatientController.$inject = ["$scope", "Appointments"];

	function dischargePatientController($scope, Appointments){
		let dpc = this;
		delete $scope.ngDialogData.ngDialogId;

		dpc.form 					 = $scope.ngDialogData;
		dpc.endAppointment = endAppointment;
		
		function endAppointment(){
			dpc.form.end_status = "end";
			$scope.ngDialogData
			.$update()
			.then(function(response){
				$scope.confirm();
			});
		}
	}

})();