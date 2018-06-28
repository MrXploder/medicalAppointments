(function(){
	'use strict';
	
	angular
	.module('angularApp')
	.factory('Reminders', reminders);

	reminders.$inject = ['$resource'];

	function reminders($resource){
		return $resource("/server/restapi/reminders.php",{},{
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
