(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {currentUser:'MrXploder',shortSHA:'b1b72ed',SHA:'b1b72ed9bcb7e00dac3d12797c25c87cf265f427',name:'development',lastCommitTime:'"2018-06-13 16:50:05 -0400"',lastCommitMessage:'"update\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'19'})

;
})(angular);