(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {currentUser:'MrXploder',SHA:'2628908e589117b04664d8e8747dabaa199e9509',name:'development',shortSHA:'2628908',lastCommitTime:'"2018-06-29 23:02:29 -0400"',lastCommitMessage:'"fix\r\n\r\n1.- Revertida la orientacion de las plantillas de resumen -> diario, mensual.\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'42'})

;
})(angular);