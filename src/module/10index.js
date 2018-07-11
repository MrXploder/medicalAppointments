(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'ngRut', 'ngLoadingBar', 'ngDirPagination', 'ngMaterialize', 'ngFlow', 'ngTemplates'])

.constant('ENV', {currentUser:'MrXploder',lastCommitTime:'"2018-07-07 18:44:04 -0400"',lastCommitMessage:'"update\r\n\r\n1.- Refactorizado "usuarios en control"\r\n2.- Pequeñas mejoras.\r\n"',name:'development',SHA:'62b33a4ce68497bc11a5341c84e5d246db59d067',shortSHA:'62b33a4',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'43'})

;
})(angular);