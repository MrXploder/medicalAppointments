(function(){
	angular
	.module('angularApp')
	.controller('ocationalAppointmentController', ocationalAppointmentController);

	ocationalAppointmentController.$inject = ["Appointments", "Patients", "Doctors", "$scope", "$filter"];

	function ocationalAppointmentController(Appointments, Patients, Doctors, $scope, $filter){
		var oac = this;

		oac.form = {date: moment().format("DD/MM/YYYY"), time: moment().format("HH:mm"), status: "done"};
		oac.patients = Patients.query();
		oac.doctors  = Doctors.query();
		oac.disabled = true;
		oac.storeAppointment = storeAppointment;

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
			let filteredPatient = $filter('filter')(angular.copy(oac.patients), {full_name: oac.form.patient_fullname}, true)[0];
			if(typeof filteredPatient === "undefined"){ 
				oac.form.patient_id = 0;
			}
			else { 
				oac.form.patient_id = filteredPatient.id;
			}
		}, true);
	}
})();