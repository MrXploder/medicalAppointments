(function(){
	'use strict';
	 
	angular
	.module('angularApp')
	.controller('dailyStatisticsController', dailyStatisticsController);

	dailyStatisticsController.$inject = ["Appointments", "Doctors", "Patients", "Operators", "ngDialog", "$scope", "$timeout", "$location", "$localStorage", "Printer", "$filter"];

	function dailyStatisticsController(Appointments, Doctors, Patients, Operators, ngDialog, $scope, $timeout, $location, $localStorage, Printer, $filter){
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
		dsc.isAdding								= false;
		dsc.isPrinting 						  = false;
		dsc.print 									= print;


		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);
			appointment.status = statusText;
			if(statusText === "done"){
				ngDialog.openConfirm({
					templateUrl: "src/module/modal/refillAppointment/template.html",
					controller: "refillAppointmentController",
					controllerAs: "rac",
					data: appointment,
				})
				.then(function(response){
					Materialize.toast("Exito", 5000, "green");
					dsc.appointments = Appointments.query();
				});
			}
			else{
				appointment
				.$update()
				.then(function(response){
					Materialize.toast("Exito", 5000, "green");
				})
			}
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

		function addOcationalAppointment(){
			dsc.isAdding = true;
			ngDialog
			.open({
				templateUrl: "src/module/modal/ocationalAppointment/template.html",
				controller: "ocationalAppointmentController",
				controllerAs: "oac",
				showClose: true,
			})
			.closePromise
			.then(function(response){
				dsc.appointments = Appointments.query();
				dsc.isAdding 		 = false;
			});
		}

		function print(){
			dsc.isPrinting = true;
			Printer.print('src/module/print/printDaily/template.html', {
				vm:{
					data: dsc.filteredAppointments,
					meta:{
						currentDate: moment().format("DD/MM/YYYY HH:mm").toString(),
					},
				}
			}, function(response){
				dsc.isPrinting = false;
			});
		}
	}
})();