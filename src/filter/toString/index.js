(function() {
	'use strict';

	angular
	.module('angularApp')
	.filter('toString', toString);

	function toString(){
		return function(item){
			if(_.isNull(item)){
				return "";
			}
			else{
				return item.toString();
			}
		}
	}
})();