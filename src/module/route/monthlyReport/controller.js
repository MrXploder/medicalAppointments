(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('monthlyReportController', monthlyReportController);

	monthlyReportController.$inject = ["$scope", "monthReport", "Printer"];

	function monthlyReportController($scope, monthReport, Printer){
		let mrc = this;

		mrc.reportData  = {};
		mrc.selectMonth = moment().format("MM").toString();
		mrc.selectYear  = moment().format("YYYY").toString();
		mrc.print       = print;
		mrc.isPrinting  = false;

		activate();
		//////////////////////////////////////////////////////

		function activate(){
			monthReport.find({date: moment().format("MM/YYYY")}).then(function(response){
				mrc.reportData = response;
				mrc.reportData.meta = {allTotal: 0, allF: 0, allA: 0, allB: 0, allU: 0};

				mrc.reportData.data.forEach(function(item){
					mrc.reportData.meta.allTotal += item.total || 0;
					mrc.reportData.meta.allF += item.beneficiario || 0;
					mrc.reportData.meta.allA += item.a_cerrada || 0;
					mrc.reportData.meta.allB += item.a_abierta || 0;
					mrc.reportData.meta.allU += item.urgencia || 0;
				})
				console.log(mrc.reportData.meta);
			});
		}

		function print(){
			mrc.isPrinting = true;
			Printer.print('src/module/print/printReport/template.html', {
				vm:{
					data: mrc.reportData,
					meta: {
						currentDate: moment().format("dddd DD [de] MMMM [de] YYYY [a las] HH:mm").toString(),
						reportDate : moment(`${mrc.selectMonth}/${mrc.selectYear}`, "MM/YYYY").format("MMMM [de] YYYY").toString(),
					}
				}
			}, function(response){
				mrc.isPrinting = false;
			});
		}

		$scope.$watchGroup(['mrc.selectMonth', 'mrc.selectYear'], function(){
			if(!mrc.selectMonth || !mrc.selectYear) return;
			else{
				monthReport.find({
					date: `${mrc.selectMonth}/${mrc.selectYear}`
				})
				.then(function(response){
					mrc.reportData = response;
					mrc.reportData.meta = {allTotal: 0, allF: 0, allA: 0, allB: 0, allU: 0};

					mrc.reportData.data.forEach(function(item){
						mrc.reportData.meta.allTotal += item.total || 0;
						mrc.reportData.meta.allF += item.beneficiario || 0;
						mrc.reportData.meta.allA += item.a_cerrada || 0;
						mrc.reportData.meta.allB += item.a_abierta || 0;
						mrc.reportData.meta.allU += item.urgencia || 0;
					})
				});
			}
		}, true);
	}
})();