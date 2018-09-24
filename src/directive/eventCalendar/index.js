(function() {
	'use strict';

	angular
		.module('angularApp')
		.directive('eventCalendar', eventCalendarDirective);

	function eventCalendarDirective() {
		return {
			template: '<div id="calendar" context-menu="$vd.menuOptions"></div>',
			controller: "eventCalendarDirectiveController",
			controllerAs: "$vd",
			scope: {},
			bindToController: {
				dayClickModel: "=?",
			}
		}
	}
})();