(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'cp.ngConfirm', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'indexedDB', 'templates-main'])

.constant('ENV', {lastCommitMessage:'"do not delete all src files\r\n\r\n"',lastCommitTime:'"2019-09-23 02:31:24 -0300"',currentUser:'Luis',shortSHA:'414f9d4',SHA:'414f9d46845234218446bdbe7956dff7ad96299d',name:'development',lastCommitAuthor:'"Luis"',lastCommitNumber:'56'})

;
})(angular);