(function(){
	angular
	.module('angularApp')
	.controller('manageCensusController', manageCensusController);

	manageCensusController.$inject = ["Appointments", "Doctors", "Patients", "Operators", "$scope", "$timeout", "$location", "$localStorage"];

	function manageCensusController(Appointments, Doctors, Patients, Operators, $scope, $timeout, $location, $localStorage){
		var mcc = this;

		mcc.filters 		 = {byPatient: '-1', byDoctor: '-1', searchTerm: null, sinceDate: null, tillDate: null};
		mcc.hover 			 = {details: false, delete: false, status: false};
		mcc.appointments = Appointments.query();
		mcc.doctors 		 = Doctors.query();
		mcc.patients 		 = Patients.query();
		mcc.changeStatus = changeStatus;

		function changeStatus(){

		}
	}
})();