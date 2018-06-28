(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {shortSHA:'9c1c2cb',lastCommitMessage:'"bugfix\r\n\r\n1.- Al agregar un paciente en "usuarios en control" mediante el boton "agregar usuario a control", se pueden crear nuevos usuarios a vuelo.\r\n"',lastCommitNumber:'37',lastCommitTime:'"2018-06-27 00:51:36 -0400"',lastCommitAuthor:'"MrXploder"',currentUser:'MrXploder',name:'development',SHA:'9c1c2cb07c44f01a9123d1ea981f8a6a4b2cd9e9'})

;
})(angular);