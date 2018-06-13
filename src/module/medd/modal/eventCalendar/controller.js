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
				let transformedEvents = [];
				let listOfAppointments = angular.copy(response);
				for(let item of listOfAppointments){
					console.log("item->", item);
					transformedEvents.push({
						title: item.patient_name,
						start: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm"),
						end: moment(`${item.date} ${item.time}`, "DD/MM/YYYY HH:mm").add(5, 'm'),
					});
				}
				console.log("endArray->", transformedEvents);
				$('#calendar').fullCalendar({
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
						$scope.closeThisDialog({
							date: date.format("DD/MM/YYYY"), 
							time: date.format("HH:mm")
						});
					},
					events: transformedEvents,
				});
			});
			
		});
	}
})();