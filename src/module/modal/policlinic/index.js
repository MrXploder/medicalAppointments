(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('policlinicController', policlinicController);

	policlinicController.$inject = ["$scope", "Operators", "Policlinic"];

	function policlinicController($scope, Operators, Policlinic){
		let pcc = this;

		pcc.form      = {};
		pcc.operators = [];
		pcc.save 			= save;
		pcc.getByDate = getByDate;

		activate();
		////////////////////////////////////

		function activate(){
			Operators.query().$promise.then(function(response){
				pcc.operators = response;
			});
		}

		function getByDate(date){
			Policlinic.find({date: pcc.form.date}).then(function(response){
				if(response.length > 0) pcc.form = response[0];
				else{
					pcc.form = {date: pcc.form.date};
				}
			});
		}

		function save(){
			let resource = new Policlinic.resource(pcc.form);

			resource.$save().then(function(response){
				$scope.closeThisDialog();
			});
		}

		$scope.$watch('pcc.form.date', function(){
			if(!pcc.form.date) return;
			getByDate(pcc.form.date);
		});
	}
})();