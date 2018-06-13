(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB'])

.constant('ENV', {lastCommitMessage:'"update\r\n"',lastCommitTime:'"2018-06-11 23:43:25 -0400"',currentUser:'MrXploder',shortSHA:'28e61aa',SHA:'28e61aa7d285db59dc3c55c6aafc71520f5a1f68',name:'development',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'15'})

;
})(angular);