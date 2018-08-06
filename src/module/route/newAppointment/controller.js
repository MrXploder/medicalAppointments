(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('newAppointmentController', newAppointmentController);

	newAppointmentController.$inject = ["Doctors", "Patients", "Appointments", "Operators", "Printer", "ngDialog", "$scope", "$filter", "$rootScope", "$location", "$localStorage"];

	function newAppointmentController(Doctors, Patients, Appointments, Operators, Printer, ngDialog, $scope, $filter, $rootScope, $location, $localStorage){
		var nac = this;

		nac.form              = {};
		// nac.doctors           = Doctors.query();
		// nac.patients          = Patients.query();
		// nac.operators 				= Operators.query();
		nac.doctors 					= [];
		nac.patients 					= [];
		nac.operators 				= [];
		nac.isCreating				= false;
		nac.showSchedule      = showSchedule;
		nac.createAppointment = createAppointment;

		activate();
		//////////////////////////////////////////////////////////////////////

		function activate(){
			Operators.query().$promise.then(function(operators){
				nac.operators = operators;
			});

			Patients.query().$promise.then(function(patients){
				nac.patients = patients;
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

			Doctors.query().$promise.then(function(doctors){
				nac.doctors = doctors;
			});
		}

		// nac.printTest = function(){
		// 	Printer.print("src/module/print/printAppointment/template.html", {
		// 		vm: {
		// 			data: nac.form,
		// 			meta: { currentDate: moment().format("DD/MM/YYYY").toString() }
		// 		}
		// 	});
		// }

		function showSchedule(){
			ngDialog.open({
				templateUrl: "src/module/modal/eventCalendar/template.html",
				controller: "eventCalendarController",
				controllerAs: "ecc",
				width: "60%",
				showClose: true,
			})
			.closePromise
			.then(function(response){
				nac.form.date = response.value.date;
				nac.form.time = response.value.time;
			});
		}

		function createAppointment(){
			nac.isCreating = true;
			Printer.print("src/module/print/printAppointment/template.html", {
				vm: {
					data: nac.form,
					meta: { currentDate: moment().format("DD/MM/YYYY").toString() }
				}
			}, function(){
				nac.form.end_status = "end";
				Appointments
				.create(nac.form)
				.$promise
				.then(function(response){
					Materialize.toast("Agendado", 5000, "green");
					nac.isCreating = false;
					$rootScope.$evalAsync(function(){ $location.path("/dailyStatistics"); });
				})
				.catch(function(response){
					nac.isCreating = false;
					Materialize.toast(response.statusText, 5000, "red");
				});
			});
		};

		$scope.$watch('nac.form.patient_fullname', function(){
			if(!nac.form.patient_fullname) return;

			var filteredPatient = $filter('filter')(angular.copy(nac.patients), {full_name: nac.form.patient_fullname}, true)[0];

			if(!filteredPatient){
				nac.form.patient_id 					= 0;
				nac.form.patient_rut          = null;
				nac.form.patient_mobilenumber = null;
				nac.form.patient_phonenumber  = null;
				nac.form.patient_allergies    = null;
			}
			else {
				nac.form.patient_id 			    = filteredPatient.id;
				nac.form.patient_rut          = filteredPatient.rut;
				nac.form.patient_mobilenumber = filteredPatient.mobile_number;
				nac.form.patient_phonenumber  = filteredPatient.phone_number;
				nac.form.patient_allergies    = filteredPatient.allergies;
			}
		}, true);

		$scope.$watch('nac.form.operator_id', function(){
			if(nac.form.operator_id === undefined) return;
			let filteredOperator = $filter('filter')(angular.copy(nac.operators), {id: nac.form.operator_id}, true)[0];
			nac.form.operator_fullname = filteredOperator.full_name;
		}, true);

	}
})();