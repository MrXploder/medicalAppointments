(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('monthlyReportController', monthlyReportController);

	monthlyReportController.$inject = ["$scope", "monthReport", "Printer"];

	function monthlyReportController($scope, monthReport, Printer){
		let mrc = this;

		mrc.reportData  = monthReport.query({target: "data", date: moment().format("MM/YYYY")});
		mrc.selectMonth = moment().format("MM").toString();
		mrc.selectYear  = moment().format("YYYY").toString();
		mrc.print       = print;

		function print(){
			Printer.print('src/module/print/printReport/template.html', {
				vm:{
					data: mrc.reportData,
					meta: {
						currentDate: moment().format("dddd DD [de] MMMM [de] YYYY [a las] HH:mm").toString(),
						reportDate : moment(`${mrc.selectMonth}/${mrc.selectYear}`, "MM/YYYY").format("MMMM [de] YYYY").toString(),
					}
				}
			});
		}

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