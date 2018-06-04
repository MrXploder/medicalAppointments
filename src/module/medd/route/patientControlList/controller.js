(function(){
	angular
	.module("angularApp")
	.controller("patientControlListController", patientControlListController);

	patientControlListController.$inject = ["$scope"];

	function patientControlListController($scope){
		var pclc = this;
	}
})();