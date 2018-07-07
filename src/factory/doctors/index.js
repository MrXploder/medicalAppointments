(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Doctors', doctors);

	doctors.$inject = ['$resource', '$localStorage'];

	function doctors($resource, $localStorage){
		return $resource("/server/restapi/doctors.php",{},{
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
	};
})();