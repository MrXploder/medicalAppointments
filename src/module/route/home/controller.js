(function(){
	angular
	.module('angularApp')
	.controller('homeController', homeController);

	homeController.$inject = ["Doctors", "licenseVerificator", "$localStorage", "$rootScope", "$location"];

	function homeController(Doctors, licenseVerificator, $localStorage, $rootScope, $location){
		var hmc = this;

		licenseVerificator
		.isValid({key: $localStorage.currentLicense.key})
		.$promise
		.catch(function error(response){
			if(response.status === 402){ /*execute only on specific cases (402 error code) */
				$localStorage.currentLicense = { key: null, status: "dirty" };
				$rootScope.$evalAsync(function(){ $location.path("/firstTime"); });
			}
		});
	}
})();	