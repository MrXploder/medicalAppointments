(function(){
	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope", "ngDialog", "$ngConfirm", "Appointments"];

	function patientControlListController($scope, ngDialog, $ngConfirm, Appointments){
		var pclc = this;

		pclc.appointments 					 = Appointments.query();
		pclc.addControlAppointment 	 = addControlAppointment;
		pclc.changeAppointmentStatus = changeAppointmentStatus;

		function addControlAppointment(){
			ngDialog
			.open({
				templateUrl: "src/module/modal/controlAppointment/template.html",
				controller: "controlAppointmentController",
				controllerAs: "cac",
				width: "60%",
			})
			.closePromise
			.then(function(response){
				pclc.appointments = Appointments.query();
			});
		}

		function changeAppointmentStatus(statusText, appointment){
			let oldStatus = angular.copy(appointment.status);
			
			if(statusText === "absent"){
				$ngConfirm({
					useBootstrap: false,
					boxWidth: '30%',
					title: "Precaución",
					content: "Esta accion no se puede deshacer",
					autoClose: "cancel|5000",
					buttons: {
						confirm: {
							text: "Dejar como Ausente",
							btnClass: "btn waves-effect waves-light red",
							action: function(){
								appointment.status = statusText;
								appointment
								.$update()
								.catch(function success(response){
									Materialize.toast(response.statusText, 5000, "red");
									appointment.status = oldStatus;
								});
							}
						},
						cancel:{
							text: "Salir",
							btnClass: "btn waves-effect waves-light white black-text",
							action: function() {},
						}
					}
				})
			}
			else if(statusText === "done"){
				ngDialog.open({
					templateUrl: "src/module/modal/fulfillAppointment/template.html",
					controller: "fulfillAppointmentController",
					controllerAs: "fac",
					width: "60%",
					data: appointment,
				})
				.closePromise
				.then(function(response){
				})
			}
		}
	}
})();