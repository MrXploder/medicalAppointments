(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {currentUser:'MrXploder',name:'development',shortSHA:'67a3893',SHA:'67a38932269f47caeb77c9cb5abc124b5c76a295',lastCommitTime:'"2018-06-18 15:33:36 -0400"',lastCommitAuthor:'"MrXploder"',lastCommitMessage:'"update\r\n"',lastCommitNumber:'26'})

;
})(angular);