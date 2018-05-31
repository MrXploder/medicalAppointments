(function(){
   angular
   .module('angularApp')
   .controller('manageCensusController', manageCensusController);

   manageCensusController.$inject = ["Appointments", "Doctors", "Patients", "Operators", "$scope", "$timeout", "$location", "$localStorage"];

   function manageCensusController(Appointments, Doctors, Patients, Operators, $scope, $timeout, $location, $localStorage){
   	var mcc = this;

   	mcc.patientFilter = '-1';
   	mcc.doctorFilter = '-1';
   	mcc.appointments = Appointments.query();
   	mcc.doctors = Doctors.query();
   	mcc.patients = Patients.query();
   	mcc.changeStatus = changeStatus;

   	function changeStatus(){

   	}
   }
})();