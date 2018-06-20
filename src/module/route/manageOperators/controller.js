(function(){
	angular
	.module('angularApp')
	.controller('manageOperatorsController', manageOperatorsController);

	manageOperatorsController.$inject = ["Operators", "$scope", "ngDialog"];

	function manageOperatorsController(Operators, $scope, ngDialog){
		var moc = this;

		moc.operators 		  = Operators.query();
		moc.sortBy 		 			= 'id';
		moc.searchTerm   		= "";
		moc.sortReverse  		= false;
		moc.itemsPerPage 		= 10;
		moc.showDetails     = showDetails;
		moc.addOperator     = addOperator;
		moc.deleteOperator  = deleteOperator;

		function showDetails(operator){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/operatorDetails/template.html",
				controller: "operatorDetailsController",
				controllerAs: "odc",
				data: operator,
			}).then(response => {
				console.log(operator);
				operator
				.$update()
				.then(response => {
					Materialize.toast("Exito", 5000, "green");
					Operators
					.query()
					.$promise
					.then(response => {
						moc.operators = response;
					});
				})
				.catch(response => {
					Materialize.toast(response.statusText, 5000, "red");
				});
			});
		}

		function addOperator(){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/operatorNew/template.html",
				controller: "operatorNewController",
				controllerAs: "onc",
			}).then(response => {
				Operators
				.create(response)
				.$promise
				.then(response => {
					Materialize.toast("Creado", 5000, "green");
					Operators
					.query()
					.$promise
					.then(response => {
						moc.operators = response;
					})
				})
				.catch(response => {
					Materialize.toast(response.statusText, 5000, "red");
				})
			});
		}

		function deleteOperator(operator){
			Operators
			.delete({id: operator.id})
			.$promise
			.then(response => {
				Materialize.toast("Borrado", 5000, "green");
				Operators
				.query()
				.$promise
				.then(response => {
					moc.operators = response;
				});
			})
			.catch(response => {
				Materialize.toast(response.statusText, 5000, "red");
			});
		}
	}
})();