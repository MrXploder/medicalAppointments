(function(){
	'use strict';
	 
	angular
	.module('angularApp')
	.controller('ocationalAppointmentController', ocationalAppointmentController);

	ocationalAppointmentController.$inject = ["Appointments", "Patients", "Doctors", "Operators", "$scope", "$filter"];

	function ocationalAppointmentController(Appointments, Patients, Doctors, Operators, $scope, $filter){
		var oac = this;

		oac.form = {date: moment().format("DD/MM/YYYY"), time: moment().format("HH:mm"), status: "done"};
		oac.patients  = Patients.query();
		oac.doctors   = Doctors.query();
		oac.operators = Operators.query();
		oac.disabled  = true;
		oac.storeAppointment = storeAppointment;

		angular.element(function(){
			oac.patients
			.$promise
			.then(function(response){
				let autocompleteData = {};
				oac.patients.forEach(function(patient){
					autocompleteData[patient.full_name] = null;
				});
				$('#patient-autocomplete').autocomplete({ 
					data: autocompleteData,
					limit: 20,
					minLength: 1,
				});
			});		
		});

		function storeAppointment(){
			Appointments
			.create(oac.form)
			.$promise
			.then(function(response){
				Materialize.toast("Agendado", 5000, "green");
				$scope.closeThisDialog();
			})
			.catch(function(response){
				Materialize.toast(response.statusText, 5000, "red");
			});
		}

		$scope.$watch('oac.form.patient_fullname', function(){
			if(oac.form.patient_fullname === undefined) return;

			var filteredPatient = $filter('filter')(angular.copy(oac.patients), {full_name: oac.form.patient_fullname}, true)[0];

			if(typeof filteredPatient === "undefined"){ 
				oac.form.patient_id = 0;
				oac.form.patient_rut          = null;
				oac.form.patient_mobilenumber = null; 
				oac.form.patient_phonenumber  = null;
				oac.form.patient_allergies    = null;
			}
			else { 
				oac.form.patient_id 			    = filteredPatient.id;
				oac.form.patient_rut          = filteredPatient.rut;
				oac.form.patient_mobilenumber = filteredPatient.mobile_number; 
				oac.form.patient_phonenumber  = filteredPatient.phone_number;
				oac.form.patient_allergies    = filteredPatient.allergies;
			}
		}, true);
	}
})();