(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngTemplates'])

.constant('ENV', {shortSHA:'68893da',name:'development',SHA:'68893dae932144fdc16c66777efd3dcb47807985',currentUser:'MrXploder',lastCommitMessage:'"bugfix\r\n\r\nCorregido el error que no pasaba los datos para imprimir al Printer en el reporte mensual.\r\nel objeto mcd.monthReport se agregaron las propiedades de meta y data por lo que habia que cambiar eso.\r\nY en la plantilla de impresion no se veian los totales.\r\n"',lastCommitTime:'"2018-08-29 16:12:11 -0300"',lastCommitNumber:'49',lastCommitAuthor:'"MrXploder"'})

;
})(angular);