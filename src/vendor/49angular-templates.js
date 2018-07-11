angular.module("ngTemplates", ["server/dummy.html"]);

angular.module("server/dummy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("server/dummy.html",
    "");
}]);
