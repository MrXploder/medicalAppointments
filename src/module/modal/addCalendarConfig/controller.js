(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('addCalendarConfigController', addCalendarConfigController);

	addCalendarConfigController.$inject = ["$scope", "CalendarConfig"];

	function addCalendarConfigController($scope, CalendarConfig){
		let accc = this;

		accc.form 	= {};
		accc.save 	= save;

		activate();
		///////////////////////////////////////////

		function activate(){

		}

		function save(){
			let resource = new CalendarConfig.resource(accc.form);

			resource.$save().then(function(response){
				$scope.confirm();
			});
		}
	}
})();