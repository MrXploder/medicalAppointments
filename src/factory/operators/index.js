(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Operators', operators);

	operators.$inject = ['$resource', '$localStorage'];

	function operators($resource, $localStorage){
		return $resource("/server/restapi/operators.php",{},{
			update:{
				method: "PUT",
			},
			create:{
				method: "POST",
				headers: { 'Content-Type': undefined },
				transformRequest: function (data){
					var formData = new FormData();
					formData.append("model", angular.toJson(data.model));
					for (var i = 0; i < data.files.length; i++) {
						formData.append("file" + i, data.files[i]);
					}
					return formData;
				},
			},
			delete: {
				method: "DELETE",
			}
		});
	}
})();