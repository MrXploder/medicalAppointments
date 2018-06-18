(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('newAppointmentController', newAppointmentController);

	newAppointmentController.$inject = ["Doctors", "Patients", "Appointments", "Printer", "ngDialog", "$scope", "$filter", "$rootScope", "$location", "$localStorage"];

	function newAppointmentController(Doctors, Patients, Appointments, Printer, ngDialog, $scope, $filter, $rootScope, $location, $localStorage){
		var nac = this;

		nac.form              = {};
		nac.doctors           = Doctors.query();
		nac.patients          = Patients.query();
		nac.showSchedule      = showSchedule;
		nac.createAppointment = createAppointment;

		angular.element(function(){
			nac.patients
			.$promise
			.then(response => {
				let autocompleteData = {};
				nac.patients.forEach(function(patient){
					autocompleteData[patient.full_name] = null;
				});
				$('#patient-autocomplete').autocomplete({ 
					data: autocompleteData,
					limit: 20,
					minLength: 1,
				});
			});		
		});

		function showSchedule(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/eventCalendar/template.html",
				controller: "eventCalendarController",
				controllerAs: "ecc",
				width: "60%",
			})
			.closePromise
			.then(response => {
				nac.form.date = response.value.date;
				nac.form.time = response.value.time;
			});
		}

		function createAppointment(){
			nac.form.operator_id = $localStorage.currentUser.id;
			Printer.print("src/module/print/printAppointment/template.html", 
				{
					vm: {
						data: nac.form,
						meta: {},
					}
				}, function(){
					Appointments 
					.create(nac.form)
					.$promise
					.then(response => {
						Materialize.toast("Agendado", 5000, "green");
						$rootScope.$evalAsync(_ => $location.path("/patientControlList"));
					})
					.catch(response => {
						Materialize.toast(response.statusText, 5000, "red");
					});
				});
			};

			$scope.$watch('nac.form.patient_fullname', function(){
				if(nac.form.patient_fullname === undefined) return;

				var filteredPatient = $filter('filter')(angular.copy(nac.patients), {full_name: nac.form.patient_fullname}, true)[0];

				if(typeof filteredPatient === "undefined"){ 
					nac.form.patient_id = 0;
				}
				else { 
					nac.form.patient_id = filteredPatient.id;
				}
			}, true);

		}
	})();