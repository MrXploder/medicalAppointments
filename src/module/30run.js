/*
*
* @author  "MrXploder"
* @company "EleDevelopment SpA."
* @date		 "May/2018" 
* @about   "This is a Run method from AngularJS that handles 
					 the initialization of the ngStorage enviroment variables"
*	
*/
(function(){
	angular
	.module('angularApp')
	.run(support);

	support.$inject = ["$rootScope", "$localStorage", "$ngConfirmDefaults"];

	function support($rootScope, $localStorage, $ngConfirmDefaults){
		var _default = {
			currentLicense: {
				key: null,
				status: null,
			},
			currentUser: {
				id: null,
				name: null,
				token: null,
				avatar: null,
			},
			filterParams: {
			}
		};

		$ngConfirmDefaults.useBootstrap = false;
		$ngConfirmDefaults.boxWidth     = '30%';
		
		angular.element(() => {
			if(typeof $localStorage.currentUser === "undefined"){
				$localStorage.currentUser = _default.currentUser;
			}

			if(typeof $localStorage.currentLicense === "undefined"){
				$localStorage.currentLicense = _default.currentLicense;
			}
		});
	}
})();