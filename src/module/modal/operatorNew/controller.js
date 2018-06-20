(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('operatorNewController', operatorNewController);

	operatorNewController.$inject = ["$scope"];

	function operatorNewController($scope){
		let onc = this;

		onc.form 				= {};
		onc.saveAndExit = saveAndExit;

		function saveAndExit(){
			$scope.confirm(onc.form);
		}
	}
})();