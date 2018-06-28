(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {SHA:'e344d7c43b3c243420413e9aa04bbc0b2ba23bb9',shortSHA:'e344d7c',currentUser:'MrXploder',lastCommitTime:'"2018-06-28 04:38:50 -0400"',lastCommitMessage:'"update\r\n"',name:'development',lastCommitNumber:'39',lastCommitAuthor:'"MrXploder"'})

;
})(angular);