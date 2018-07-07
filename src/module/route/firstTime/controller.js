(function(){
	'use strict';

	angular
	.module("angularApp")
	.controller("firstTimeController", firstTimeController);

	firstTimeController.$inject = ["licenseVerificator", "$localStorage", "$timeout", "$location"];

	function firstTimeController(licenseVerificator, $localStorage, $timeout, $location){
		var ftc = this;

		ftc.key 		 = null;
		ftc.validate = validate;

		function validate(){
			licenseVerificator
			.validate({key: ftc.key})
			.$promise
			.then(function success(response){
				$localStorage.currentLicense = {key: response.license.key, status: response.license.status};
				$timeout(function(){ $location.path("/home"); },0);
				Materialize.toast('Acepted', 5000, 'green');
			})
			.catch(function error(response){
				ftc.key = null;
				Materialize.toast(response.statusText, 5000, 'red');
			});
		}
	}
})();
