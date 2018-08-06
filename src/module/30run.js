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
	'use strict';

	angular
	.module('angularApp')
	.run(support);

	support.$inject = ["$rootScope", "$localStorage"];

	function support($rootScope, $localStorage){
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

		angular.element(function(){
			if(typeof $localStorage.currentUser === "undefined"){
				$localStorage.currentUser = _default.currentUser;
			}

			if(typeof $localStorage.currentLicense === "undefined"){
				$localStorage.currentLicense = _default.currentLicense;
			}
		});
	}
})();