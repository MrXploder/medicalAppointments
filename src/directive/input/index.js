// (function() {
// 	'use strict';

// 	angular
// 	.module('angularApp')
// 	.directive('input', inputDirective);

// 	function inputDirective(){
// 		return {
// 			restrict: 'E',
// 			require: '?ngModel',
// 			link: function (scope, element, attrs, ngModel) {
// 				if (attrs.type !== 'file' || !angular.isDefined(ngModel)) {
// 					return;
// 				}

// 				element.on('change', updateModelWithFile);
// 				scope.$on('$destroy', function () {
// 					element.off('change', updateModelWithFile);
// 				});

// 				if (attrs.maxsize) {
// 					var maxsize = parseInt(attrs.maxsize);
// 					ngModel.$validators.maxsize = function(modelValue, viewValue) {
// 						var value = modelValue || viewValue;
// 						if (!angular.isArray(value)) {
// 							value = [value];
// 						}
// 						for (var i = value.length - 1; i >= 0; i--) {
// 							if (value[i] && value[i].size && value[i].size > maxsize) {
// 								return false;
// 							}
// 						}
// 						return true;
// 					};
// 				}

// 				if (attrs.accept) {
// 					var accept = attrs.accept.split(',');
// 					ngModel.$validators.accept = function(modelValue, viewValue) {
// 						var value = modelValue || viewValue;
// 						if (!angular.isArray(value)) {
// 							value = [value];
// 						}
// 						for (var i = value.length - 1; i >= 0; i--) {
// 							if (value[i] && accept.indexOf(value[i].type) === -1) {
// 								return false;
// 							}
// 						}
// 						return true;
// 					};
// 				}

// 				function updateModelWithFile (event) {
// 					var files = event.target.files;
// 					if (!angular.isDefined(attrs.multiple)) {
// 						files = files[0];
// 					} else {
// 						files = Array.prototype.slice.apply(files);
// 					}
// 					ngModel.$setViewValue(files, event);
// 				}
// 			}
// 		}
// 	}
// })();