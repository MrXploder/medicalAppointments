(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory("userAuthentication", userAuthentication);

	userAuthentication.$inject = ["$resource"];

	function userAuthentication($resource){
		return $resource("/server/restapi/auth.php",{},{
			logIn:{
				method: 'POST',
			},
			logOut:{
				method: 'GET',
				params: {
					action: "logout"
				},
			},
			isLoggedIn:{
				method: 'GET',
				params: {
					action: "verify"
				},
			}
		});
	};
})();