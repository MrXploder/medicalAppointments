(function(){
	angular
	.module('angularApp')
	.controller('manageDoctorsController', manageDoctorsController);

	manageDoctorsController.$inject = ["Doctors", "$scope"];

	function manageDoctorsController(Doctors, $scope){
		var mdc = this;
	}
})();