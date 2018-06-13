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
				let transformedEvents = [],
						listOfAppointments = angular.copy(response);

				for(let item of listOfAppointments){
					if(item.status === "done") item.color = "#4caf50";
					else if(item.status === "absent") item.color = "#f44336";
					else item.color = "#ffc107";
					
					transformedEvents.push({
						title: item.patient_name,
						start: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm"),
						end: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm").add(5, 'm'),
						color: item.color,
					});
				}
				$('#calendar').fullCalendar({
					events: transformedEvents,
					weekends: false,
					nowIndicator: true,
					slotDuration: "00:05:00",
					minTime: "08:00:00",
					maxTime: "18:35:00",
					defaultView: 'agendaWeek',
					header: {
						left: 'prev,next today',
						center: 'title',
						right: 'agendaWeek,agendaDay'
					},
					dayClick: function(date, jsEvent, view) {
						/*date is a moment object because fullcalendar.io is based on moment()*/
						$scope.closeThisDialog({
							date: date.format("DD/MM/YYYY"), 
							time: date.format("HH:mm")
						});
					},
				});
			});
			
		});
	}
})();