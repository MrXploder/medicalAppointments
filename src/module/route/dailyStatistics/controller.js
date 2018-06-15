(function(){
	angular
	.module('angularApp')
	.controller('dailyStatisticsController', dailyStatisticsController);

	dailyStatisticsController.$inject = ["Appointments", "Doctors", "Patients", "Operators", "ngDialog", "$scope", "$timeout", "$location", "$localStorage"];

	function dailyStatisticsController(Appointments, Doctors, Patients, Operators, ngDialog, $scope, $timeout, $location, $localStorage){
		var dsc = this;
		$scope.$storage = $localStorage;

		dsc.filters 		 						= { byPatient: '-1', byDoctor: '-1', searchTerm: '', sinceDate: null, tillDate: null};
		dsc.hover 			 						= { details: false, delete: false, status: false };
		dsc.appointments 						= Appointments.query();
		dsc.doctors 							  = Doctors.query();
		dsc.patients 		 					  = Patients.query();
		dsc.changeAppointmentStatus = changeAppointmentStatus;
		dsc.deleteAppointment       = deleteAppointment;
		dsc.addOcationalAppointment = addOcationalAppointment;


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
				let index = dsc.appointments.indexOf(appointment);
				dsc.appointments.splice(index, 1);
				Materialize.toast("Borrado", 5000, "green");
			});
		}

		function openAppointmentDetails(appointment){
		}

		function addOcationalAppointment(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/ocationalAppointment/template.html",
				controller: "ocationalAppointmentController",
				controllerAs: "oac",
				width: "60%",
			})
			.closePromise
			.then(function(response){
				dsc.appointments = Appointments.query();
			});
		}
	}
})();