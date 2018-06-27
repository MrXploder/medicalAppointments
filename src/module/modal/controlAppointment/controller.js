(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller("controlAppointmentController", controlAppointmentController);

	controlAppointmentController.$inject = ["$scope", "Operators", "Patients", "Doctors", "Appointments", "ngDialog", "$filter", "$localStorage"];

	function controlAppointmentController($scope, Operators, Patients, Doctors, Appointments, ngDialog, $filter, $localStorage){
		let cac = this;
		
		cac.form        			= {};
		cac.patients  	 			= Patients.query();
		cac.doctors      			= Doctors.query();
		cac.operators					= Operators.query();
		cac.showSchedule 			= showSchedule;
		cac.createAppointment = createAppointment;

		angular.element(function(){
			cac.patients
			.$promise
			.then(function(response){
				let autocompleteData = {};
				cac.patients.forEach(function(patient){
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
			.then(function(response){
				cac.form.date = response.value.date;
				cac.form.time = response.value.time;
			});
		}

		function createAppointment(){
			Appointments
			.create(cac.form)
			.$promise
			.then(function success(response){
				Materialize.toast("Agendado", 5000, "green");
				$scope.closeThisDialog();
				$route.reload();
			})
			.catch(function error(response){
				Materialize.toast(response.statusText, 5000, "red");
			});
		};

		$scope.$watch('cac.form.patient_fullname', function(){
			if(cac.form.patient_fullname === undefined) return;

			var filteredPatient = $filter('filter')(angular.copy(cac.patients), {full_name: cac.form.patient_fullname}, true)[0];

			if(typeof filteredPatient === "undefined"){ 
				cac.form.patient_id 					= 0;
				cac.form.patient_rut          = null;
				cac.form.patient_mobilenumber = null; 
				cac.form.patient_phonenumber  = null;
				cac.form.patient_allergies    = null;
			}
			else { 
				cac.form.patient_id 			    = filteredPatient.id;
				cac.form.patient_rut          = filteredPatient.rut;
				cac.form.patient_mobilenumber = filteredPatient.mobile_number; 
				cac.form.patient_phonenumber  = filteredPatient.phone_number;
				cac.form.patient_allergies    = filteredPatient.allergies;
			}
		}, true);
	}
})();