(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('operatorDetailsController', operatorDetailsController);

	operatorDetailsController.$inject = ["$scope"];

	function operatorDetailsController($scope){
		let odc = this;

		odc.form 				= $scope.ngDialogData;
		odc.saveAndExit = saveAndExit;

		function saveAndExit(){
			$scope.confirm();
		}
	}

})();