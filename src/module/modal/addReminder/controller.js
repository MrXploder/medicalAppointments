(function() {
	'use strict';

	angular
	.module("angularApp")
	.controller('addReminderController', addReminderController);

	addReminderController.$inject = ["$scope", "Reminders"];

	function addReminderController($scope, Reminders){
		let arc = this;

		arc.form   = {};
		arc.commit = commit;

		activate();

		/////////////////////////////////

		function activate(){

		}

		function commit(){
			Reminders
			.create(arc.form)
			.$promise
			.then(function(response){
				$scope.confirm();
			});
		}
	}
})();