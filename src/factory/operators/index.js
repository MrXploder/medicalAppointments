(function(){
	'use strict';
	
	angular
		.module('angularApp')
		.factory('Operators', operators);

	operators.$inject = ['$resource', '$localStorage'];

	function operators($resource, $localStorage){
		return $resource("/server/restapi/operators.php",{});
	};
})();
