(function() {
	'use strict';

	angular
		.module('angularApp')
		.controller('homeController', homeController);

	homeController.$inject = ["Doctors", "Reminders", "$localStorage", "$rootScope", "$location", "ngDialog"];

	function homeController(Doctors, Reminders, $localStorage, $rootScope, $location, ngDialog) {
		var hmc = this;

		hmc.isAdding = false;
		hmc.addReminder = addReminder;
		hmc.dismissReminder = dismissReminder;
		hmc.reminders = [];

		activate();

		//////////////////////////////////////////

		function activate() {
			Reminders
				.query()
				.$promise
				.then(function(response) {
					hmc.reminders = response;
				});
		}

		function addReminder() {
			hmc.isAdding = true;
			ngDialog
				.openConfirm({
					templateUrl: "src/module/modal/addReminder/template.html",
					controller: "addReminderController",
					controllerAs: "arc",
					showClose: true,
				})
				.then(function(response) {
					Materialize.toast("Exito", 5000, "green");
					Reminders
						.query()
						.$promise
						.then(function(response) {
							hmc.reminders = response;
						});
				})
				.finally(function(response) {
					hmc.isAdding = false;

				})
		}

		function dismissReminder(reminder) {
			Reminders
				.delete({
					id: reminder.id
				})
				.$promise
				.then(function(response) {
					hmc.reminders.splice(hmc.reminders.indexOf(reminder), 1);
					Materialize.toast("Dismissed", 5000, "blue");
				});
		}
	}
})();