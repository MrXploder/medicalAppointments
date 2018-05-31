(function(){
	'use strict';
	angular
	.module('angularApp')
	.factory('Appointments', appointments);

	appointments.$inject = ['$resource', '$localStorage'];

	function appointments($resource, $localStorage){
		return $resource("/server/restapi/appointments.php",{},{
			update:{
				method: 'PUT',
			},
			create:{
				method: 'POST',
			}
		});
	};
})();
