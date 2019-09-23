(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngTemplates', 'ui.bootstrap.contextMenu'])

.constant('ENV', {SHA:'8bf468d2f64d3efab5689033d411086d2787bdae',name:'development',shortSHA:'8bf468d',lastCommitTime:'"2018-09-24 03:43:39 -0300"',currentUser:'MrXploder',lastCommitMessage:'"update\r\n\r\nAgregado el calendario al menu "home"\r\nMejoradas las plantillas de impresion\r\nAgregado el click secundario en el calendario\r\n"',lastCommitNumber:'51',lastCommitAuthor:'"MrXploder"'})

;
})(angular);