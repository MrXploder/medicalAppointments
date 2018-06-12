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
				filterByApplicant: '', 
				filterByClient: '-1',
				filterCompletedOnes: false,
				pagesToShow: 5,
				itemsPerPage: 5,
				searchTerm: '',
				sortBy: 'id',
				sortReverse: false,
			}
		};

		angular.element(() => {
			if(typeof $localStorage.currentUser === "undefined"){
				$localStorage.currentUser = _default.currentUser;
			}

			if(typeof $localStorage.currentLicense === "undefined"){
				$localStorage.currentLicense = _default.currentLicense;
			}

			if(typeof $localStorage.viewTicketsParams  === "undefined"){
				$localStorage.viewTicketsParams = _default.filterParams;
			}
		});
	}
})();