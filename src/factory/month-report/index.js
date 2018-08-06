(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('monthReport', monthReport);

	monthReport.$inject = ['$resource'];

	function monthReport($resource){
		const Resource = $resource("/server/restapi/month-report.php", {}, {
			create: {
				method: "POST",
			},
			read: {
				method: "GET",
				isArray: true,
			},
			update: {
				method: "PUT",
			},
			delete: {
				method: "DELETE",
			},
		});

		Resource.prototype.$save = function(){
			if(this.id) {
				return this.$update();
			}
			else {
				return this.$create();
			}
		};

		function _find(_id){
			return Resource.get(_id).$promise;
		}

		return {
			find: _find,
			resource: Resource,
		}
	}
})();