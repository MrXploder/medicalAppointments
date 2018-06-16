(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('monthlyReportController', monthlyReportController);

	monthlyReportController.$inject = ["$scope", "monthReport"];

	function monthlyReportController($scope, monthReport){
		let mrc = this;

		mrc.reportData  = monthReport.query({target: "data", date: moment().format("MM/YYYY")});
		mrc.selectMonth = moment().format("MM").toString();
		mrc.selectYear  = moment().format("YYYY").toString();

		$scope.$watchGroup(['mrc.selectMonth', 'mrc.selectYear'], function(){
			if(!mrc.selectMonth || !mrc.selectYear) return;
			else{
				monthReport
				.query({
					date: `${mrc.selectMonth}/${mrc.selectYear}`
				})
				.$promise
				.then(response => mrc.reportData = response);
			}
		}, true);
	}
})();