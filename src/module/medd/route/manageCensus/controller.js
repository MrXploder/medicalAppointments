(function(){
	angular
	.module('angularApp')
	.controller('manageCensusController', manageCensusController);

	manageCensusController.$inject = ["Appointments", "Doctors", "Patients", "Operators", "$scope", "$timeout", "$location", "$localStorage"];

	function manageCensusController(Appointments, Doctors, Patients, Operators, $scope, $timeout, $location, $localStorage){
		var mcc = this;

		mcc.filters 		 						= { byPatient: '-1', byDoctor: '-1', searchTerm: '', sinceDate: null, tillDate: null};
		mcc.hover 			 						= { details: false, delete: false, status: false };
		mcc.appointments 						= Appointments.query();
		mcc.doctors 							  = Doctors.query();
		mcc.patients 		 					  = Patients.query();
		mcc.changeAppointmentStatus = changeAppointmentStatus;
		mcc.deleteAppointment       = deleteAppointment;

		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);

			appointment.status = statusText;

			appointment
			.$update()
			.catch(function success(response){
				Materialize.toast(response.statusText, 5000, "red");
				appointment.status = oldStatus;
			});
		}

		function deleteAppointment(appointment){
			appointment
			.$delete({id: appointment.id})
			.then(function success(response){
				mcc.appointments.splice(mcc.appointments.indexOf(appointment), 1);
				Materialize.toast("Borrado", 5000, "green");
			});
		}

		function openAppointmentDetails(appointment){

		}
	}
})();