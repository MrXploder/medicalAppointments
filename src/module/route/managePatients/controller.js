(function(){
	angular
	.module('angularApp')
	.controller('managePatientsController', managePatientsController);

	managePatientsController.$inject = ["Patients", "$scope"];

	function managePatientsController(Patients, $scope){
		var mpc = this;

		mpc.patients 		 = Patients.query();
		mpc.sortBy 		 	 = 'id';
		mpc.searchTerm   = "";
		mpc.sortReverse  = false;
		mpc.itemsPerPage = 10;
	}
})();