(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('monthlyReportController', monthlyReportController);

	monthlyReportController.$inject = ["$scope", "monthReport"];

	function monthlyReportController($scope, monthReport){
		let mrc = this;

		mrc.getData 		 = getData;
		mrc.reportData   = monthReport.query({target: "data", date: moment().format("MM/YYYY")});
		mrc.reportMeta   = monthReport.get({target: "meta", date: moment().format("MM/YYYY")});
		mrc.selectedDate = null;

		function getData(){
		}
	}
})();