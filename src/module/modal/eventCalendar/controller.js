(function() {
	'use strict';

	angular
		.module('angularApp')
		.controller('eventCalendarController', eventCalendarController);

	eventCalendarController.$inject = ["Appointments", "$scope", "$rootScope", "CalendarConfig", "$q"];

	function eventCalendarController(Appointments, $scope, $rootScope, CalendarConfig, $q) {
		var ecc = this;

		$scope.$on('ngDialog.opened', function(e, $dialog) {
			$q.all([Appointments.query().$promise, CalendarConfig.find()]).then(function(response) {
				let listOfAppointments = [];
				let listOfBloquedIntervals = [];

				listOfAppointments = response[0].map(function(item) {
					return {
						title: item.patient_fullname,
						start: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm"),
						end: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm").add(30, 'm'),
						color: item.status === "done" ? '#4caf50' : item.status === "absent" ? '#f44336' : '#ffc107',
					}
				});

				listOfBloquedIntervals = response[1].map(function(item) {
					return {
						title: item.title,
						start: moment(`${item.start_date} ${item.start_time}`, "DD/MM/YYYY HH:mm"),
						end: moment(`${item.end_date} ${item.end_time}`, "DD/MM/YYYY HH:mm"),
						color: "#2196f3",
					}
				});

				$('#calendar').fullCalendar({
					events: _.concat(listOfAppointments, listOfBloquedIntervals),
					weekends: false,
					nowIndicator: true,
					height: "auto",
					allDaySlot: false,
					slotDuration: "00:30:00",
					minTime: "08:30:00",
					maxTime: "17:00:00",
					slotLabelInterval: "00:30:00",
					businessHours: [{
						dow: [1, 2, 3, 4, 5],
						start: "08:30",
						end: "13:00",
					}, {
						dow: [1, 2, 3, 4, 5],
						start: "14:30",
						end: "17:00",
					}],
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