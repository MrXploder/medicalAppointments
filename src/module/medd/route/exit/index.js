(function(){
	angular
	.module('angularApp')
	.controller('exitController', exitController);

	exitController.$inject = ["userAuthentication", "$location", "$rootScope", "$localStorage"];

	function exitController(userAuthentication, $location, $rootScope, $localStorage){
		userAuthentication
		.logOut({token: $localStorage.currentUser.token})
		.$promise
		.then((response) => {
			$localStorage.currentUser = {id: null, name: null, token: null};
			$rootScope.$evalAsync(() => { $location.path("/login"); });
		});
	}
})();