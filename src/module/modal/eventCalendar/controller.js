(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('eventCalendarController', eventCalendarController);

	eventCalendarController.$inject = ["Appointments", "$scope", "$rootScope"];

	function eventCalendarController(Appointments, $scope, $rootScope){
		var ecc = this;

		$scope.$on('ngDialog.opened', function (e, $dialog) {
			Appointments
			.query()
			.$promise
			.then(function(response){
				let eventList 				 = [],
						listOfAppointments = angular.copy(response);

				for(let item of listOfAppointments){
					eventList.push({
						title : item.patient_fullname,
						start : moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm"),
						end   : moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm").add(5, 'm'),
						color : item.status === "done" ? '#4caf50' : item.status === "absent" ? '#f44336' : '#ffc107',
					});
				}
				$('#calendar').fullCalendar({
					events       : eventList,
					weekends     : false,
					nowIndicator : true,
					height 			 : "auto",
					slotDuration : "00:05:00",
					minTime      : "08:00:00",
					maxTime      : "18:35:00",
					defaultView  : 'agendaWeek',
					header       : {
						left   : 'prev,next today',
						center : 'title',
						right  : 'agendaWeek,agendaDay'
					},
					dayClick     : function(date, jsEvent, view) {
						/*date is a moment object because fullcalendar.io is based on moment()*/
						$scope.closeThisDialog({
							date : date.format("DD/MM/YYYY"), 
							time : date.format("HH:mm")
						});
					},
				});
			});
		});
	}
})();