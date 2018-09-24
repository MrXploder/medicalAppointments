(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngTemplates', 'ui.bootstrap.contextMenu'])

.constant('ENV', {name:'development',SHA:'d59ef0b8d5293a064ce7fb2cd7916ad7e8fe10ea',shortSHA:'d59ef0b',currentUser:'MrXploder',lastCommitTime:'"2018-08-31 18:07:01 -0300"',lastCommitMessage:'"bugfix\r\n\r\ncorregido un bug que no contaba bien las atenciones "a.abierta" en la estadistica mensual.\r\nEl error era que se consideraba "Pabellon de Yeso" con tilde y el dato obtenido de la base de datos\r\n"',lastCommitNumber:'50',lastCommitAuthor:'"MrXploder"'})

;
})(angular);