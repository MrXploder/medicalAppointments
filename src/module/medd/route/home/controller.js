(function(){
	angular
	.module('angularApp')
	.controller('homeController', homeController);

	homeController.$inject = ["licenseVerificator", "$localStorage", "$timeout", "$location"];

	function homeController(licenseVerificator, $localStorage, $timeout, $location){
		var hmc = this;

		licenseVerificator
		.isValid({key: $localStorage.currentLicense.key})
		.$promise
		.catch(function error(response){
			if(response.status === 402){ /*execute only on specific cases (402 error code) */
				$timeout(function(){
					$localStorage.currentLicense.key = null;
					$location.path("/firstTime");
				},0);
			}
		});
	}
})();	