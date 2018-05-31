(function(){
	'use strict';
	angular
		.module('angularApp')
		.factory('Patients', patients);

	patients.$inject = ["$resource"];

	function patients($resource){
		return $resource("/server/restapi/patients.php",{});
	};
})();