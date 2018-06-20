(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {lastCommitTime:'"2018-06-19 01:40:36 -0400"',currentUser:'MrXploder',shortSHA:'0fdeaeb',SHA:'0fdeaeb5a93c442bf09c457d4ecc47c8e4825c50',name:'development',lastCommitMessage:'"update\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'28'})

;
})(angular);