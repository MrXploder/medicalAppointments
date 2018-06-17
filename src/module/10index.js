(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {SHA:'68e05c47eca387a1be061570d0b8d11fe329dee9',name:'development',currentUser:'MrXploder',shortSHA:'68e05c4',lastCommitAuthor:'"MrXploder"',lastCommitTime:'"2018-06-16 06:30:25 -0400"',lastCommitMessage:'"update\r\n"',lastCommitNumber:'24'})

;
})(angular);