(function() {
	'use strict';
	angular
	.module('angularApp')
	.config(indexedDBProvider);

	indexedDBProvider.$inject = ["$indexedDBProvider"];

	function indexedDBProvider($indexedDBProvider){
		/*$indexedDBProvider
		.connection('myIndexedDB')
		.upgradeDatabase(1, function(event, db, tx){
			var objStore = db.createObjectStore('people', {keyPath: 'ssn'});
			objStore.createIndex('name_idx', 'name', {unique: false});
			objStore.createIndex('age_idx', 'age', {unique: false});
		});
		*/
	}
})();