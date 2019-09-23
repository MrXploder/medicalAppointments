angular.module("templates-main", ["src/directive/addButton/template.html", "src/directive/appNav/template.html", "src/directive/deleteButton/template.html", "src/directive/dirPaginationControls/template.html", "src/directive/preLoadingIndicator/template.html", "src/directive/routeLoadingIndicator/template.html", "src/directive/saveButton/template.html", "src/module/include/loader/template.html", "src/module/modal/addAppointment/template.html", "src/module/modal/addCalendarConfig/template.html", "src/module/modal/addDoctor/template.html", "src/module/modal/addPatient/template.html", "src/module/modal/addReminder/template.html", "src/module/modal/controlAppointment/template.html", "src/module/modal/detailsDoctor/template.html", "src/module/modal/detailsPatient/template.html", "src/module/modal/dischargePatient/template.html", "src/module/modal/eventCalendar/template.html", "src/module/modal/fulfillAppointment/template.html", "src/module/modal/historyPatient/template.html", "src/module/modal/ocationalAppointment/template.html", "src/module/modal/operatorDetails/template.html", "src/module/modal/operatorNew/template.html", "src/module/modal/policlinic/template.html", "src/module/modal/refillAppointment/template.html", "src/module/print/printAppointment/template.html", "src/module/print/printDaily/template.html", "src/module/print/printHistory/template.html", "src/module/print/printReport/template.html", "src/module/print/printSummary/template.html", "src/module/route/appConfig/template.html", "src/module/route/dailyStatistics/template.html", "src/module/route/firstTime/template.html", "src/module/route/home/template.html", "src/module/route/manageDoctors/template.html", "src/module/route/manageOperators/template.html", "src/module/route/managePatients/template.html", "src/module/route/monthlyReport/template.html", "src/module/route/newAppointment/template.html", "src/module/route/patientControlList/template.html"]);

angular.module("src/directive/addButton/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/addButton/template.html",
    "<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"{'left': drPosition, 'right': !drPosition, 'disabled': drDisabled}\">\n" +
    "	<i class=\"fas fa-plus\"></i>\n" +
    "</a>");
}]);

angular.module("src/directive/appNav/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/appNav/template.html",
    "");
}]);

angular.module("src/directive/deleteButton/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/deleteButton/template.html",
    "<a class=\"btn-floating btn-flat waves-effect waves-light\" ng-class=\"{'disabled': drDisabled}\">\n" +
    "	<i class=\"fas fa-trash red-text\"></i>\n" +
    "</a>");
}]);

angular.module("src/directive/dirPaginationControls/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/dirPaginationControls/template.html",
    "<ul class=\"pagination\" ng-if=\"1 < pages.length || !autoHide\">\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a>\n" +
    "    </li>\n" +
    "\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("src/directive/preLoadingIndicator/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/preLoadingIndicator/template.html",
    "<div id=\"preLoadingIndicator\" class=\"modal modalLikeLoader vMiddle hCenter\">\n" +
    "  <br><br><br><br>\n" +
    "  <div class=\"preloader-wrapper big active\">\n" +
    "    <div class=\"spinner-layer spinner-blue\">\n" +
    "      <div class=\"circle-clipper left\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"gap-patch\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"circle-clipper right\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"spinner-layer spinner-red\">\n" +
    "      <div class=\"circle-clipper left\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"gap-patch\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"circle-clipper right\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"spinner-layer spinner-yellow\">\n" +
    "      <div class=\"circle-clipper left\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"gap-patch\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"circle-clipper right\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"spinner-layer spinner-green\">\n" +
    "      <div class=\"circle-clipper left\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"gap-patch\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div><div class=\"circle-clipper right\">\n" +
    "        <div class=\"circle\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br><br><br><br>\n" +
    "</div>");
}]);

angular.module("src/directive/routeLoadingIndicator/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/routeLoadingIndicator/template.html",
    "<div class=\"container screenCentered animate-show-hide\">\n" +
    "	<div class=\"preloader-wrapper big active\">\n" +
    "		<div class=\"spinner-layer spinner-blue\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-red\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-yellow\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-green\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("src/directive/saveButton/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/saveButton/template.html",
    "<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"{'left': drPosition, 'right': !drPosition, 'disabled': drDisabled}\">\n" +
    "	<i class=\"fas fa-save\"></i>\n" +
    "</a>");
}]);

angular.module("src/module/include/loader/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/include/loader/template.html",
    "<div class=\"container screenCentered animate-show-hide\">\n" +
    "	<div class=\"preloader-wrapper big active\">\n" +
    "		<div class=\"spinner-layer spinner-blue\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-red\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-yellow\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-green\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("src/module/modal/addAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/addAppointment/template.html",
    "<ng-form name=\"aaForm\">\n" +
    "	<!-- <pre>{{aac.form | json}}</pre> -->\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l6 file-field\">\n" +
    "			<button class=\"btn col l3\" ng-click=\"aac.showSchedule()\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "			<div class=\"file-path-wrapper\">\n" +
    "				<label style=\"left: 90px;\">Fecha</label>\n" +
    "				<input type=\"text\" ng-model=\"aac.form.date\" required readonly>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div input-field class=\"col offset-l1 l5\">\n" +
    "			<label>Hora</label>\n" +
    "			<input type=\"text\" ng-model=\"aac.form.time\" required readonly>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"prefix fas fa-user-tie\"></i>\n" +
    "			<label ng-class=\"aac.form.operator_id != null && 'active'\">Con: </label>\n" +
    "			<select material-select ng-model=\"aac.form.operator_id\">\n" +
    "				<option ng-repeat=\"operator in aac.operators\" value=\"{{operator.id}}\">{{operator.full_name}}</option>\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"prefix fas fa-allergies\"></i>\n" +
    "			<label ng-class=\"aac.form.reason != null && 'active'\">Motivo</label>\n" +
    "			<select ng-model=\"aac.form.reason\" material-select required>\n" +
    "				<option>Control de Herida</option>\n" +
    "				<option>Curaciones</option>\n" +
    "				<option>Control de Rutina</option>\n" +
    "				<option>Infiltración</option>\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!aaForm.$valid && 'disabled'\" ng-click=\"aac.addAppointment()\">Agendar <i class=\"fas fa-location-arrow\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/addCalendarConfig/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/addCalendarConfig/template.html",
    "<ng-form name=\"accForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Motivo</label>\n" +
    "			<input type=\"text\" ng-model=\"accc.form.title\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l5\">\n" +
    "			<label>Fecha de Inicio</label>\n" +
    "			<input input-date type=\"text\" ng-model=\"accc.form.start_date\" format=\"dd/mm/yyyy\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col l2\"></div>\n" +
    "\n" +
    "		<div input-field class=\"col l5\">\n" +
    "			<label>Hora de Inicio</label>\n" +
    "			<input input-clock data-twelvehour=\"false\" type=\"text\" ng-model=\"accc.form.start_time\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l5\">\n" +
    "			<label>Fecha de Termino</label>\n" +
    "			<input input-date type=\"text\" ng-model=\"accc.form.end_date\" format=\"dd/mm/yyyy\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col l2\"></div>\n" +
    "\n" +
    "		<div input-field class=\"col l5\">\n" +
    "			<label>Hora de Termino</label>\n" +
    "			<input input-clock data-twelvehour=\"false\" type=\"text\" ng-model=\"accc.form.end_time\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<save-button ng-click=\"accc.save()\" dr-disabled=\"!accForm.$valid\"></save-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/addDoctor/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/addDoctor/template.html",
    "<ng-form name=\"adForm\">\n" +
    "<div class=\"row\">\n" +
    "	<div input-field class=\"col l12\">\n" +
    "		<label>Nombre Completo</label>\n" +
    "		<input type=\"text\" ng-model=\"adc.form.full_name\" required>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!adForm.$valid && 'disabled'\" ng-click=\"adc.commit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/addPatient/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/addPatient/template.html",
    "<ng-form name=\"apForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Nombre Completo</label>\n" +
    "			<input type=\"text\" ng-model=\"apc.form.full_name\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>RUT</label>\n" +
    "			<input type=\"text\" ng-rut ng-model=\"apc.form.rut\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Numero de Telefono</label>\n" +
    "			<input type=\"text\" ng-model=\"apc.form.phone_number\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Numero de Celular</label>\n" +
    "			<input type=\"text\" ng-model=\"apc.form.mobile_number\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label ng-class=\"apc.form.allergies != null && 'active'\">Alergias</label>\n" +
    "			<select material-select ng-model=\"apc.form.allergies\">\n" +
    "				<option value=\"Si\">Si</option>\n" +
    "				<option value=\"No\">No</option>\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!apForm.$valid && 'disabled'\" ng-click=\"apc.commit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/addReminder/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/addReminder/template.html",
    "<ng-form name=\"arForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Titulo: </label>\n" +
    "			<input type=\"text\" ng-model=\"arc.form.title\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Recordar: </label>\n" +
    "			<textarea class=\"materialize-textarea\" ng-model=\"arc.form.body\" required></textarea>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\" ng-init=\"arc.form.background_color = ''\">\n" +
    "			<p>Color: </p>\n" +
    "			<a class=\"btn-floating waves-effect waves-light red\" ng-click=\"arc.form.background_color = 'red'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'red' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light pink\" ng-click=\"arc.form.background_color = 'pink'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'pink' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light purple\" ng-click=\"arc.form.background_color = 'purple'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'purple' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light deep-purple\" ng-click=\"arc.form.background_color = 'deep-purple'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'deep-purple' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light indigo\" ng-click=\"arc.form.background_color = 'indigo'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'indigo' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light blue\" ng-click=\"arc.form.background_color = 'blue'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'blue' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light cyan\" ng-click=\"arc.form.background_color = 'cyan'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'cyan' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light green\" ng-click=\"arc.form.background_color = 'green'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'green' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light lime\" ng-click=\"arc.form.background_color = 'lime'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'lime' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light yellow\" ng-click=\"arc.form.background_color = 'yellow'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'yellow' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light amber\" ng-click=\"arc.form.background_color = 'amber'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'amber' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light orange\" ng-click=\"arc.form.background_color = 'orange'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'orange' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light brown\" ng-click=\"arc.form.background_color = 'brown'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'brown' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light grey\" ng-click=\"arc.form.background_color = 'grey'\"><i class=\"fas\" ng-class=\"arc.form.background_color == 'grey' && 'fa-check'\"></i></a>\n" +
    "			<a class=\"btn-floating waves-effect waves-light white\" ng-click=\"arc.form.background_color = ''\"><i class=\"fas\" ng-class=\"arc.form.background_color == '' && 'fa-check black-text'\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<br><br>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!arForm.$valid && 'disabled'\" ng-click=\"arc.commit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/controlAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/controlAppointment/template.html",
    "<ng-form name=\"caForm\">\n" +
    "  <!-- <pre>{{cac.form |json}}</pre> -->\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user\"></i>\n" +
    "      <label ng-class=\"cac.form.patient_fullname != null && 'active'\">*Escribir Nombre del Usuario</label>\n" +
    "      <input type=\"text\" ng-model=\"cac.form.patient_fullname\" ng-class=\"{'invalid': cac.form.patient_id <= 0, 'valid': cac.form.patient_id > 0}\" id=\"patient-autocomplete\" class=\"autocomplete\" required>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-id-card\"></i>\n" +
    "      <label>RUN</label>\n" +
    "      <input type=\"text\" ng-rut ng-model=\"cac.form.patient_rut\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-phone\"></i>\n" +
    "      <label>Numero Fijo</label>\n" +
    "      <input type=\"text\" ng-model=\"cac.form.patient_phonenumber\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-mobile-alt\"></i>\n" +
    "      <label>Numero Celular</label>\n" +
    "      <input type=\"text\" ng-model=\"cac.form.patient_mobilenumber\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-diagnoses\"></i>\n" +
    "      <label ng-class=\"cac.form.patient_allergies != null && 'active'\">Alergico</label>\n" +
    "      <select material-select ng-model=\"cac.form.patient_allergies\">\n" +
    "        <option>Si</option>\n" +
    "        <option>No</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l6 file-field\">\n" +
    "      <button class=\"btn col l3\" ng-click=\"cac.showSchedule()\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "      <div class=\"file-path-wrapper\">\n" +
    "        <label style=\"left: 100px;\">Fecha del Primer Control</label>\n" +
    "        <input type=\"text\" id=\"patientDatePicker\" ng-model=\"cac.form.date\" required readonly>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div input-field class=\"col offset-l1 l5\">\n" +
    "      <label>Hora</label>\n" +
    "      <input type=\"text\" ng-model=\"cac.form.time\" required readonly>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-tie\"></i>\n" +
    "      <label ng-class=\"cac.form.operator_id != null && 'active'\">Con: </label>\n" +
    "      <select material-select ng-model=\"cac.form.operator_id\">\n" +
    "        <option ng-repeat=\"operator in cac.operators\" value=\"{{operator.id}}\">{{operator.full_name}}</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-md\"></i>\n" +
    "      <label ng-class=\"cac.form.doctor_id != null && 'active'\">Doctor: </label>\n" +
    "      <select material-select ng-model=\"cac.form.doctor_id\">\n" +
    "        <option ng-repeat=\"doctor in cac.doctors\" value=\"{{doctor.id}}\" ng-if=\"$index > 0\">{{doctor.full_name}}</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-compass\"></i>\n" +
    "      <label ng-class=\"cac.form.comes_from != null && 'active'\">Procedencia</label>\n" +
    "      <select ng-model=\"cac.form.comes_from\" material-select required>\n" +
    "        <option>CAE Adulto</option>\n" +
    "        <option>CAE Pediatrico</option>\n" +
    "        <option>Traumatologia</option>\n" +
    "        <option>Pensionado</option>\n" +
    "        <option>Ginecologia</option>\n" +
    "        <option>Medicina</option>\n" +
    "        <option>Cirugia</option>\n" +
    "        <option>Pediatria</option>\n" +
    "        <option>UPC</option>\n" +
    "        <option>Unidad de Emergencia Hospitalaria</option>\n" +
    "        <option>Pabellon de Yeso</option>\n" +
    "        <option>Control</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-allergies\"></i>\n" +
    "      <label ng-class=\"cac.form.reason != null && 'active'\">Motivo</label>\n" +
    "      <select ng-model=\"cac.form.reason\" material-select required>\n" +
    "        <option>Control de Herida</option>\n" +
    "        <option>Curaciones</option>\n" +
    "        <option>Control de Rutina</option>\n" +
    "        <option>Infiltración</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-file-alt\"></i>\n" +
    "      <label>Diagnóstico</label>\n" +
    "      <textarea type=\"text\" ng-model=\"cac.form.diagnosis_text\" placeholder=\"Escribe aqui...\" class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"cac.form.process_code != null && 'active'\">Procedimiento Según Estadística Mensual</label>\n" +
    "      <select ng-model=\"cac.form.process_code\" material-select required>\n" +
    "        <option value=\"21-01-001\">21-01-001 - Infiltración local medicamentos (bursas, tendones, yuxta articular)</option>\n" +
    "        <option value=\"21-01-002\">21-01-002 - Procedimiento para exploraciones radiológicas (incluye maniobra e inyección del medio de contraste)</option>\n" +
    "        <option value=\"21-01-003\">21-01-003 - Movilización articular bajo anestesia general</option>\n" +
    "        <option value=\"21-05-001\">21-05-001 - Calzón corto de yeso</option>\n" +
    "        <option value=\"21-05-002\">21-05-002 - Corbata de schantz</option>\n" +
    "        <option value=\"21-05-003\">21-05-003 - Minerva de yeso</option>\n" +
    "        <option value=\"21-05-004\">21-05-004 - Rodillera, bota larga o corta de yeso</option>\n" +
    "        <option value=\"21-05-005\">21-05-005 - Velpeau</option>\n" +
    "        <option value=\"21-05-006\">21-05-006 - Yeso antebraquial c/s ferula digital</option>\n" +
    "        <option value=\"21-05-007\">21-05-007 - Yeso braquicarpiano</option>\n" +
    "        <option value=\"21-05-008\">21-05-008 - Yeso pelvipedio bilateral</option>\n" +
    "        <option value=\"21-05-009\">21-05-009 - Yeso pelvipedio unilateral</option>\n" +
    "        <option value=\"21-05-010\">21-05-010 - Yeso toracobraqueal</option>\n" +
    "        <option value=\"21-05-011\">21-05-011 - Corsets de milwaukee o similares (incluye la toma de molde)</option>\n" +
    "        <option value=\"21-05-012\">21-05-012 - Corsets de risser o similares</option>\n" +
    "        <option value=\"21-05-013\">21-05-013 - Corsets de yeso simple (tipo watson jones)</option>\n" +
    "        <option value=\"106002\">106002 - Curaciones simples ambulatorias</option>\n" +
    "        <option value=\"000000000\">000000000 - Retiro de yeso cerrado, valva abierta o mod. de yeso</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"cac.form.diagnosis_code != null && 'active'\">Procedimiento Según Diagnostico Mensual</label>\n" +
    "      <select ng-model=\"cac.form.diagnosis_code\" material-select required>\n" +
    "        <option value=\"21-07-001\">21-07-001 - Luxaciones de articulaciones medianas (hombro, codo, rodilla, tobillo, muñeca, torso y esternovascular)</option>\n" +
    "        <option value=\"21-07-003\">21-07-003 - Luxaciones de articulaciones menores (resto)</option>\n" +
    "        <option value=\"21-07-005\">21-07-005 - Fracturas medianas (diáfisis humeral, radial, cubital, diáfisis femoral, tibial, peroneal, clavicular, platillos tibiales)</option>\n" +
    "        <option value=\"21-07-006\">21-07-006 - Fracturas menores (resto)</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div> \n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-band-aid\"></i>\n" +
    "      <label ng-class=\"cac.form.injury_type != null && 'active'\">Tipo de Lesión</label>\n" +
    "      <select ng-model=\"cac.form.injury_type\" material-select>\n" +
    "        <option>Curación Simple o Plana</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\"> \n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-money-check\"></i>\n" +
    "      <label ng-class=\"cac.form.membership != null && 'active'\">Afiliación</label>\n" +
    "      <select ng-model=\"cac.form.membership\" material-select required>\n" +
    "        <option>Capredena</option>\n" +
    "        <option>Fonasa A</option>\n" +
    "        <option>Fonasa B</option>\n" +
    "        <option>Fonasa C</option>\n" +
    "        <option>Fonasa D</option>\n" +
    "        <option>Isapre</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!caForm.$valid && 'disabled'\" ng-click=\"cac.createAppointment()\">Agendar</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/detailsDoctor/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/detailsDoctor/template.html",
    "<ng-form name=\"edForm\">\n" +
    "<div class=\"row\">\n" +
    "	<div input-field class=\"col l12\">\n" +
    "		<label>Nombre Completo</label>\n" +
    "		<input type=\"text\" ng-model=\"ddc.form.full_name\" required>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!edForm.$valid && 'disabled'\" ng-click=\"ddc.commit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/detailsPatient/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/detailsPatient/template.html",
    "<ng-form name=\"apForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Nombre Completo</label>\n" +
    "			<input type=\"text\" ng-model=\"dpc.form.full_name\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>RUT</label>\n" +
    "			<input type=\"text\" ng-rut ng-model=\"dpc.form.rut\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Numero de Telefono</label>\n" +
    "			<input type=\"text\" ng-model=\"dpc.form.phone_number\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label>Numero de Celular</label>\n" +
    "			<input type=\"text\" ng-model=\"dpc.form.mobile_number\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label ng-class=\"dpc.form.allergies != null && 'active'\">Alergias</label>\n" +
    "			<select material-select ng-model=\"dpc.form.allergies\">\n" +
    "				<option value=\"Si\">Si</option>\n" +
    "				<option value=\"No\">No</option>\n" +
    "			</select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!apForm.$valid && 'disabled'\" ng-click=\"dpc.commit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/dischargePatient/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/dischargePatient/template.html",
    "<ng-form name=\"dpForm\">\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fab fa-studiovinari\"></i>\n" +
    "      <label ng-class=\"dpc.form.end_text != null && 'active'\">Motivo</label>\n" +
    "      <select ng-model=\"dpc.form.end_text\" material-select required>\n" +
    "        <option>Alta Administrativa</option>\n" +
    "        <option>Alta Clínica</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!dpForm.$valid && 'disabled'\" ng-click=\"dpc.endAppointment()\">Dar de Alta</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/eventCalendar/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/eventCalendar/template.html",
    "<div id='calendar'></div>");
}]);

angular.module("src/module/modal/fulfillAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/fulfillAppointment/template.html",
    "<ng-form name=\"faForm\">\n" +
    "  <!-- <pre>{{fac.form | json}}</pre> -->\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-align-left\"></i>\n" +
    "      <label>Procedimiento Realizado</label>\n" +
    "      <textarea type=\"text\" ng-model=\"fac.form.procedure_perform\" placeholder=\"Escribe aqui...\"  class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-eye\"></i>\n" +
    "      <label ng-class=\"fac.form.observations != null && 'active'\">Observaciones</label>\n" +
    "      <textarea class=\"materialize-textarea\" ng-model=\"fac.form.observations\"></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-sticky-note\"></i>\n" +
    "      <label ng-class=\"fac.form.notes != null && 'active'\">Notas</label>\n" +
    "      <input type=\"text\" ng-model=\"fac.form.notes\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!faForm.$valid && 'disabled'\" ng-click=\"fac.submit()\">Guardar</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/historyPatient/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/historyPatient/template.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<table class=\"striped bordered nonsense-table\">\n" +
    "			<colgroup>\n" +
    "				<col style=\"width: 10%\">\n" +
    "			</colgroup>\n" +
    "			<thead class=\"grey darken-3 white-text\">\n" +
    "				<tr>\n" +
    "					<th>#</th>\n" +
    "					<th>Fecha</th>\n" +
    "					<th>Nombre Operador</th>\n" +
    "					<th>Nombre Doctor</th>\n" +
    "					<th>Diagnostico</th>\n" +
    "					<th>Procedimiento Realizado</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "				<tr ng-repeat=\"appointment in hpc.appointments track by $index\">\n" +
    "					<td class=\"center-align\">{{$index + 1}}</td>\n" +
    "					<td class=\"center-align\">{{appointment.date}} {{appointment.time}}</td>\n" +
    "					<td class=\"center-align\">{{appointment.operator_fullname | capitalize}}</td>\n" +
    "					<td class=\"center-align break-text\">{{appointment.doctor_fullname | capitalize}}</td>\n" +
    "					<td class=\"center-align break-text\">{{appointment.diagnosis_text | lowercase}}</td>\n" +
    "					<td class=\"center-align break-text\">{{appointment.procedure_perform | lowercase}}</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light grey darken-3\" ng-click=\"hpc.printHistory()\"><i class=\"fas fa-print\"></i></a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/modal/ocationalAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/ocationalAppointment/template.html",
    "<ng-form name=\"ocForm\">\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user\"></i>\n" +
    "      <label ng-class=\"oac.form.patient_fullname != null && 'active'\">*Escribir Nombre del Usuario</label>\n" +
    "      <input type=\"text\" ng-model=\"oac.form.patient_fullname\" ng-class=\"{'invalid': oac.form.patient_id <= 0, 'valid': oac.form.patient_id > 0}\" id=\"patient-autocomplete\" class=\"autocomplete\" required>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\" ng-show=\"oac.form.patient_id <= 0\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <label class=\"orange-text\">**El Usuario no Existe por lo que se creará como nuevo, si luego quieres editar sus datos personales, debes ir a \"Administrar Usuarios\" para evitar Usuarios Duplicados**</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-file-alt\"></i>\n" +
    "      <label>*Diagnóstico</label>\n" +
    "      <textarea type=\"text\" ng-model=\"oac.form.diagnosis_text\"  class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-tie\"></i>\n" +
    "      <label ng-class=\"oac.form.operator_id != null && 'active'\">*Con:</label>\n" +
    "      <select material-select ng-model=\"oac.form.operator_id\" required>\n" +
    "        <option ng-repeat=\"operator in oac.operators\" value=\"{{operator.id}}\">{{operator.full_name}}</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-md\"></i>\n" +
    "      <label ng-class=\"oac.form.doctor_id != null && 'active'\">*Asignar Doctor</label>\n" +
    "      <select material-select ng-model=\"oac.form.doctor_id\" watch ng-options=\"doctor.id as doctor.full_name for doctor in oac.doctors\" required></select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l6 file-field\">\n" +
    "      <button class=\"btn col l3 disabled\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "      <div class=\"file-path-wrapper\">\n" +
    "        <label style=\"left: 100px;\">Fecha</label>\n" +
    "        <input type=\"text\" ng-model=\"oac.form.date\" required readonly>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div input-field class=\"col offset-l1 l5\">\n" +
    "      <label>Hora</label>\n" +
    "      <input type=\"text\" ng-model=\"oac.form.time\" required readonly>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-compass\"></i>\n" +
    "      <label ng-class=\"oac.form.comes_from != null && 'active'\">*Procedencia</label>\n" +
    "      <select ng-model=\"oac.form.comes_from\" material-select required>\n" +
    "        <option>CAE Adulto</option>\n" +
    "        <option>CAE Pediatrico</option>\n" +
    "        <option>Traumatologia</option>\n" +
    "        <option>Pensionado</option>\n" +
    "        <option>Ginecologia</option>\n" +
    "        <option>Medicina</option>\n" +
    "        <option>Cirugia</option>\n" +
    "        <option>Pediatria</option>\n" +
    "        <option>UPC</option>\n" +
    "        <option>Unidad de Emergencia Hospitalaria</option>\n" +
    "        <option>Pabellon de Yeso</option>\n" +
    "        <option>Control</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-align-left\"></i>\n" +
    "      <label>*Procedimiento Realizado</label>\n" +
    "      <textarea type=\"text\" ng-model=\"oac.form.procedure_perform\" class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"oac.form.process_code != null && 'active'\">*Procedimiento Segun Estadistica Mensual</label>\n" +
    "      <select ng-model=\"oac.form.process_code\" material-select required>\n" +
    "        <option value=\"21-01-001\">21-01-001 - Infiltración local medicamentos (bursas, tendones, yuxta articular)</option>\n" +
    "        <option value=\"21-01-002\">21-01-002 - Procedimiento para exploraciones radiologicas (incluye maniobra e inyeccion del medio de contraste)</option>\n" +
    "        <option value=\"21-01-003\">21-01-003 - Movilización articular bajo antestecia general</option>\n" +
    "        <option value=\"21-05-001\">21-05-001 - Calzon corto de yeso</option>\n" +
    "        <option value=\"21-05-002\">21-05-002 - Corbata de schantz</option>\n" +
    "        <option value=\"21-05-003\">21-05-003 - Minerva de yeso</option>\n" +
    "        <option value=\"21-05-004\">21-05-004 - Rodillera, bota larga o corta de yeso</option>\n" +
    "        <option value=\"21-05-005\">21-05-005 - Velpeau</option>\n" +
    "        <option value=\"21-05-006\">21-05-006 - Yeso antebraquial c/s ferula digital</option>\n" +
    "        <option value=\"21-05-007\">21-05-007 - Yeso braquicarpiano</option>\n" +
    "        <option value=\"21-05-008\">21-05-008 - Yeso pelvipedio bilateral</option>\n" +
    "        <option value=\"21-05-009\">21-05-009 - Yeso pelvipedio unilateral</option>\n" +
    "        <option value=\"21-05-010\">21-05-010 - Yeso toracobraqueal</option>\n" +
    "        <option value=\"21-05-011\">21-05-011 - Corsets de milwaukee o similares (incluye la toma de molde)</option>\n" +
    "        <option value=\"21-05-012\">21-05-012 - Corsets de risser o similares</option>\n" +
    "        <option value=\"21-05-013\">21-05-013 - Corsets de yeso simple (tipo watson jones)</option>\n" +
    "        <option value=\"106002\">106002    - Curaciones simples ambulatorias</option>\n" +
    "        <option value=\"000000000\">000000000 - Retiro de yeso cerrado, valva abierta o mod. de yeso</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"oac.form.diagnosis_code != null && 'active'\">*Procedimiento Segun Diagnostico Mensual</label>\n" +
    "      <select ng-model=\"oac.form.diagnosis_code\" material-select required>\n" +
    "        <option value=\"21-07-001\">21-07-001 - Luxaciones de articulaciones medianas (hombro, codo, rodilla, tobillo, muñeca, torso y esternovascular)</option>\n" +
    "        <option value=\"21-07-003\">21-07-003 - Luxaciones de articulaciones menores (resto)</option>\n" +
    "        <option value=\"21-07-005\">21-07-005 - Fracturas medianas (diáfisis humeral, radial, cubital, diáfisis femoral, tibial, peroneal, clavicular, platillos tibiales)</option>\n" +
    "        <option value=\"21-07-006\">21-07-006 - Fracturas menores (resto)</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-band-aid\"></i>\n" +
    "      <label ng-class=\"oac.form.injury_type != null && 'active'\">Tipo de Lesión</label>\n" +
    "      <select ng-model=\"oac.form.injury_type\" material-select>\n" +
    "        <option>Curación Simple o Plana</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\"> \n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-money-check\"></i>\n" +
    "      <label ng-class=\"oac.form.membership != null && 'active'\">*Afiliación</label>\n" +
    "      <select ng-model=\"oac.form.membership\" material-select required>\n" +
    "        <option>Capredena</option>\n" +
    "        <option>Fonasa A</option>\n" +
    "        <option>Fonasa B</option>\n" +
    "        <option>Fonasa C</option>\n" +
    "        <option>Fonasa D</option>\n" +
    "        <option>Isapre</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\"> \n" +
    "      <p>Los campos con * son obligatorios</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!ocForm.$valid && 'disabled'\" ng-click=\"oac.storeAppointment()\">Agendar</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/operatorDetails/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/operatorDetails/template.html",
    "<ng-form name=\"odForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label class=\"active\">Id</label>\n" +
    "			<input type=\"text\" ng-value=\"odc.form.id\" readonly>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label class=\"active\">Nombre Completo</label>\n" +
    "			<input type=\"text\" ng-model=\"odc.form.full_name\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label class=\"active\">Nick</label>\n" +
    "			<input type=\"text\" ng-model=\"odc.form.nick_name\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label class=\"active\">RUN</label>\n" +
    "			<input type=\"text\" ng-rut ng-model=\"odc.form.rut\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<label class=\"active\">Contraseña</label>\n" +
    "			<input type=\"text\" ng-model=\"odc.form.pass\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!odForm.$valid && 'disabled'\" ng-click=\"odc.saveAndExit()\">Guardar</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/operatorNew/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/operatorNew/template.html",
    "<div style=\"margin-top: -1rem;\">\n" +
    "	<div class=\"right\" style=\"position: absolute; right: 0\">\n" +
    "		<img id=\"imgpreview\" src=\"img/avatardefaultbig.png\" style=\"width: 421px; height: auto; border-top-right-radius: 8px; border-bottom-right-radius: 8px; z-index: -1\">\n" +
    "		<div class=\"slant\" style=\"z-index: 0\"></div>\n" +
    "	</div>\n" +
    "	<ng-form name=\"onForm\" enctype=\"multipart/form-data\">\n" +
    "		<div class=\"row\" style=\"margin-right: 48%;\">\n" +
    "			<div input-field class=\"col l12\">\n" +
    "				<label class=\"active\">Nombre Completo</label>\n" +
    "				<input type=\"text\" ng-model=\"onc.form.model.full_name\" required>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\" style=\"margin-right: 46%;\">\n" +
    "			<div input-field class=\"col l12\">\n" +
    "				<label class=\"active\">Nick</label>\n" +
    "				<input type=\"text\" ng-model=\"onc.form.model.nick_name\" required>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\" style=\"margin-right: 44%;\">\n" +
    "			<div input-field class=\"col l12\">\n" +
    "				<label class=\"active\">RUN</label>\n" +
    "				<input type=\"text\" ng-rut ng-model=\"onc.form.model.rut\" required>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\" style=\"margin-right: 42%;\">\n" +
    "			<div input-field class=\"col l12\">\n" +
    "				<label class=\"active\">Contraseña</label>\n" +
    "				<input type=\"text\" ng-model=\"onc.form.model.pass\" required>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\" style=\"margin-right: 40%;\">\n" +
    "			<div input-field class=\"col l12\">\n" +
    "				<div class=\"file-field input-field\">\n" +
    "					<div class=\"btn\">\n" +
    "						<span>Avatar</span>\n" +
    "						<input type=\"file\" file-uploader>\n" +
    "					</div>\n" +
    "					<div class=\"file-path-wrapper\">\n" +
    "						<input class=\"file-path validate\" type=\"text\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col l12\">\n" +
    "				<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"!onForm.$valid && 'disabled'\" ng-click=\"onc.saveAndExit()\"><i class=\"fas fa-save\"></i></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ng-form>\n" +
    "</div>");
}]);

angular.module("src/module/modal/policlinic/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/policlinic/template.html",
    "<ng-form name=\"pcForm\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<span class=\"card-title\">Consultas Policlinico</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<br>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"fas fa-calendar-alt prefix\"></i>\n" +
    "			<label>Fecha</label>\n" +
    "			<input input-date type=\"text\" ng-model=\"pcc.form.date\" format=\"dd/mm/yyyy\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"fas fa-clock prefix\"></i>\n" +
    "			<label>Hora de Inicio</label>\n" +
    "			<input input-clock type=\"text\" ng-model=\"pcc.form.start_time\" data-twelvehour=\"false\" required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"fas fa-user-tie prefix\"></i>\n" +
    "			<label ng-class=\"pcc.form.operator_id != null && 'active'\">Eligir Operador</label>\n" +
    "			<select material-select ng-model=\"pcc.form.operator_id\" watch ng-options=\"operator.id as operator.full_name for operator in pcc.operators\" required></select>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"fas fa-list-ol prefix\"></i>\n" +
    "			<label>Cantidad de Pacientes</label>\n" +
    "			<input type=\"number\" ng-model=\"pcc.form.amount\" min=\"0\" string-to-number required>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div input-field class=\"col l12\">\n" +
    "			<i class=\"fas fa-notes-medical prefix\"></i>\n" +
    "			<label>Notas</label>\n" +
    "			<input type=\"text\" ng-model=\"pcc.form.notes\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<br>\n" +
    "	<div class=\"row\">\n" +
    "		<save-button ng-click=\"pcc.save()\" dr-disabled=\"!pcForm.$valid\"></save-button>\n" +
    "	</div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/modal/refillAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/modal/refillAppointment/template.html",
    "<ng-form name=\"raForm\">\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user\"></i>\n" +
    "      <label ng-class=\"rac.form.patient_fullname != null && 'active'\">Nombre del Usuario</label>\n" +
    "      <input type=\"text\" ng-model=\"rac.form.patient_fullname\" ng-class=\"{'invalid': rac.form.patient_id <= 0, 'valid': rac.form.patient_id > 0}\" id=\"patient-autocomplete\" class=\"autocomplete\" required readonly>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-id-card\"></i>\n" +
    "      <label>RUN</label>\n" +
    "      <input type=\"text\" ng-rut ng-model=\"rac.form.patient_rut\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-phone\"></i>\n" +
    "      <label>Numero Fijo</label>\n" +
    "      <input type=\"text\" ng-model=\"rac.form.patient_phonenumber\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-mobile-alt\"></i>\n" +
    "      <label>Numero Celular</label>\n" +
    "      <input type=\"text\" ng-model=\"rac.form.patient_mobilenumber\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-diagnoses\"></i>\n" +
    "      <label ng-class=\"rac.form.patient_allergies != null && 'active'\">Alergico</label>\n" +
    "      <select material-select ng-model=\"rac.form.patient_allergies\">\n" +
    "        <option>Si</option>\n" +
    "        <option>No</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-file-alt\"></i>\n" +
    "      <label>Diagnóstico</label>\n" +
    "      <textarea type=\"text\" ng-model=\"rac.form.diagnosis_text\"  class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-tie\"></i>\n" +
    "      <label ng-class=\"rac.form.operator_id != null && 'active'\">Con: </label>\n" +
    "      <select material-select ng-model=\"rac.form.operator_id\">\n" +
    "        <option ng-repeat=\"operator in rac.operators\" value=\"{{operator.id}}\">{{operator.full_name}}</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-user-md\"></i>\n" +
    "      <label ng-class=\"rac.form.doctor_id != null && 'active'\">Asignar Doctor</label>\n" +
    "      <select material-select ng-model=\"rac.form.doctor_id\" watch ng-options=\"doctor.id as doctor.full_name for doctor in rac.doctors\" required></select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l6 file-field\">\n" +
    "      <button class=\"btn col l3 disabled\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "      <div class=\"file-path-wrapper\">\n" +
    "        <label style=\"left: 90px;\">Fecha</label>\n" +
    "        <input type=\"text\" ng-model=\"rac.form.date\" required readonly>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div input-field class=\"col offset-l1 l5\">\n" +
    "      <label>Hora</label>\n" +
    "      <input type=\"text\" ng-model=\"rac.form.time\" required readonly>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-compass\"></i>\n" +
    "      <label ng-class=\"rac.form.comes_from != null && 'active'\">Procedencia</label>\n" +
    "      <select ng-model=\"rac.form.comes_from\" material-select required>\n" +
    "        <option>CAE Adulto</option>\n" +
    "        <option>CAE Pediatrico</option>\n" +
    "        <option>Traumatologia</option>\n" +
    "        <option>Pensionado</option>\n" +
    "        <option>Ginecologia</option>\n" +
    "        <option>Medicina</option>\n" +
    "        <option>Cirugia</option>\n" +
    "        <option>Pediatria</option>\n" +
    "        <option>UPC</option>\n" +
    "        <option>Unidad de Emergencia Hospitalaria</option>\n" +
    "        <option>Pabellon de Yeso</option>\n" +
    "        <option>Control</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-align-left\"></i>\n" +
    "      <label>Procedimiento Realizado</label>\n" +
    "      <textarea type=\"text\" ng-model=\"rac.form.procedure_perform\" class=\"materialize-textarea\" required></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"rac.form.process_code != null && 'active'\">Procedimiento Segun Estadistica Mensual</label>\n" +
    "      <select ng-model=\"rac.form.process_code\" material-select required>\n" +
    "        <option value=\"21-01-001\">21-01-001 - Infiltración local medicamentos (bursas, tendones, yuxta articular)</option>\n" +
    "        <option value=\"21-01-002\">21-01-002 - Procedimiento para exploraciones radiologicas (incluye maniobra e inyeccion del medio de contraste)</option>\n" +
    "        <option value=\"21-01-003\">21-01-003 - Movilización articular bajo antestecia general</option>\n" +
    "        <option value=\"21-05-001\">21-05-001 - Calzon corto de yeso</option>\n" +
    "        <option value=\"21-05-002\">21-05-002 - Corbata de schantz</option>\n" +
    "        <option value=\"21-05-003\">21-05-003 - Minerva de yeso</option>\n" +
    "        <option value=\"21-05-004\">21-05-004 - Rodillera, bota larga o corta de yeso</option>\n" +
    "        <option value=\"21-05-005\">21-05-005 - Velpeau</option>\n" +
    "        <option value=\"21-05-006\">21-05-006 - Yeso antebraquial c/s ferula digital</option>\n" +
    "        <option value=\"21-05-007\">21-05-007 - Yeso braquicarpiano</option>\n" +
    "        <option value=\"21-05-008\">21-05-008 - Yeso pelvipedio bilateral</option>\n" +
    "        <option value=\"21-05-009\">21-05-009 - Yeso pelvipedio unilateral</option>\n" +
    "        <option value=\"21-05-010\">21-05-010 - Yeso toracobraqueal</option>\n" +
    "        <option value=\"21-05-011\">21-05-011 - Corsets de milwaukee o similares (incluye la toma de molde)</option>\n" +
    "        <option value=\"21-05-012\">21-05-012 - Corsets de risser o similares</option>\n" +
    "        <option value=\"21-05-013\">21-05-013 - Corsets de yeso simple (tipo watson jones)</option>\n" +
    "        <option value=\"106002\">106002    - Curaciones simples ambulatorias</option>\n" +
    "        <option value=\"000000000\">000000000 - Retiro de yeso cerrado, valva abierta o mod. de yeso</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-list-ul\"></i>\n" +
    "      <label ng-class=\"rac.form.diagnosis_code != null && 'active'\">Procedimiento Segun Diagnostico Mensual</label>\n" +
    "      <select ng-model=\"rac.form.diagnosis_code\" material-select required>\n" +
    "        <option value=\"21-07-001\">21-07-001 - Luxaciones de articulaciones medianas (hombro, codo, rodilla, tobillo, muñeca, torso y esternovascular)</option>\n" +
    "        <option value=\"21-07-003\">21-07-003 - Luxaciones de articulaciones menores (resto)</option>\n" +
    "        <option value=\"21-07-005\">21-07-005 - Fracturas medianas (diáfisis humeral, radial, cubital, diáfisis femoral, tibial, peroneal, clavicular, platillos tibiales)</option>\n" +
    "        <option value=\"21-07-006\">21-07-006 - Fracturas menores (resto)</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-band-aid\"></i>\n" +
    "      <label ng-class=\"rac.form.injury_type != null && 'active'\">Tipo de Lesión</label>\n" +
    "      <select ng-model=\"rac.form.injury_type\" material-select>\n" +
    "        <option>Curación Simple o Plana</option>\n" +
    "        <option>1</option>\n" +
    "        <option>2</option>\n" +
    "        <option>3</option>\n" +
    "        <option>4</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\"> \n" +
    "    <div input-field class=\"col l12\">\n" +
    "      <i class=\"prefix fas fa-money-check\"></i>\n" +
    "      <label ng-class=\"rac.form.membership != null && 'active'\">Afiliación</label>\n" +
    "      <select ng-model=\"rac.form.membership\" material-select>\n" +
    "        <option>Capredena</option>\n" +
    "        <option>Fonasa A</option>\n" +
    "        <option>Fonasa B</option>\n" +
    "        <option>Fonasa C</option>\n" +
    "        <option>Fonasa D</option>\n" +
    "        <option>Isapre</option>\n" +
    "        <option>Otro</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col l12\">\n" +
    "      <a class=\"btn btn-block waves-effect waves-light green\" ng-class=\"!raForm.$valid && 'disabled'\" ng-click=\"rac.update()\">Agendar</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</ng-form>");
}]);

angular.module("src/module/print/printAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/print/printAppointment/template.html",
    "<style type=\"text/css\" media=\"print\">\n" +
    "@page {\n" +
    "	size: auto;   /* auto is the initial value */\n" +
    "	margin: 0;  /* this affects the margin in the printer settings */\n" +
    "}\n" +
    "table {\n" +
    "	border-collapse: collapse;\n" +
    "	border-spacing: 0;\n" +
    "}\n" +
    "\n" +
    "table.bordered > thead > tr,\n" +
    "table.bordered > tbody > tr {\n" +
    "	border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "\n" +
    "thead {\n" +
    "	border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "td, th {\n" +
    "	padding: 15px 5px;\n" +
    "	display: table-cell;\n" +
    "	text-align: left;\n" +
    "	vertical-align: middle;\n" +
    "	border-radius: 2px;\n" +
    "}\n" +
    ".condensed-table tr th{\n" +
    "	line-height: 0px;\n" +
    "}\n" +
    "</style>\n" +
    "<div style=\"text-align: center;\">\n" +
    "	<div style=\"display: inline-block;\">\n" +
    "		<div>\n" +
    "			<img style=\"float: left\" src=\"/img/traumatologylogo-small.png\">\n" +
    "			<p style=\"text-align: left;\">\n" +
    "				<br>\n" +
    "				CAE Procedimientos\n" +
    "				<br>\n" +
    "				Unidad De Traumatología<span style=\"float:right;\">{{::vm.meta.currentDate}}</span>\n" +
    "				<br>\n" +
    "				Pabellón de Yeso\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<h2 style=\"text-align: center;\">Recibo de su Próximo Turno<br>en Pabellón Yeso</h2>\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<table class=\"bordered highlight condensed-table\">\n" +
    "				<tbody style=\"background-image: url('../img/traumatologylogo.png');  background-position: center; background-size: contain;\">\n" +
    "					<tr>\n" +
    "						<th colspan=\"3\">Nombre de Usuario: </th>\n" +
    "						<td colspan=\"5\">{{::vm.data.patient_fullname}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th colspan=\"3\">Motivo del Turno: </th>\n" +
    "						<td colspan=\"5\">{{::vm.data.reason}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th colspan=\"3\">Fecha del Turno: </th>\n" +
    "						<td colspan=\"5\">{{::vm.data.date}} a las {{::vm.data.time}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th colspan=\"3\">Turno con: </th>\n" +
    "						<td colspan=\"5\">T.P. {{::vm.data.operator_fullname}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td colspan=\"8\">\n" +
    "							1.- Presentarse con el turno en el mesón de atención para ser timbrada y recepcionada.<br>\n" +
    "							2.- Todos los turnos deben ser timbrados.<br>\n" +
    "							3.- Al asistir a su turno, no debe olvidar su carnet de control de procedimientos.<br>\n" +
    "							4.- En caso que usted use sillas de ruedas o burrito, debe venir en compañía de alguien.<br>\n" +
    "							5.- En caso de no poder asistir o pedir un cambio de turno llamar al 61-2293123<br>\n" +
    "						</td>\n" +
    "					</tr>	\n" +
    "					<tr>\n" +
    "						<td colspan=\"8\" style=\"text-align: center;\">\n" +
    "							*.- Uso Exclusivo Control Interno Servicio Pabellón Yeso -.*\n" +
    "						</td>\n" +
    "					</tr>			\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/print/printDaily/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/print/printDaily/template.html",
    "<style type=\"text/css\">\n" +
    "	@page {\n" +
    "	size: auto;   /* auto is the initial value */\n" +
    "	margin: 0;  /* this affects the margin in the printer settings */\n" +
    "}\n" +
    "table {\n" +
    "	width: 100%;\n" +
    "	display: table;\n" +
    "}\n" +
    "\n" +
    "table.bordered > thead > tr,\n" +
    "table.bordered > tbody > tr {\n" +
    "	border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr:nth-child(odd) {\n" +
    "	background-color: #f2f2f2;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr > td {\n" +
    "	border-radius: 0;\n" +
    "}\n" +
    ".grey {\n" +
    "	background-color: #9e9e9e !important;\n" +
    "}\n" +
    ".grey.darken-3 {\n" +
    "	background-color: #424242 !important;\n" +
    "}\n" +
    "\n" +
    ".white-text {\n" +
    "	color: #FFFFFF !important;\n" +
    "}\n" +
    "</style>\n" +
    "<div style=\"padding: 10px 50px 0px 50px;\">\n" +
    "	<table class=\"bordered striped\">\n" +
    "		<thead class=\"grey darken-3 white-text\">\n" +
    "			<tr>\n" +
    "				<th>#</th>\n" +
    "				<th>Fecha</th>\n" +
    "				<th>Nombre<br>Usuario</th>\n" +
    "				<th>Nombre<br>Doctor</th>\n" +
    "				<th>Nombre<br>Operador</th>\n" +
    "				<th>Procedencia</th>\n" +
    "				<th>Motivo</th>\n" +
    "				<th>Observaciones</th>\n" +
    "				<th>Notas</th>\n" +
    "				<th>Afiliación</th>\n" +
    "				<th>Estado</th>\n" +
    "			</tr>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"item in vm.data\">\n" +
    "				<td>{{item.id}}</td>\n" +
    "				<td>{{item.date + ' ' + item.time}}</td>\n" +
    "				<td>{{item.patient_fullname}}</td>\n" +
    "				<td>{{item.doctor_fullname}}</td>\n" +
    "				<td>{{item.operator_fullname}}</td>\n" +
    "				<td>{{item.comes_from}}</td>\n" +
    "				<td>{{item.reason}}</td>\n" +
    "				<td style=\"word-break: break-all;\">{{item.observations}}</td>\n" +
    "				<td style=\"word-break: break-all;\">{{item.notes}}</td>\n" +
    "				<td>{{item.membership}}</td>\n" +
    "				<td>{{item.status == \"done\" ? 'Presente' : item.status == \"pending\" ? 'Pendiente' : 'Ausente'}}</td>\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "</div>");
}]);

angular.module("src/module/print/printHistory/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/print/printHistory/template.html",
    "<style type=\"text/css\">\n" +
    "	@page {\n" +
    "	size: auto;   /* auto is the initial value */\n" +
    "	margin: 0;  /* this affects the margin in the printer settings */\n" +
    "}\n" +
    "table {\n" +
    "	width: 100%;\n" +
    "	display: table;\n" +
    "}\n" +
    "\n" +
    "table.bordered > thead > tr,\n" +
    "table.bordered > tbody > tr {\n" +
    "	border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr:nth-child(odd) {\n" +
    "	background-color: #f2f2f2;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr > td {\n" +
    "	border-radius: 0;\n" +
    "}\n" +
    ".grey {\n" +
    "	background-color: #9e9e9e !important;\n" +
    "}\n" +
    ".grey.darken-3 {\n" +
    "	background-color: #424242 !important;\n" +
    "}\n" +
    "\n" +
    ".white-text {\n" +
    "	color: #FFFFFF !important;\n" +
    "}\n" +
    "</style>\n" +
    "<div style=\"padding: 0px 50px 0px 50px;\">\n" +
    "	<table class=\"bordered striped\">\n" +
    "		<thead class=\"grey darken-3 white-text\">\n" +
    "			<tr>\n" +
    "				<th>#</th>\n" +
    "				<th>ID</th>\n" +
    "				<th>Fecha</th>\n" +
    "				<th>Nombre<br>Operador</th>\n" +
    "				<th>Nombre<br>Doctor</th>\n" +
    "				<th>Diagnostico</th>\n" +
    "				<th>Procedimiento<br>Realizado</th>\n" +
    "			</tr>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"item in vm.data\">\n" +
    "				<td>{{$index}}</td>\n" +
    "				<td>{{item.id}}</td>\n" +
    "				<td>{{item.date + ' ' + item.time}}</td>\n" +
    "				<td>{{item.operator_fullname | capitalize}}</td>\n" +
    "				<td>{{item.doctor_fullname | capitalize}}</td>\n" +
    "				<td style=\"word-break: break-all;\">{{item.diagnosis_text | lowercase}}</td>\n" +
    "				<td style=\"word-break: break-all;\">{{item.procedure_perform | lowercase}}</td>\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "</div>");
}]);

angular.module("src/module/print/printReport/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/print/printReport/template.html",
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"./src/module/print/printReport/style.css\" media=\"print\">\n" +
    "<style type=\"text/css\">\n" +
    "@page {\n" +
    "	size: auto;   /* auto is the initial value */\n" +
    "	margin: 0;  /* this affects the margin in the printer settings */\n" +
    "}\n" +
    "table {\n" +
    "	width: 100%;\n" +
    "	display: table;\n" +
    "}\n" +
    "\n" +
    "table.bordered > thead > tr,\n" +
    "table.bordered > tbody > tr {\n" +
    "	border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr:nth-child(odd) {\n" +
    "	background-color: #f2f2f2;\n" +
    "}\n" +
    "\n" +
    "table.striped > tbody > tr > td {\n" +
    "	border-radius: 0;\n" +
    "}\n" +
    ".grey {\n" +
    "	background-color: #9e9e9e !important;\n" +
    "}\n" +
    ".grey.darken-3 {\n" +
    "	background-color: #424242 !important;\n" +
    "}\n" +
    "\n" +
    ".white-text {\n" +
    "	color: #FFFFFF !important;\n" +
    "}\n" +
    "</style>\n" +
    "<div style=\"padding: 10px 50px 0px 50px;\">\n" +
    "	<div>\n" +
    "		<p>{{vm.meta.currentDate}}</p>\n" +
    "		<p>Datos obtenidos el mes de: {{vm.meta.reportDate}}</p>\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		<table class=\"borderder striped\">\n" +
    "			<thead class=\"grey darken-3 white-text\">\n" +
    "				<tr>\n" +
    "					<th>Codigo</th>\n" +
    "					<th>Descripción</th>\n" +
    "					<th>Total</th>\n" +
    "					<th>Beneficiario</th>\n" +
    "					<th>A.Cerrada</th>\n" +
    "					<th>A.Abierta</th>\n" +
    "					<th>Urgencia</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tfoot class=\"grey darken-3 white-text\">\n" +
    "				<tr>\n" +
    "					<td colspan=\"2\" style=\"text-align: center;\">Totales Verticales</td>\n" +
    "					<td>{{vm.meta.totals.allTotal}}</td>\n" +
    "					<td>{{vm.meta.totals.allF}}</td>\n" +
    "					<td>{{vm.meta.totals.allA}}</td>\n" +
    "					<td>{{vm.meta.totals.allB}}</td>\n" +
    "					<td>{{vm.meta.totals.allU}}</td>\n" +
    "				</tr>\n" +
    "			</tfoot>\n" +
    "			<tbody>\n" +
    "				<tr ng-repeat=\"item in vm.data\">\n" +
    "					<td>{{item.code}}</td>\n" +
    "					<td style=\"word-break: break-all;\">{{item.codeText}}</td>\n" +
    "					<td>{{item.total}}</td>\n" +
    "					<td>{{item.beneficiario}}</td>\n" +
    "					<td>{{item.a_cerrada}}</td>\n" +
    "					<td>{{item.a_abierta}}</td>\n" +
    "					<td>{{item.urgencia}}</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/print/printSummary/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/print/printSummary/template.html",
    "<style type=\"text/css\" >\n" +
    "@page {\n" +
    "  size: auto;   /* auto is the initial value */\n" +
    "  margin: 0;  /* this affects the margin in the printer settings */\n" +
    "}\n" +
    "table {\n" +
    "  border-collapse: collapse;\n" +
    "  border-spacing: 0;\n" +
    "}\n" +
    "\n" +
    "table.bordered > thead > tr,\n" +
    "table.bordered > tfoot > tr,\n" +
    "table.bordered > tbody > tr {\n" +
    "  border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "\n" +
    "thead {\n" +
    "  border-bottom: 1px solid #d0d0d0;\n" +
    "}\n" +
    "\n" +
    "td, th {\n" +
    "  padding: 15px 5px;\n" +
    "  display: table-cell;\n" +
    "  text-align: left;\n" +
    "  vertical-align: middle;\n" +
    "  border-radius: 2px;\n" +
    "}\n" +
    ".condensed-table tr th{\n" +
    "  line-height: 0px;\n" +
    "}\n" +
    "</style>\n" +
    "<div style=\"text-align: center;\">\n" +
    "  <div style=\"display: inline-block; width: 90%\">\n" +
    "    <div>\n" +
    "      <img style=\"float: left\" src=\"/img/traumatologylogo-small.png\">\n" +
    "      <p style=\"text-align: left;\">\n" +
    "        <br>\n" +
    "        CAE Procedimientos\n" +
    "        <br>\n" +
    "        Unidad De Traumatología<span style=\"float:right;\">{{vm.meta.currentDate}}</span>\n" +
    "        <br>\n" +
    "        Pabellón de Yeso\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <h2 style=\"text-align: center;\">Resumen y Evolución de Curaciones<br>y Vigilancia en Pabellon de Yeso</h2>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <table class=\"condensed-table bordered\">\n" +
    "        <tbody style=\"background-image: url('../img/traumatologylogo.png');  background-position: center; background-size: contain;\">\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Nombre de Usuario: </th>\n" +
    "            <td colspan=\"5\">{{vm.meta.private[0].full_name}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Fecha de Ingreso: </th>\n" +
    "            <td colspan=\"5\">{{vm.data[0].date}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Medico Tratante: </th>\n" +
    "            <td colspan=\"5\">{{vm.data[0].doctor_fullname}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Tec. Pab. Yeso: </th>\n" +
    "            <td colspan=\"5\">T.P. {{vm.data[0].operator_fullname}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Fecha de Egreso</th>\n" +
    "            <td colspan=\"5\">{{vm.meta.currentDate}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"3\">Diagnostico</th>\n" +
    "            <td colspan=\"5\">{{vm.meta.public.diagnosis_text}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "        <tfoot>\n" +
    "          <tr ng-repeat=\"appointment in vm.data\" ng-if=\"$first\">\n" +
    "            <td colspan=\"8\"><b><i>EVALUACIÓN DE INGRESO:</b></i><br><br>{{appointment.procedure_perform}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th colspan=\"2\">FECHA</th>\n" +
    "            <th colspan=\"3\">PROCEDIMIENTO REALIZADO</th>\n" +
    "            <th colspan=\"3\">OBSERVACIONES</th>\n" +
    "          </tr>\n" +
    "          <tr ng-repeat=\"appointment in vm.data\" ng-if=\"$middle\">\n" +
    "            <td colspan=\"2\">{{appointment.date}}</td>\n" +
    "            <td colspan=\"3\">{{appointment.procedure_perform}}</td>\n" +
    "            <td colspan=\"3\">{{appointment.observations}}</td>\n" +
    "          </tr>\n" +
    "          <tr ng-repeat=\"appointment in vm.data\" ng-if=\"$last\">\n" +
    "            <td colspan=\"8\"><b><i>EVALUACIÓN DE EGRESO/INFORME:</b></i><br><br>{{appointment.procedure_perform}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td colspan=\"6\"></td>\n" +
    "            <td colspan=\"2\">T.P. {{vm.data[0].operator_fullname}}<br>Pabellón de Yeso (s)</td>\n" +
    "          </tr>\n" +
    "        </tfoot>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("src/module/route/appConfig/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/appConfig/template.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<div class=\"card grey lighten-4\">\n" +
    "			<div class=\"card-content\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col l12\">\n" +
    "						<div class=\"card hoverable\">\n" +
    "							<div class=\"card-content\">\n" +
    "								<span class=\"card-title\">Bloquear Periodos del Calendario</span>\n" +
    "								<table class=\"striped centered-table\">\n" +
    "									<thead>\n" +
    "										<tr>\n" +
    "											<th>#</th>\n" +
    "											<th>Fecha de Inicio</th>\n" +
    "											<th>Fecha de Termino</th>\n" +
    "											<th>Motivo</th>\n" +
    "											<th>Eliminar</th>\n" +
    "										</tr>\n" +
    "									</thead>\n" +
    "									<tbody>\n" +
    "										<tr dir-paginate=\"item in acc.calendarConfig | itemsPerPage: 10 track by item.id\">\n" +
    "											<td>{{item.id}}</td>\n" +
    "											<td>{{item.start_date}} a las {{item.start_time}}</td>\n" +
    "											<td>{{item.end_date}} a las {{item.end_time}}</td>\n" +
    "											<td>{{item.title}}</td>\n" +
    "											<td><delete-button ng-click=\"acc.remove(item)\"></delete-button></td>\n" +
    "										</tr>\n" +
    "									</tbody>\n" +
    "								</table>\n" +
    "							</div>\n" +
    "							<div class=\"card-action\">\n" +
    "								<add-button ng-click=\"acc.addNewCalendarConfig()\" dr-position=\"'left'\"></add-button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("src/module/route/dailyStatistics/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/dailyStatistics/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light green white-text\" ng-class=\"dsc.isAdding && 'disabled'\" ng-click=\"dsc.addOcationalAppointment()\" tooltipped=\"true\" data-tooltip=\"Agregar Nuevo Turno\" data-position=\"left\" data-colorclass=\"green\"><i class=\"fas\" ng-class=\"dsc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"fixed-action-btn\" style=\"bottom: 150px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light grey darken-3 white-text\" ng-class=\"dsc.isPrinting && 'disabled'\" ng-click=\"dsc.print()\" tooltipped=\"true\" data-tooltip=\"Imprimir\" data-position=\"left\" data-colorclass=\"grey darken-3\"><i class=\"fas\" ng-class=\"dsc.isPrinting ? 'fa-cog fa-spin black-text' : 'fa-print'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"fixed-action-btn\" style=\"bottom: 220px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light blue white-text\" ng-class=\"dsc.isAddingOther && 'disabled'\" ng-click=\"dsc.checkPoliclinic()\" tooltipped=\"true\" data-tooltip=\"Consulta Policlinico\" data-position=\"left\" data-colorclass=\"blue\"><i class=\"fas\" ng-class=\"dsc.isAddingOther ? 'fa-cog fa-spin black-text' : 'fa-hospital'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l5\">\n" +
    "							<i class=\"prefix fas fa-arrow-right\"></i>\n" +
    "							<label>Fecha de Inicio</label>\n" +
    "							<input input-date type=\"text\" ng-model=\"dsc.filters.sinceDate\" first-day=\"1\" format=\"dd/mm/yyyy\" disable=\"[false, 6, 7]\">\n" +
    "						</div>\n" +
    "						<div input-field class=\"col offset-l2 l5\">\n" +
    "							<i class=\"postfix fas fa-arrow-left\"></i>\n" +
    "							<label>Fecha de Termino</label>\n" +
    "							<input input-date type=\"text\" ng-model=\"dsc.filters.tillDate\" first-day=\"1\" format=\"dd/mm/yyyy\" disable=\"[false, 6, 7]\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l12\">\n" +
    "							<i class=\"prefix fas fa-search\"></i>\n" +
    "							<label>Buscar</label>\n" +
    "							<input ng-model=\"dsc.filters.searchTerm\" type=\"search\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l5\">\n" +
    "							<i class=\"prefix fas fa-user\"></i>\n" +
    "							<label ng-class=\"{'active': dsc.filters.byPatient != null}\">Filtrar por Usuario:</label>\n" +
    "							<select ng-model=\"dsc.filters.byPatient\" material-select watch>\n" +
    "								<option value=\"-1\">Todos</option>\n" +
    "								<option ng-repeat=\"patient in dsc.patients\" value=\"{{::patient.id}}\">{{::patient.full_name | capitalize}}</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "						<div input-field class=\"col offset-l2 l5\">\n" +
    "							<i class=\"prefix fas fa-user-md\"></i>\n" +
    "							<label ng-class=\"{'active': dsc.filters.byDoctor != null}\">Filtrar por Medico:</label>\n" +
    "							<select ng-model=\"dsc.filters.byDoctor\" material-select watch>\n" +
    "								<option value=\"-1\">Todos</option>\n" +
    "								<option ng-repeat=\"doctor in dsc.doctors\" value=\"{{::doctor.id}}\">{{::doctor.full_name | capitalize}}</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<table class=\"bordered highlight centered-table\">\n" +
    "								<thead class=\"grey darken-3 white-text\">\n" +
    "									<tr>\n" +
    "										<th>#</th>\n" +
    "										<th>Fecha</th>\n" +
    "										<th>Usuario</th>\n" +
    "										<th>Operador</th>\n" +
    "										<th>Medico</th>\n" +
    "										<th>Nota</th>\n" +
    "										<th>Estado</th>\n" +
    "										<th>Eliminar</th>\n" +
    "									</tr>\n" +
    "								</thead>\n" +
    "								<tbody>\n" +
    "									<tr ng-repeat=\"appointment in dsc.filteredAppointments = (dsc.appointments | dateRange: dsc.filters.sinceDate : dsc.filters.tillDate | filter: dsc.filters.searchTerm | filter: ((dsc.filters.byPatient >= 0) || undefined) && {patient_id: dsc.filters.byPatient} | filter: ((dsc.filters.byDoctor >= 0)||undefined)&&{doctor_id: dsc.filters.byDoctor})\">\n" +
    "										<td>{{appointment.id}}</td>\n" +
    "										<td>{{appointment.date + ' ' + appointment.time}}</td>\n" +
    "										<td>{{appointment.patient_fullname | capitalize}}</td>\n" +
    "										<td>{{appointment.operator_fullname | capitalize}}</td>\n" +
    "										<td>{{appointment.doctor_fullname | capitalize}}</td>\n" +
    "										<td>{{appointment.notes | lowercase}}</td>\n" +
    "										<td>\n" +
    "											<div class=\"fixed-action-btn horizontal fab-in-table-cell\">\n" +
    "												<a class=\"btn-floating btn-flat btn-large waves-effect waves-light\">\n" +
    "													<i class=\"fas\" ng-class=\"appointment.status == 'pending' ? 'fa-minus orange-text' : appointment.status == 'done' ? 'fa-check green-text' : 'fa-times red-text'\"></i>\n" +
    "												</a>\n" +
    "												<ul>\n" +
    "													<li><a class=\"btn-floating btn-flat waves-effect waves-light green\" ng-click=\"dsc.changeAppointmentStatus('done', appointment)\"><i class=\"fas fa-check white-text\"></i></a></li>\n" +
    "													<li><a class=\"btn-floating btn-flat waves-effect waves-light orange\" ng-click=\"dsc.changeAppointmentStatus('pending', appointment)\"><i class=\"fas fa-minus white-text\"></i></a></li>\n" +
    "													<li><a class=\"btn-floating btn-flat waves-effect waves-light red\" ng-click=\"dsc.changeAppointmentStatus('absent', appointment)\"><i class=\"fas fa-times white-text\"></i></a></li>\n" +
    "												</ul>\n" +
    "											</div>\n" +
    "										</td>\n" +
    "										<td>\n" +
    "											<a class=\"btn-floating btn-flat waves-effect waves-light\" ng-click=\"dsc.deleteAppointment(appointment)\">\n" +
    "												<i class=\"fas fa-trash red-text\"></i>\n" +
    "											</a>\n" +
    "										</td>\n" +
    "									</tr>\n" +
    "									<tr ng-if=\"dsc.filteredAppointments.length === 0\">\n" +
    "										<td colspan=\"8\">Sin Coincidencias...</td>\n" +
    "									</tr>\n" +
    "								</tbody>\n" +
    "							</table>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/route/firstTime/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/firstTime/template.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col offset-l2 l8\">\n" +
    "    <div class=\"card blue-grey darken-1\">\n" +
    "      <div class=\"card-content white-text\">\n" +
    "        <span class=\"card-title\">Hola!</span>\n" +
    "        <p>Mis sensores han detectado que esta es la primera vez que usas la aplicación\n" +
    "        por lo que me gustaria que nos tomaramos unos milisegundos en validarla, ¿te parece?</p>\n" +
    "        <p>Primero debes asegurarte de estar conectado a internet, introducir el codigo de licencia, \n" +
    "        clickear en validar y listo! </p><br>\n" +
    "        <p>PD: Esto solo se necesita hacer una sola vez. Si por esas casualidades desinstalas esta aplicacion\n" +
    "          o tu computador se estropea, puedes solicitar otra licencia gratuita al <a href=\"mailto: l.arancibiaf@gmail.com\">correo de mi jefe</a></p>\n" +
    "        <br>\n" +
    "        <input type=\"text\" ng-model=\"ftc.key\" placeholder=\"Pssss!, por aqui! =)\">\n" +
    "      </div>\n" +
    "      <div class=\"card-action\">\n" +
    "        <a class=\"btn waves-effect waves-light green\" ng-class=\"mc.onLine ? '':'disabled'\" ng-click=\"ftc.validate()\">VALIDAR</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("src/module/route/home/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/home/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<!-- <a class=\"btn-floating btn-large waves-effect waves-light green white-text\" ng-class=\"hmc.isAdding && 'disabled'\" ng-click=\"hmc.addReminder()\"><i class=\"fas\" ng-class=\"hmc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a> -->\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<div class=\"card\">\n" +
    "			<div class=\"card-content\">\n" +
    "				<event-calendar></event-calendar>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!-- <div class=\"container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\" ng-repeat-start=\"reminder in hmc.reminders\">\n" +
    "			<div class=\"col l12\">\n" +
    "				<div class=\"card {{reminder.background_color}}\">\n" +
    "					<div class=\"card-content\">\n" +
    "						<span class=\"card-title\">{{reminder.title}}</span>\n" +
    "						<p>{{reminder.body}}</p>\n" +
    "					</div>\n" +
    "					<div class=\"card-action\">\n" +
    "						<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light grey darken-3\" ng-click=\"hmc.dismissReminder(reminder)\"><i class=\"fas fa-check\"></i></a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<br ng-repeat-end>\n" +
    "	</div>\n" +
    "</div> -->\n" +
    "");
}]);

angular.module("src/module/route/manageDoctors/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/manageDoctors/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light green\" ng-class=\"mdc.isAdding && 'disabled'\" ng-click=\"mdc.addDoctor()\"><i class=\"fas\" ng-class=\"mdc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l12\">\n" +
    "							<i class=\"prefix fas fa-search\"></i>\n" +
    "							<label>Buscar... </label>\n" +
    "							<input type=\"search\" ng-model=\"mdc.searchTerm\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "<!-- 					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<a class=\"btn btn-block waves-effect waves-light grey darken-3\">Agregar un nuevo Medico</a>\n" +
    "						</div>\n" +
    "					</div> -->\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<table class=\"bordered highlight centered-table\" style=\"table-layout: fixed\">\n" +
    "								<thead class=\"grey darken-3 white-text\">\n" +
    "									<tr>\n" +
    "										<th>#</th>\n" +
    "										<th>Nombre</th>\n" +
    "										<th>Info</th>\n" +
    "										<th>Eliminar</th>\n" +
    "									</tr>\n" +
    "								</thead>\n" +
    "								<tbody>\n" +
    "									<tr dir-paginate=\"doctor in mdc.doctors | filter: mdc.searchTerm | orderBy:mdc.sortBy:mdc.sortReverse | itemsPerPage: mdc.itemsPerPage track by $index\" pagination-id=\"manageDoctorsId\" ng-show=\"$index > 0\">\n" +
    "										<td>{{doctor.id}}</td>\n" +
    "										<td>{{doctor.full_name | capitalize}}</td>\n" +
    "										<td><a class=\"btn waves-effect waves-light\" ng-click=\"mdc.details(doctor)\"><i class=\"fas fa-info\"></i></td>\n" +
    "										<td><a class=\"btn waves-effect waves-light red\" ng-click=\"mdc.erase(doctor)\"><i class=\"fas fa-trash\"></i></td>\n" +
    "										</tr>\n" +
    "									</tbody>\n" +
    "								</table>\n" +
    "							</div>\n" +
    "							&nbsp;\n" +
    "							<div class=\"row\">\n" +
    "								<dir-pagination-controls boundary-links=\"true\" template-url=\"src/directive/dirPaginationControls/template.html\" pagination-id=\"manageDoctorsId\"></dir-pagination-controls>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "");
}]);

angular.module("src/module/route/manageOperators/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/manageOperators/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light green\" ng-class=\"moc.isAdding && 'disabled'\" ng-click=\"moc.addOperator()\"><i class=\"fas\" ng-class=\"moc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l12\">\n" +
    "							<i class=\"prefix fas fa-search\"></i>\n" +
    "							<label>Buscar... </label>\n" +
    "							<input type=\"search\" ng-model=\"moc.searchTerm\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "<!-- 					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<a class=\"btn btn-block waves-effect waves-light grey darken-3\" ng-click=\"moc.addOperator()\">Agregar un nuevo Operador</a>\n" +
    "						</div>\n" +
    "					</div> -->\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<table class=\"bordered highlight centered-table\" style=\"table-layout: fixed\">\n" +
    "								<thead class=\"grey darken-3 white-text\">\n" +
    "									<tr>\n" +
    "										<th>#</th>\n" +
    "										<th>Nombre</th>\n" +
    "										<th>Nick</th>\n" +
    "										<th>Info</th>\n" +
    "										<th>Eliminar</th>\n" +
    "									</tr>\n" +
    "								</thead>\n" +
    "								<tbody>\n" +
    "									<tr dir-paginate=\"operator in moc.operators | filter: moc.searchTerm | orderBy:moc.sortBy:moc.sortReverse | itemsPerPage: moc.itemsPerPage track by $index\" pagination-id=\"manageOperatorsId\">\n" +
    "										<td>{{operator.id == 1 ? 'Administrador' : 'Usuario'}}</td>\n" +
    "										<td>{{operator.full_name}}</td>\n" +
    "										<td>{{operator.nick_name}}</td>\n" +
    "										<td><a class=\"btn waves-effect waves-light\" ng-click=\"moc.showDetails(operator)\"><i class=\"fas fa-info\"></i></td>\n" +
    "											<td><a class=\"btn waves-effect waves-light red\" ng-class=\"operator.id == 1 && 'disabled'\" ng-click=\"moc.deleteOperator(operator)\"><i class=\"fas fa-trash\"></i></td>\n" +
    "											</tr>\n" +
    "										</tbody>\n" +
    "									</table>\n" +
    "								</div>\n" +
    "								&nbsp;\n" +
    "								<div class=\"row\">\n" +
    "									<dir-pagination-controls boundary-links=\"true\" template-url=\"src/directive/dirPaginationControls/template.html\" pagination-id=\"manageOperatorsId\"></dir-pagination-controls>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "");
}]);

angular.module("src/module/route/managePatients/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/managePatients/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light green\" ng-class=\"mpc.isAdding && 'disabled'\" ng-click=\"mpc.addPatient()\"><i class=\"fas\" ng-class=\"mpc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l12\">\n" +
    "							<i class=\"prefix fas fa-search\"></i>\n" +
    "							<label>Buscar... </label>\n" +
    "							<input type=\"search\" ng-model=\"mpc.searchTerm\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<table class=\"bordered highlight centered-table\" style=\"table-layout: fixed\">\n" +
    "								<thead class=\"grey darken-3 white-text\">\n" +
    "									<tr>\n" +
    "										<th>#</th>\n" +
    "										<th>Nombre</th>\n" +
    "										<th>Info</th>\n" +
    "										<th>Historial</th>\n" +
    "										<th>Eliminar</th>\n" +
    "									</tr>\n" +
    "								</thead>\n" +
    "								<tbody>\n" +
    "									<tr dir-paginate=\"patient in mpc.patients | filter: mpc.searchTerm | orderBy:mpc.sortBy:mpc.sortReverse | itemsPerPage: mpc.itemsPerPage track by $index\" pagination-id=\"managepatientsId\">\n" +
    "										<td>{{patient.id}}</td>\n" +
    "										<td>{{patient.full_name | capitalize}}</td>\n" +
    "										<td><a class=\"btn waves-effect waves-light\" ng-click=\"mpc.detailsPatient(patient)\"><i class=\"fas fa-info\"></i></td>\n" +
    "										<td><a class=\"btn waves-effect waves-light cyan\" ng-click=\"mpc.historyPatient(patient)\"><i class=\"fas fa-book\"></i></a></td>\n" +
    "										<td><a class=\"btn waves-effect waves-light red\" ng-click=\"mpc.deletePatient(patient)\"><i class=\"fas fa-trash\"></i></a></td>\n" +
    "									</tr>\n" +
    "								</tbody>\n" +
    "							</table>\n" +
    "						</div>\n" +
    "						&nbsp;\n" +
    "						<div class=\"row\">\n" +
    "							<dir-pagination-controls boundary-links=\"true\" template-url=\"src/directive/dirPaginationControls/template.html\" pagination-id=\"managepatientsId\"></dir-pagination-controls>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("src/module/route/monthlyReport/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/monthlyReport/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    " 	<a class=\"btn-floating btn-large waves-effect waves-light grey darken-3\" ng-class=\"mrc.isPrinting && 'disabled'\" ng-click=\"mrc.print()\"><i class=\"fas\" ng-class=\"mrc.isPrinting ? 'fa-cog fa-spin black-text' : 'fa-print'\"></i></a>\n" +
    " </div>\n" +
    " <div class=\"container\">\n" +
    " 	<div class=\"row\">\n" +
    " 		<div class=\"col l12\">\n" +
    " 			<div class=\"card grey lighten-4\">\n" +
    " 				<div class=\"card-content\">\n" +
    " 					<div class=\"row\">\n" +
    " 						<div input-field class=\"col l5\">\n" +
    " 							<label ng-class=\"mrc.selectMonth != null && 'active'\">Elige un Mes</label>\n" +
    " 							<select material-select ng-model=\"mrc.selectMonth\">\n" +
    " 								<option value=\"01\">Enero</option>\n" +
    " 								<option value=\"02\">Febrero</option>\n" +
    " 								<option value=\"03\">Marzo</option>\n" +
    " 								<option value=\"04\">Abril</option>\n" +
    " 								<option value=\"05\">Mayo</option>\n" +
    " 								<option value=\"06\">Junio</option>\n" +
    " 								<option value=\"07\">Julio</option>\n" +
    " 								<option value=\"08\">Agosto</option>\n" +
    " 								<option value=\"09\">Septiembre</option>\n" +
    " 								<option value=\"10\">Octubre</option>\n" +
    " 								<option value=\"11\">Noviembre</option>\n" +
    " 								<option value=\"12\">Diciembre</option>\n" +
    " 							</select>\n" +
    " 						</div>\n" +
    " 						<div input-field class=\"col offset-l2 l5\">\n" +
    " 							<label ng-class=\"mrc.selectYear != null && 'active'\">Elige un Año</label>\n" +
    " 							<select material-select ng-model=\"mrc.selectYear\">\n" +
    " 								<option value=\"2018\">2018</option>\n" +
    " 								<option value=\"2019\">2019</option>\n" +
    " 								<option value=\"2020\">2020</option>\n" +
    " 								<option value=\"2021\">2021</option>\n" +
    " 								<option value=\"2022\">2022</option>\n" +
    " 								<option value=\"2023\">2023</option>\n" +
    " 								<option value=\"2024\">2024</option>\n" +
    " 								<option value=\"2025\">2025</option>\n" +
    " 								<option value=\"2026\">2026</option>\n" +
    " 								<option value=\"2027\">2027</option>\n" +
    " 								<option value=\"2028\">2028</option>\n" +
    " 							</select>\n" +
    " 						</div>\n" +
    " 					</div>\n" +
    " 					<div class=\"row\">\n" +
    " 						<div class=\"col l12\">\n" +
    " 							<table class=\"bordered striped centered-table nonsense-table\">\n" +
    " 								<colgroup>\n" +
    " 									<col style=\"width: 20%\">\n" +
    " 									<col style=\"width: 30%\">\n" +
    " 								</colgroup>\n" +
    " 								<thead class=\"grey darken-3 white-text\">\n" +
    " 									<tr>\n" +
    " 										<th>Código</th>\n" +
    " 										<th>Descripción</th>\n" +
    " 										<th>Total</th>\n" +
    " 										<th>Benef.</th>\n" +
    " 										<th>A.Cerrada</th>\n" +
    " 										<th>A.Abierta</th>\n" +
    " 										<th>Urgencia</th>\n" +
    " 									</tr>\n" +
    " 								</thead>\n" +
    " 								<tfoot>\n" +
    " 									<tr class=\"grey darken-3 white-text\">\n" +
    " 										<th colspan=\"2\">Totales Verticales</th>\n" +
    " 										<td>{{mrc.reportData.meta.allTotal}}</td>\n" +
    " 										<td>{{mrc.reportData.meta.allF}}</td>\n" +
    " 										<td>{{mrc.reportData.meta.allA}}</td>\n" +
    " 										<td>{{mrc.reportData.meta.allB}}</td>\n" +
    " 										<td>{{mrc.reportData.meta.allU}}</td>\n" +
    " 									</tr>\n" +
    " 								</tfoot>\n" +
    " 								<tbody>\n" +
    " 									<tr ng-repeat=\"item in mrc.reportData.data\">\n" +
    " 										<td>{{item.code}}</td>\n" +
    " 										<td class=\"break-text\">{{item.codeText}}</td>\n" +
    " 										<td>{{item.total}}</td>\n" +
    " 										<td>{{item.beneficiario}}</td>\n" +
    " 										<td>{{item.a_cerrada}}</td>\n" +
    " 										<td>{{item.a_abierta}}</td>\n" +
    " 										<td>{{item.urgencia}}</td>\n" +
    " 									</tr>\n" +
    " 								</tbody>\n" +
    " 							</table>\n" +
    " 						</div>\n" +
    " 					</div>\n" +
    " 				</div>\n" +
    " 			</div>\n" +
    " 		</div>\n" +
    " 	</div>\n" +
    " </div>");
}]);

angular.module("src/module/route/newAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/newAppointment/template.html",
    "<!-- <button ng-click=\"nac.printTest()\"></button> -->\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<ng-form name=\"naForm\">\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<i class=\"prefix fas fa-user\"></i>\n" +
    "								<label>Escribir Nombre del Usuario</label>\n" +
    "								<input type=\"text\" ng-model=\"nac.form.patient_fullname\" ng-class=\"{'invalid': nac.form.patient_id <= 0, 'valid': nac.form.patient_id > 0}\" id=\"patient-autocomplete\" class=\"autocomplete\" required>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\" ng-show=\"nac.form.patient_id <= 0\">\n" +
    "							<div class=\"col l12\">\n" +
    "								<label class=\"orange-text\">**El Usuario no Existe por lo que se creará como nuevo, si luego quieres editar sus datos personales, debes ir a \"Administrar Usuarios\"**</label>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l6 file-field\">\n" +
    "								<button class=\"btn col l3\" ng-click=\"nac.showSchedule()\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "								<div class=\"file-path-wrapper\">\n" +
    "									<label style=\"left: 90px;\">Fecha</label>\n" +
    "									<input type=\"text\" ng-model=\"nac.form.date\" required readonly>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div input-field class=\"col offset-l1 l5\">\n" +
    "								<label>Hora</label>\n" +
    "								<input type=\"text\" ng-model=\"nac.form.time\" required readonly>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<i class=\"prefix fas fa-user-tie\"></i>\n" +
    "								<label ng-class=\"nac.form.operator_id != null && 'active'\">Con: </label>\n" +
    "								<select material-select ng-model=\"nac.form.operator_id\">\n" +
    "									<option ng-repeat=\"operator in nac.operators\" value=\"{{operator.id}}\">{{operator.full_name}}</option>\n" +
    "								</select>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<i class=\"prefix fas fa-allergies\"></i>\n" +
    "								<label ng-class=\"nac.form.reason != null && 'active'\">Motivo</label>\n" +
    "								<select ng-model=\"nac.form.reason\" material-select required>\n" +
    "									<option>Control de Herida</option>\n" +
    "									<option>Curaciones</option>\n" +
    "									<option>Control de Rutina</option>\n" +
    "									<option>Infiltración</option>\n" +
    "								</select>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<i class=\"prefix fas fa-notes-medical\"></i>\n" +
    "								<label>Nota</label>\n" +
    "								<input type=\"text\" ng-model=\"nac.form.notes\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</ng-form>\n" +
    "				</div>\n" +
    "				<div class=\"card-action\">\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l12\">\n" +
    "							<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green\" ng-class=\"{disabled: !naForm.$valid || nac.isCreating}\" ng-click=\"nac.createAppointment()\"><i class=\"fas\" ng-class=\"nac.isCreating ? 'fa-cog fa-spin black-text':'fa-save'\"></i></a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/route/patientControlList/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/patientControlList/template.html",
    "<div class=\"fixed-action-btn\" style=\"bottom: 80px\">\n" +
    "	<a class=\"btn-floating btn-large waves-effect waves-light green white-text\" ng-class=\"pclc.isAdding && 'disabled'\" ng-click=\"pclc.addPatientToControl()\" tooltipped=\"true\" data-tooltip=\"Agregar un Nuevo Usuario a Control\" data-colorclass=\"green\" data-position=\"left\"><i class=\"fas\" ng-class=\"pclc.isAdding ? 'fa-cog fa-spin black-text' : 'fa-plus'\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col l12\">\n" +
    "		<div class=\"card grey lighten-4\">\n" +
    "			<div class=\"card-content\">\n" +
    "				<br>\n" +
    "				<div class=\"row\">\n" +
    "					<div input-field class=\"col l12\">\n" +
    "						<i class=\"prefix fas fa-search\"></i>\n" +
    "						<label>Buscar por Nombre de Paciente</label>\n" +
    "						<input type=\"search\" ng-model=\"pclc.searchTerm\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<br>\n" +
    "				<dir-pagination-controls template-url=\"src/directive/dirPaginationControls/template.html\"></dir-pagination-controls>\n" +
    "				<br>\n" +
    "				<div class=\"row\" dir-paginate-start=\"appointment in pclc.appointments | filter: pclc.searchTerm | itemsPerPage: 5\">\n" +
    "					<div class=\"col l12\">\n" +
    "						<div class=\"card\">\n" +
    "							<div class=\"card-content\">\n" +
    "								<span class=\"card-title capitalize\">{{appointment.meta.public.patient_fullname | capitalize}}</span>\n" +
    "								<span class=\"h4\" style=\"\"><strong>Numero de Telefono: </strong> {{appointment.meta.private.phone_number || 'Sin Registro'}}</span><br>\n" +
    "								<span class=\"h4\"><strong>Numero de Celular: </strong>{{appointment.meta.private.mobile_number || 'Sin Registro'}}</span><br>\n" +
    "								<span class=\"h4\"><strong>RUN: </strong>{{appointment.meta.private.rut | toString | rut:'Sin Registro'}}</span><br>\n" +
    "								<span class=\"h4\"><strong>Alergias: </strong>{{appointment.meta.private.allergies || 'Sin Registro'}}</span><br>\n" +
    "								<table class=\"striped nonsense-table centered-table\" style=\"table-layout: fixed\">\n" +
    "									<colgroup>\n" +
    "										<col style=\"width: 10%\">\n" +
    "									</colgroup>\n" +
    "									<thead>\n" +
    "										<tr>\n" +
    "											<th>#</th>\n" +
    "											<th>Turno próximo</th>\n" +
    "											<th>Procedimiento<br>Realizado</th>\n" +
    "											<th>Observaciones</th>\n" +
    "											<th>Notas</th>\n" +
    "											<th>Estado</th>\n" +
    "										</tr>\n" +
    "									</thead>\n" +
    "									<tbody>\n" +
    "										<tr ng-repeat=\"item in appointment.data\">\n" +
    "											<td>{{$index + 1}}</td>\n" +
    "											<td>{{item.date}} a las<br>{{item.time}}</td>\n" +
    "											<td class=\"break-text\">{{item.procedure_perform | lowercase}}</td>\n" +
    "											<td class=\"break-text\">{{item.observations | lowercase}}</td>\n" +
    "											<td class=\"break-text\">{{item.notes | lowercase}}</td>\n" +
    "											<td>\n" +
    "												<div class=\"fixed-action-btn horizontal fab-in-table-cell\">\n" +
    "													<a class=\"btn-floating btn-flat btn-large waves-effect waves-light\">\n" +
    "														<i class=\"fas\" ng-class=\"item.status == 'pending' ? 'fa-minus orange-text' : item.status == 'done' ? 'fa-check green-text' : 'fa-times red-text'\"></i>\n" +
    "													</a>\n" +
    "													<ul style=\"right: 66%\">\n" +
    "														<li><a class=\"btn-floating btn-flat waves-effect waves-light green\" ng-click=\"pclc.changeAppointmentStatus('done', item)\"><i class=\"fas fa-check white-text\"></i></a></li>\n" +
    "														<li><a class=\"btn-floating btn-flat waves-effect waves-light red\" ng-click=\"pclc.changeAppointmentStatus('absent', item)\"><i class=\"fas fa-times white-text\"></i></a></li>\n" +
    "													</ul>\n" +
    "												</div>\n" +
    "											</td>\n" +
    "										</tr>\n" +
    "									</tbody>\n" +
    "								</table>\n" +
    "							</div>\n" +
    "							<div class=\"card-action\">\n" +
    "								<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light green left\" ng-click=\"pclc.addNewAppointmentToPatient(appointment)\"><i class=\"fas fa-calendar-plus\"></i></a>\n" +
    "								<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light cyan\" style=\"left: 10%;\" ng-click=\"pclc.dischargePatient(appointment)\"><i class=\"fas fa-walking\"></i></a>\n" +
    "								<a class=\"btn-floating btn-large halfway-fab waves-effect waves-light grey darken-3\" style=\"left: 17.2%;\" ng-click=\"pclc.printAppointmentSummary(appointment)\"><i class=\"fas fa-print\"></i></a>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<br dir-paginate-end>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
