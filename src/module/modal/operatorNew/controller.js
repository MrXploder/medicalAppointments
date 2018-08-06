(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('operatorNewController', operatorNewController);

	operatorNewController.$inject = ["$scope"];

	function operatorNewController($scope){
		let onc = this;

		onc.form 				= {files: [], model: {}};
		onc.saveAndExit = saveAndExit;

		function saveAndExit(){
			$scope.confirm(onc.form);
		}

		$scope.$on('fileEvent', function(event, args){
			$scope.$apply(function(){
				// onc.form.files.push(args.file);
				onc.form.files[0] = args.file;
				let render = new FileReader();
				render.readAsDataURL(args.target.files[0]);
				render.onload = function(e){
					$('#imgpreview').attr('src', e.target.result);
				}
			});
		});
	}
})();