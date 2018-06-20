(function(){
	'use strict';
	
	angular
		.module('angularApp')
		.factory('Operators', operators);

	operators.$inject = ['$resource', '$localStorage'];

	function operators($resource, $localStorage){
		return $resource("/server/restapi/operators.php",{},{
			update:{
				method: "POST",
				headers: { "X-Http-Method-Override": "PUT" }
			},
			create:{
				method: "POST",
			},
			delete: {
				method: "GET",
				headers: { "X-Http-Method-Override": "DELETE" }
			}
		});
	}
})();