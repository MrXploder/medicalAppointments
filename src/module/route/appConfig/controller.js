(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('appConfigController', appConfigController);

	appConfigController.$inject = ["$scope", "CalendarConfig", "ngDialog"];

	function appConfigController($scope, CalendarConfig, ngDialog){
		let acc = this;

		acc.remove 							 = remove;
		acc.calendarConfig 			 = [];
		acc.addNewCalendarConfig = addNewCalendarConfig;

		activate();
		///////////////////////////////////

		function activate(){
			CalendarConfig.find().then(function(data){
				acc.calendarConfig = data;
			});
		}

		function addNewCalendarConfig(){
			ngDialog.openConfirm({
				controller: "addCalendarConfigController",
				controllerAs: "accc",
				templateUrl: "src/module/modal/addCalendarConfig/template.html",
				width: "30%",
				showClose: true,
			}).then(function(response){
				Materialize.toast("Creado", 5000, "green");
				activate();
			});
		}

		function remove(resource){
			resource.$delete({id: resource.id}).then(function(response){
				Materialize.toast("Eliminado", 5000, "red");
				activate();
			});
		}
	}
})();