(function(){
	'use strict';

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
		moc.isAdding				= false;

		function showDetails(operator){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/operatorDetails/template.html",
				controller: "operatorDetailsController",
				controllerAs: "odc",
				showClose: true,
				data: operator,
			}).then(function(response){
				operator
				.$update()
				.then(function(response){
					Materialize.toast("Exito", 5000, "green");
					Operators
					.query()
					.$promise
					.then(function(response){
						moc.operators = response;
					});
				})
				.catch(function(response){
					Materialize.toast(response.statusText, 5000, "red");
				});
			});
		}

		function addOperator(){
			moc.isAdding = true;
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/operatorNew/template.html",
				controller: "operatorNewController",
				controllerAs: "onc",
				showClose: true,
			}).then(function(response){
				Operators
				.create(response)
				.$promise
				.then(function(response){
					Materialize.toast("Creado", 5000, "green");
					Operators
					.query()
					.$promise
					.then(function(response){
						moc.operators = response;
					})
				})
				.catch(function(response){
					Materialize.toast(response.statusText, 5000, "red");
				})
			})
			.finally(function(response){
				moc.isAdding = false;
			});
		}

		function deleteOperator(operator){
			Operators
			.delete({id: operator.id})
			.$promise
			.then(function(response){
				Materialize.toast("Borrado", 5000, "green");
				Operators
				.query()
				.$promise
				.then(function(response){
					moc.operators = response;
				});
			})
			.catch(function(response){
				Materialize.toast(response.statusText, 5000, "red");
			});
		}
	}
})();