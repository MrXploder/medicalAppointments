angular.module("templates-main", ["../src/directive/appNav/template.html", "../src/directive/dirPaginationControls/template.html", "../src/directive/preLoadingIndicator/template.html", "../src/directive/routeLoadingIndicator/template.html", "../src/module/medd/include/loader/template.html", "../src/module/medd/modal/detailTicket/template.html", "../src/module/medd/route/firstTime/template.html", "../src/module/medd/route/home/template.html", "../src/module/medd/route/manageCensus/template.html", "../src/module/medd/route/manageDoctors/template.html", "../src/module/medd/route/newAppointment/template.html"]);

angular.module("../src/directive/appNav/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/directive/appNav/template.html",
    "");
}]);

angular.module("../src/directive/dirPaginationControls/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/directive/dirPaginationControls/template.html",
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

angular.module("../src/directive/preLoadingIndicator/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/directive/preLoadingIndicator/template.html",
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

angular.module("../src/directive/routeLoadingIndicator/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/directive/routeLoadingIndicator/template.html",
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

angular.module("../src/module/medd/include/loader/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/include/loader/template.html",
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

angular.module("../src/module/medd/modal/detailTicket/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/modal/detailTicket/template.html",
    "<div class=\"modal modal-fixed-footer\">\n" +
    "  <div class=\"modal-content\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-ticket-alt\"></i>\n" +
    "        <input id=\"detalleticketId_tarea\" type=\"text\" ng-model=\"dt.selectedTicket.id\" ng-value=\"dt.selectedTicket.id\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketId_tarea\" ng-class=\"(dt.selectedTicket.id != '') ? 'active' : ''\">Nº Solicitud</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-calendar-plus\"></i>\n" +
    "        <input id=\"detalleticketTimestamp_ingreso\" type=\"text\" ng-value=\"dt.selectedTicket.opened_the\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketTimestamp_ingreso\" ng-class=\"(dt.selectedTicket.opened_the != '') ? 'active' : ''\">Fecha de Ingreso</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-building\"></i>\n" +
    "        <input id=\"detalleticketNom_cliente\" type=\"text\" ng-model=\"dt.selectedTicket.client_name\" ng-value=\"dt.selectedTicket.client_name\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketNom_cliente\" ng-class=\"dt.selectedTicket.client_name ? 'active' : ''\">Nombre del Cliente</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-user\"></i>\n" +
    "        <input id=\"detalleticketNom_solicitante\" type=\"text\" ng-model=\"dt.selectedTicket.name\" ng-value=\"dt.selectedTicket.name\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketNom_solicitante\" ng-class=\"(dt.selectedTicket.name != '') ? 'active' : ''\">Nombre del Solicitante</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-envelope\"></i>\n" +
    "        <input id=\"detalleticketEmail_solicitante\" type=\"text\" ng-model=\"dt.selectedTicket.email\" ng-value=\"dt.selectedTicket.email\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketEmail_solicitante\" ng-class=\"(dt.selectedTicket.email != '') ? 'active' : ''\">E-mail del Solicitante</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-globe\"></i>\n" +
    "        <input id=\"detalleticketIp_solicitante\" type=\"text\" ng-model=\"dt.selectedTicket.ip\" ng-value=\"dt.selectedTicket.ip\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketIp_solicitante\" ng-class=\"(dt.selectedTicket.ip != '') ? 'active' : ''\">Ip del Solicitante</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-file-alt\"></i>\n" +
    "        <textarea id=\"detalleticketDesc_tarea\" type=\"text\" ng-model=\"dt.selectedTicket.description\" ng-value=\"dt.selectedTicket.description\" class=\"materialize-textarea\" disabled=\"disabled\"></textarea>\n" +
    "        <label for=\"detalleticketDesc_tarea\" ng-class=\"(dt.selectedTicket.description != '') ? 'active' : ''\">Descripción de la Solicitud</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-cog\"></i>\n" +
    "        <input id=\"detalleticketTipo\" type=\"text\" ng-model=\"dt.selectedTicket.type\" ng-value=\"dt.selectedTicket.type\" disabled=\"disabled\">\n" +
    "        <label for=\"detalleticketTipo\" ng-class=\"(dt.selectedTicket.type != '') ? 'active' : ''\">Tipo de Solicitud</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-clock\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <input id=\"detalleticketCant_horas\" type=\"number\" step=\"0.05\" min=\"0\" max=\"100\" ng-model=\"dt.selectedTicket.time_amount\" ng-value=\"dt.selectedTicket.time_amount\" ng-disabled=\"dt.disabled\" string-to-number>\n" +
    "        <label for=\"detalleticketCant_horas\" ng-class=\"(dt.selectedTicket.amount <= 100) ? 'active' : ''\">Horas</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-percent\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <input id=\"detalleticketPorcentaje_avance\" type=\"number\" step=\"5\" min=\"0\" max=\"100\" ng-model=\"dt.selectedTicket.progress\" ng-value=\"dt.selectedTicket.progress\" ng-disabled=\"dt.disabled\" string-to-number>\n" +
    "        <label for=\"detalleticketPorcentaje_avance\" ng-class=\"(dt.selectedTicket.progress <= 100) ? 'active' : ''\">Avance</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-user-md\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <label for=\"detalleticketSelect_ejecutor1\" ng-class=\"(dt.selectedTicket.operator_id != '') ? 'active' : ''\">Ejecutor 1</label>\n" +
    "        <select id=\"detalleticketSelect_ejecutor1\" ng-model=\"dt.selectedTicket.operator_id\" ng-disabled=\"dt.disabled\" material-select watch ng-options=\"operator.id as operator.name for operator in dt.operators\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-sort\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <label for=\"detalleticketSelect_prioridadtarea\" ng-class=\"(dt.selectedTicket.priority != '') ? 'active' : ''\">Prioridad</label>\n" +
    "        <select id=\"detalleticketSelect_prioridadtarea\" ng-model=\"dt.selectedTicket.priority\" ng-disabled=\"dt.disabled\" material-select>\n" +
    "          <option value=\"0\" ng-selected=\"dt.selectedTicket.priority == 0\">Baja</option>\n" +
    "          <option value=\"1\" ng-selected=\"dt.selectedTicket.priority == 1\">Normal</option>\n" +
    "          <option value=\"2\" ng-selected=\"dt.selectedTicket.priority == 2\">Urgente</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-calendar-check\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <input id=\"detalleticketFec_ejecucion\" type=\"text\" class=\"datepicker\" ng-model=\"dt.selectedTicket.closed_on\" value=\"{{dt.selectedTicket.closed_on ? (dt.selectedTicket.closed_on):'Ingresar una fecha'}}\" ng-disabled=\"dt.disabled\">\n" +
    "        <label for=\"detalleticketFec_ejecucion\" ng-class=\"(dt.selectedTicket.closed_on != '') ? 'active' : ''\">Fecha de Ejecución</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field\">\n" +
    "        <i class=\"prefix fas fa-file-alt\" ng-class=\"dt.disabled ? '':'highlighter'\"></i>\n" +
    "        <textarea id=\"detalleticketObs_operador\" type=\"text\" ng-model=\"dt.selectedTicket.comments\" ng-value=\"dt.selectedTicket.comments\" class=\"materialize-textarea\" ng-disabled=\"dt.disabled\"></textarea>\n" +
    "        <label for=\"detalleticketObs_operador\" ng-class=\"(dt.selectedTicket.comments != '') ? 'active' : ''\">Observación del Operador</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <div class=\"fixed-action-btn\">\n" +
    "      <button class=\"btn-floating btn-large waves-effect waves-light\" ng-click=\"dt.leftButton()\" ng-class=\"dt.disabled ? 'blue':'green'\"><i ng-class=\"dt.disabled ? 'fas fa-pencil-alt':'fas fa-save'\"></i></button>\n" +
    "      <button class=\"btn-floating btn-large waves-effect waves-light red\" ng-click=\"dt.rightButton()\"><i ng-class=\"dt.disabled ? 'fas fa-eject':'fas fa-undo'\"></i></button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../src/module/medd/route/firstTime/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/route/firstTime/template.html",
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

angular.module("../src/module/medd/route/home/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/route/home/template.html",
    "<div></div>");
}]);

angular.module("../src/module/medd/route/manageCensus/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/route/manageCensus/template.html",
    "<div class=\"container\">\n" +
    "	<div class=\"tap-target\" data-activates=\"menu\">\n" +
    "		<div class=\"tap-target-content\">\n" +
    "			<h5>Title</h5>\n" +
    "			<p>A bunch of text</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l5\">\n" +
    "							<i class=\"prefix fas fa-arrow-right\"></i>\n" +
    "							<label>Fecha de Inicio</label>\n" +
    "							<input input-date type=\"text\" ng-model=\"mcc.filters.sinceDate\" first-day=\"1\" format=\"dd-mm-yyyy\" disable=\"[false, 6, 7]\">\n" +
    "						</div>\n" +
    "						<div input-field class=\"col offset-l2 l5\">\n" +
    "							<i class=\"postfix fas fa-arrow-left\"></i>\n" +
    "							<label>Fecha de Termino</label>\n" +
    "							<input input-date type=\"text\" ng-model=\"mcc.filters.tillDate\" first-day=\"1\" format=\"dd-mm-yyyy\" disable=\"[false, 6, 7]\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l12\">\n" +
    "							<i class=\"prefix fas fa-search\"></i>\n" +
    "							<label>Buscar</label>\n" +
    "							<input ng-model=\"mcc.filters.searchTerm\" type=\"search\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "						<div input-field class=\"col l5\">\n" +
    "							<i class=\"prefix fas fa-user\"></i>\n" +
    "							<label ng-class=\"{'active': mcc.filters.byPatient != null}\">Filtrar por Paciente:</label>\n" +
    "							<select ng-model=\"mcc.filters.byPatient\" material-select watch>\n" +
    "								<option value=\"-1\">Todos</option>\n" +
    "								<option ng-repeat=\"patient in mcc.patients\" value=\"{{patient.id}}\">{{patient.full_name}}</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "						<div input-field class=\"col offset-l2 l5\">\n" +
    "							<i class=\"prefix fas fa-user-md\"></i>\n" +
    "							<label ng-class=\"{'active': mcc.filters.byDoctor != null}\">Filtrar por Medico:</label>\n" +
    "							<select ng-model=\"mcc.filters.byDoctor\" material-select watch>\n" +
    "								<option value=\"-1\">Todos</option>\n" +
    "								<option ng-repeat=\"doctor in mcc.doctors\" value=\"{{doctor.id}}\">{{doctor.full_name}}</option>\n" +
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
    "										<th>Paciente</th>\n" +
    "										<th>Medico</th>\n" +
    "										<th>Detalles</th>\n" +
    "										<th>Eliminar</th>\n" +
    "										<th>Estado</th>\n" +
    "									</tr>\n" +
    "								</thead>\n" +
    "								<tbody>\n" +
    "									<tr ng-repeat=\"appointment in mcc.filteredAppointments = (mcc.appointments | dateRange: mcc.filters.sinceDate : mcc.filters.tillDate | filter: mcc.filters.searchTerm | filter: ((mcc.filters.byPatient >= 0) || undefined) && {patient_id: mcc.filters.byPatient} | filter: ((mcc.filters.byDoctor >= 0)||undefined)&&{doctor_id: mcc.filters.byDoctor})\">\n" +
    "										<td>{{appointment.id}}</td>\n" +
    "										<td>{{appointment.date + ' ' + appointment.time}}</td>\n" +
    "										<td>{{appointment.patient_name}}</td>\n" +
    "										<td>{{appointment.doctor_name}}</td>\n" +
    "										<td><a class=\"btn-floating btn-flat waves-effect waves-light\" ng-click=\"mcc.openAppointmentDetails(appointment)\"><i class=\"fas fa-info-circle blue-text\"></i></a></td>\n" +
    "										<td><a class=\"btn-floating btn-flat waves-effect waves-light\" ng-click=\"mcc.deleteAppointment(appointment)\"><i class=\"fas fa-trash red-text\"></i></a></td>\n" +
    "										<td>\n" +
    "											<div class=\"fixed-action-btn horizontal\" style=\"position: relative; right: 10%; top: 0px\">\n" +
    "												<a class=\"btn-floating btn-flat waves-effect waves-light\">\n" +
    "													<i class=\"fas\" ng-class=\"appointment.status == 'pending' ? 'fa-minus orange-text' : appointment.status == 'done' ? 'fa-check green-text' : 'fa-times red-text'\"></i>\n" +
    "												</a>\n" +
    "												<ul style=\"right: -190px; top: 15%\">\n" +
    "													<li><a id=\"menu\" class=\"btn-floating btn-flat waves-effect waves-light green\" tooltipped data-delay=\"50\" data-position=\"bottom\" data-tooltip=\"Presente\" ng-click=\"mcc.changeAppointmentStatus('done', appointment)\"><i class=\"fas fa-check white-text\"></i></a></li>\n" +
    "													<li><a class=\"btn-floating btn-flat waves-effect waves-light orange\" tooltipped data-delay=\"50\" data-position=\"bottom\" data-tooltip=\"Pendiente\" ng-click=\"mcc.changeAppointmentStatus('pending', appointment)\"><i class=\"fas fa-minus white-text\"></i></a></li>\n" +
    "													<li><a class=\"btn-floating btn-flat waves-effect waves-light red\" tooltipped data-delay=\"50\" data-position=\"bottom\" data-tooltip=\"Ausente\" ng-click=\"mcc.changeAppointmentStatus('absent', appointment)\"><i class=\"fas fa-times white-text\"></i></a></li>\n" +
    "												</ul>\n" +
    "											</div>\n" +
    "										</td>\n" +
    "									</tr>\n" +
    "									<tr ng-if=\"mcc.filteredAppointments.length === 0\">\n" +
    "										<td colspan=\"7\">Sin Coincidencias...</td>\n" +
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

angular.module("../src/module/medd/route/manageDoctors/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/route/manageDoctors/template.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../src/module/medd/route/newAppointment/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../src/module/medd/route/newAppointment/template.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col l12\">\n" +
    "			<div class=\"card grey lighten-4\">\n" +
    "				<div class=\"card-content\">\n" +
    "					<span class=\"card-title\">Agendar Nuevo Turno</span>\n" +
    "					<br>\n" +
    "					<ng-form name=\"naForm\">\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<label>Elegir Paciente</label>\n" +
    "								<input type=\"text\" ng-model=\"nac.form.patient_fullname\" id=\"patient-autocomplete\" class=\"autocomplete\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<label ng-class=\"nac.form.doctor_id != null && 'active'\">Asignar Doctor</label>\n" +
    "								<select material-select ng-model=\"nac.form.doctor_id\" watch ng-options=\"doctor.id as doctor.full_name for doctor in nac.doctors\"></select>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l6 file-field\">\n" +
    "								<button class=\"btn col l3\" ng-click=\"nac.showSchedule()\"><i class=\"fas fa-calendar-alt\"></i></button>\n" +
    "								<div class=\"file-path-wrapper\">\n" +
    "									<label style=\"left: 90px;\">Elige una fecha</label>\n" +
    "									<input input-date type=\"text\" id=\"patientDatePicker\" ng-model=\"nac.form.date\" first-day=\"1\" format=\"dd/mm/yyyy\" disable=\"[false, 6, 7]\">\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div input-field class=\"col offset-l1 l5\">\n" +
    "								<label>Elige una hora</label>\n" +
    "								<input input-clock type=\"text\" twelvehour=\"false\" ng-model=\"nac.form.time\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<label ng-class=\"nac.form.comes_from != null && 'active'\">Procedencia</label>\n" +
    "								<select ng-model=\"nac.form.comes_from\" material-select>\n" +
    "									<option>CAE Adulto</option>\n" +
    "									<option>CAE PED</option>\n" +
    "									<option>TMT</option>\n" +
    "									<option>UEH</option>\n" +
    "									<option>PAB</option>\n" +
    "									<option>Control</option>\n" +
    "									<option>Yeso</option>\n" +
    "									<option>Otro</option>\n" +
    "								</select>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div input-field class=\"col l12\">\n" +
    "								<label ng-class=\"nac.form.reason != null && 'active'\">Motivo</label>\n" +
    "								<select ng-model=\"nac.form.reason\" material-select>\n" +
    "									<option>Control de Herida</option>\n" +
    "									<option>Curaciones</option>\n" +
    "									<option>Control de Rutina</option>\n" +
    "								</select>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</ng-form>\n" +
    "				</div>\n" +
    "				<div class=\"card-action\">\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col l4\">\n" +
    "							<a class=\"btn waves-effect waves-light red\" ng-click=\"nac.form = {}\">Reset <i class=\"fas fa-eraser\"></i></a>\n" +
    "						</div>\n" +
    "						<div class=\"col l4\">\n" +
    "							<a class=\"btn waves-effect waves-light green\" ng-click=\"nac.createAppointment()\">Enviar <i class=\"fas fa-location-arrow\"></i></a>\n" +
    "						</div>\n" +
    "						<div class=\"col l4\">\n" +
    "							<a class=\"btn waves-effect waves-light grey\">Vista Previa <i class=\"fas fa-print\"></i></a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
