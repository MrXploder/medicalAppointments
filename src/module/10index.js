(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngTemplates'])

.constant('ENV', {currentUser:'MrXploder',shortSHA:'1159295',SHA:'1159295000f981879e113dfe973d650e318bcf7e',name:'development',lastCommitTime:'"2018-08-06 01:16:23 -0400"',lastCommitMessage:'"update 1.6\r\n\r\n- agregada la opcion de cantidad pacientes policlinicos\r\n- agregados los pacientes policlinicos a estadistica mensual\r\n- refactorizado pacientes en control\r\n- agregada la opcion de subir avatar al crear nuevo operador\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'45'})

;
})(angular);