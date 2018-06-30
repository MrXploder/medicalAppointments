(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {name:'development',SHA:'c801272c309fff1a65b3223ea683e85d84a006cb',shortSHA:'c801272',currentUser:'MrXploder',lastCommitMessage:'"update\r\n\r\n1.- Terminado los menus de "Administrar -> Usuarios, Operadores y Medicos"\r\n2- Agregada columna "Nombre Operador" en estadistica diaria\r\n3.- Al agregar un usuario sin turno en estadistica diaria, este aparece ahora directamente como "presente"\r\n4.- Se reordena la plantilla de impresion para que la fecha este al lado del codigo.\r\n"',lastCommitTime:'"2018-06-29 04:01:00 -0400"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'41'})

;
})(angular);