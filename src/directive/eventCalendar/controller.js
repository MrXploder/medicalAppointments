(function() {
	'use strict';

	angular
		.module('angularApp')
		.controller('eventCalendarDirectiveController', eventCalendarDirectiveController);

	eventCalendarDirectiveController.$inject = ["Appointments", "CalendarConfig", "$scope", "$timeout"];

	function eventCalendarDirectiveController(Appointments, CalendarConfig, $scope, $timeout) {
		let $vd = this;

		$vd.dayClickModel = "";
		$vd.dayRightClickModel = "";
		/**
		$vd.dayClickModel is an scope object which is setted in dayRightClick method of fullcalendar
		dayRightClick is a custom method made by a github user from which in this moment I dont remember his name xdxd.
		*/
		$vd.menuOptions = [{
			text: 'Bloquear Hora',
			click($itemScope, $event, modelValue, text, $li) {
				while (!$itemScope.$vd.dayRightClickModel);
				const Resource = new CalendarConfig.resource({
					title: "Hora Bloqueada",
					start_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					start_time: $itemScope.$vd.dayRightClickModel.utc().format("HH:mm").toString(),
					end_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					end_time: $itemScope.$vd.dayRightClickModel.utc().add(30, "m").format("HH:mm").toString(),
				});

				Resource.$save().then(() => {
					$('#calendar').fullCalendar('destroy');
					activate();
				});
			}
		}, {
			text: 'Curación Avanzada',
			click($itemScope, $event, modelValue, text, $li) {
				const Resource = new CalendarConfig.resource({
					title: "Curación Avanzada",
					start_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					start_time: $itemScope.$vd.dayRightClickModel.utc().format("HH:mm").toString(),
					end_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					end_time: $itemScope.$vd.dayRightClickModel.utc().add(30, "m").format("HH:mm").toString(),
				});

				Resource.$save().then(() => {
					$('#calendar').fullCalendar('destroy');
					activate();
				});
			}
		}, {
			text: 'Sobre Cupo',
			click($itemScope, $event, modelValue, text, $li) {
				const Resource = new CalendarConfig.resource({
					title: "Sobre Cupo",
					start_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					start_time: $itemScope.$vd.dayRightClickModel.utc().format("HH:mm").toString(),
					end_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					end_time: $itemScope.$vd.dayRightClickModel.utc().add(30, "m").format("HH:mm").toString(),
				});

				Resource.$save().then(() => {
					$('#calendar').fullCalendar('destroy');
					activate();
				});
			}
		}, {
			text: 'Policlinico',
			click($itemScope, $event, modelValue, text, $li) {
				const Resource = new CalendarConfig.resource({
					title: "Policlinico",
					start_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					start_time: $itemScope.$vd.dayRightClickModel.utc().format("HH:mm").toString(),
					end_date: $itemScope.$vd.dayRightClickModel.utc().format("DD/MM/YYYY").toString(),
					end_time: $itemScope.$vd.dayRightClickModel.utc().add(30, "m").format("HH:mm").toString(),
				});

				Resource.$save().then(() => {
					$('#calendar').fullCalendar('destroy');
					activate();
				});
			}
		}];

		activate();
		//////////////////////////////////////////////////////

		function activate() {
			Promise.all([Appointments.query().$promise, CalendarConfig.find()]).then(function(response) {
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
						color: item.title === "Hora Bloqueada" ? "#2196f3" : item.title === "Curación Avanzada" ? "#3f51b5" : item.title === "Sobre Cupo" ? "#009688" : "#673ab7",
					}
				});

				/**
				FullCalendar.io is jQuery plugin.
				*/
				$timeout(function() {
					$('#calendar').fullCalendar({
						events: [...listOfAppointments, ...listOfBloquedIntervals],
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
						dayClick(date, jsEvent, view) {
							$vd.dayClickModel = date;
						},
						dayRightclick(date, resourceId, jsEvent) {
							/**
							Even if we dont pass 'date' out of this scope, this event takes
							place first so, when I implement contextMenu, we read from this scope
							the $vd model and get the date variable we want.
							*/
							$vd.dayRightClickModel = date;
						}
					});

					if ($vd.dayRightClickModel) $("#calendar").fullCalendar('gotoDate', $vd.dayRightClickModel);
				});
			});
		}
	}
})();