(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('dischargePatientController', dischargePatientController);

	dischargePatientController.$inject = ["$scope", "Appointments"];

	function dischargePatientController($scope, Appointments){
		let dpc = this;
		delete $scope.ngDialogData.ngDialogId;

		dpc.form 					 = $scope.ngDialogData.data[0];
		dpc.endAppointment = endAppointment;
		
		function endAppointment(){
			dpc.form.end_status = "end";
			Appointments.update(dpc.form).$promise.then(function(response){
				$scope.confirm(dpc.form.end_text);
			});
		}
	}

})();