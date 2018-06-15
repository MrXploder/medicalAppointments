(function() {
	'use strict';

	angular
	.module('angularApp')
	.factory('monthReport', monthReport);

	monthReport.$inject = ["$resource"];

	function monthReport($resource){
		return $resource("/server/restapi/month-report.php/",{});
	}
})();