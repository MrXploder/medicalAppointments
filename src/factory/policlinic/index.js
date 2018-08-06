(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Policlinic', Policlinic);

	Policlinic.$inject = ['$resource'];

	function Policlinic($resource){
		const Resource = $resource("/server/restapi/policlinic/", {}, {
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
		}

		function _find(_q){
			return Resource.query(_q).$promise;
		}

		return {
			find: _find,
			resource: Resource,
		}
	}
})();