(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB'])

.constant('ENV', {currentUser:'MrXploder',lastCommitTime:'"2018-06-12 22:09:39 -0400"',shortSHA:'496faf4',SHA:'496faf432e48b630d099057e07cae2acc01ad70c',name:'development',lastCommitAuthor:'"MrXploder"',lastCommitMessage:'"update\r\n"',lastCommitNumber:'18'})

;
})(angular);