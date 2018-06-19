(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {SHA:'54c8118f28646ef6ad153cc559eb3029475028be',name:'development',currentUser:'MrXploder',shortSHA:'54c8118',lastCommitTime:'"2018-06-18 18:25:13 -0400"',lastCommitMessage:'"update\r\n"',lastCommitNumber:'27',lastCommitAuthor:'"MrXploder"'})

;
})(angular);