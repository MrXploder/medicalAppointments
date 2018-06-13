(function(){
	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "Appointments"];

	function patientControlListController($scope, ngDialog, Appointments){
		var pclc = this;

		pclc.addControlAppointment = addControlAppointment;
		pclc.appointments = Appointments.query();


		function addControlAppointment(){
			console.log("trying");
			ngDialog
			.open({
				templateUrl: "src/module/medd/modal/controlAppointment/template.html",
				controller: "controlAppointmentController",
				controllerAs: "cac",
				width: "60%",
			})
			.closePromise
			.then(function(response){
				pclc.appointments = Appointments.query();
			});
		}
	}
})();