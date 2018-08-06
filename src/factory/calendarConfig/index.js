(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('CalendarConfig', CalendarConfig);

	CalendarConfig.$inject = ['$resource'];

	function CalendarConfig($resource){
		const Resource = $resource("/server/restapi/calendar-config/", {}, {
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
			return Resource.query({_id}).$promise;
		}

		return {
			find: _find,
			resource: Resource,
		}
	}
})();