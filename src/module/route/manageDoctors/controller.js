(function(){
	angular
	.module('angularApp')
	.controller('manageDoctorsController', manageDoctorsController);

	manageDoctorsController.$inject = ["Doctors", "$scope"];

	function manageDoctorsController(Doctors, $scope){
		var mdc = this;

		mdc.doctors 		 		= Doctors.query();
		mdc.sortBy 		 			= 'id';
		mdc.searchTerm   		= "";
		mdc.sortReverse  		= false;
		mdc.itemsPerPage 		= 10;
	}
})();