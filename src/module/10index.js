(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngTemplates'])

.constant('ENV', {currentUser:'MrXploder',lastCommitTime:'"2018-08-28 22:10:22 -0300"',shortSHA:'3300f63',lastCommitNumber:'48',name:'development',SHA:'3300f6327ac68a01675afd027b454e8a8e9d428d',lastCommitMessage:'"adds\r\n\r\n- agregado boton para imprimir historial de pacientes\r\n"',lastCommitAuthor:'"MrXploder"'})

;
})(angular);