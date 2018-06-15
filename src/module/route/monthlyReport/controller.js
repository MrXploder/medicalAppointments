(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('monthlyReportController', monthlyReportController);

	monthlyReportController.$inject = ["$scope", "monthReport"];

	function monthlyReportController($scope, monthReport){
		let mrc = this;

		mrc.getData = getData;

		function getData(){

		}
	}
})();