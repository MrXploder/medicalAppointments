(function(){
	'use strict';

	angular
		.module('angularApp')
		.factory('Patients', patients);

	patients.$inject = ['$resource', '$localStorage'];

	function patients($resource, $localStorage){
		return $resource("/server/restapi/patients.php",{},{
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