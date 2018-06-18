(function(){
	angular
	.module('angularApp')
	.controller('manageOperatorsController', manageOperatorsController);

	manageOperatorsController.$inject = ["Operators", "$scope"];

	function manageOperatorsController(Operators, $scope){
		var moc = this;

		moc.operators 		  = Operators.query();
		moc.sortBy 		 			= 'id';
		moc.searchTerm   		= "";
		moc.sortReverse  		= false;
		moc.itemsPerPage 		= 10;
	}
})();