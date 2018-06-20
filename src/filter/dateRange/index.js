(function(){
	'use strict';
	 
	angular
	.module('angularApp')
	.filter('dateRange', dateRange);

	function dateRange(){
		return function(items, fromDate, toDate){
			let filtered 	= [];
			let from_date = fromDate ? moment(fromDate, "DD/MM/YYYY") : moment();
			let to_date   = toDate   ? moment(toDate, "DD/MM/YYYY")   : from_date;
			
			angular.forEach(items, function(item){
				item_date = moment(item.date, "DD/MM/YYYY");
				if(from_date <= item_date && item_date <= to_date){
					filtered.push(item);
				}
			});
			return filtered;
		}
	}
})();
