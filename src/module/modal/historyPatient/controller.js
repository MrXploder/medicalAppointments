(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('historyPatientController', historyPatientController);

	historyPatientController.$inject = ["$scope", "Appointments", "Printer"];

	function historyPatientController($scope, Appointments, Printer){
		let hpc = this;

		hpc.appointments = [];
		hpc.printHistory = printHistory;

		activate();
		//////////////////////////////////////////

		function activate(){
			Appointments.query({patient_id: $scope.ngDialogData.id}).$promise.then(function(response){
				hpc.appointments = response;
			});
		}

		function printHistory(){
			console.log(hpc.appointments);
			Printer.print("src/module/print/printHistory/template.html", {
				vm: {
					data: hpc.appointments,
				}
			}, function(response){
				console.log("done printing!");
			})
		}
	}
})();