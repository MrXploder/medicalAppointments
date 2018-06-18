(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('fulfillAppointmentController', fulfillAppointmentController);

	fulfillAppointmentController.$inject = ["$scope", "Doctors", "Patients"];

	function fulfillAppointmentController($scope, Doctors, Patients){
		let fac = this;

		delete $scope.ngDialogData.ngDialogId;
		fac.form = $scope.ngDialogData;
		fac.submit = submit;

		function submit(){
			fac.form.status = "done";
			$scope
			.ngDialogData
			.$update() 
			.then(function(response){
				$scope.confirm(); /*resolve close*/
				Materialize.toast("Exito", 5000, "green");
			})
			.catch(function(response){
				Materialize.toast(response.statusText, 5000, "red");
			})
		}		

	}
})();