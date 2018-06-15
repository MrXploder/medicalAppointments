(function(){
	'use strict';
	
	angular
		.module('angularApp')
		.factory('Doctors', doctors);

	doctors.$inject = ["$resource"];

	function doctors($resource){
		return $resource("/server/restapi/doctors.php",{});
	};
})();