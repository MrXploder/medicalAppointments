(function(){
	angular
	.module('angularApp')
	.controller('exitController', exitController);

	exitController.$inject = ["userAuthentication", "$location", "$timeout", "$localStorage"];

	function exitController(userAuthentication, $location, $timeout, $localStorage){
		userAuthentication.logOut({token: $localStorage.currentUser.token}).$promise.then(function success(response){
			$localStorage.currentUser = {id: null, name: null, token: null};
				$timeout(function(){$location.path("/login")},0);
		});
	}
})();