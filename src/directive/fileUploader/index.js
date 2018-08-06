(function() {
  'use strict';

  angular
  .module('angularApp')
  .directive('fileUploader', fileUploader);

  function fileUploader(){
    return {
      scope: true,        //create a new scope
      link: function (scope, el, attrs) {
        el.bind('change', function (event) {
          var files = event.target.files;
          for (var i = 0; i < files.length; i++) {
            scope.$emit("fileEvent", { file: files[i], target: event.target });
          }
        });
      }
    }
  }
})();