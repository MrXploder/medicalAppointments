(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'ui.rCalendar', 'indexedDB'])

.constant('ENV', {lastCommitAuthor:'"MrXploder"',lastCommitMessage:'"login and license done!\r\n"',lastCommitTime:'"2018-05-28 14:10:12 -0400"',currentUser:'MrXploder',shortSHA:'77504dd',SHA:'77504dd8a034c8cba542777732dc29cfcc6e7936',name:'development',lastCommitNumber:'4'})

;
})(angular);