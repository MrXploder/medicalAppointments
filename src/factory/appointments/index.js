(function(){
	'use strict';
	angular
	.module('angularApp')
	.factory('Appointments', appointments);

	appointments.$inject = ['$resource', '$localStorage'];

	function appointments($resource, $localStorage){
		return $resource("/server/restapi/appointments.php",{},{
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
