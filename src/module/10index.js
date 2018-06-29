(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {SHA:'1a942b6f73a25112f9e7b4bde6f904b34ea46f87',name:'development',shortSHA:'1a942b6',currentUser:'MrXploder',lastCommitMessage:'"working\r\n"',lastCommitTime:'"2018-06-28 05:39:08 -0400"',lastCommitNumber:'40',lastCommitAuthor:'"MrXploder"'})

;
})(angular);