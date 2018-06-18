(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {currentUser:'MrXploder',shortSHA:'a4e9d88',SHA:'a4e9d8890a67dcf2294b1c188dc6515ba2046a35',name:'development',lastCommitMessage:'"update\r\n"',lastCommitTime:'"2018-06-17 16:52:09 -0400"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'25'})

;
})(angular);