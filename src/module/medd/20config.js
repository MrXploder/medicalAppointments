(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(httpProvider);

	httpProvider.$inject = ['$httpProvider'];
	
	function httpProvider($httpProvider) {
		$httpProvider.interceptors.push('preventTemplateCache');
	}
})();

(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(routeProvider);

	routeProvider.$inject  = ["$routeProvider"];
	defaultResolve.$inject = ["userAuthentication", "$timeout", "$location", "$localStorage"];
	loginResolve.$inject 	 = ["userAuthentication", "$rootScope", "$location", "$localStorage"];

	function routeProvider($routeProvider){
		$routeProvider
		.when("/firstTime", {
			templateUrl: "/src/module/medd/route/firstTime/template.html",
			controller: "firstTimeController",
			controllerAs: "ftc",
		})
		.when("/home", {
			templateUrl: "/src/module/medd/route/home/template.html",
			controller: "homeController",
			controllerAs: "hmc",
			resolve: { 
				initialData: defaultResolve,
			},
		})
		.when("/login", {
			controller: "loginController",
			controllerAs: "lg",
			template: " ",
			resolve: { isLoggedIn: loginResolve },
		})
		.when("/exit",{
			controller: "exitController",
			template: " ",
		})
		.when("/viewTickets", {
			controller: "viewTicketsController",
			controllerAs: "vt",
			templateUrl : "/src/module/medd/route/viewTickets/template.html",
			resolve: { isLoggedIn: defaultResolve	},
		})
		.when("/createTickets", {
			controller: "createTicketsController",
			controllerAs: "ct",
			templateUrl: "/src/module/medd/route/createTickets/template.html",
			resolve: { isLoggedIn: defaultResolve },
		})
		.otherwise({
			redirectTo: "/home",
		});
	};

	function defaultResolve(userAuthentication, $timeout, $location, $localStorage){
		userAuthentication
		.isLoggedIn({token: $localStorage.currentUser.token})
		.$promise
		.then(function success(response){
			$timeout(function(){
				if($localStorage.currentLicense.status !== "pristine"){
					$location.path("/firstTime");
				}
			},0);
		})
		.catch(function error(response){
			$timeout(function(){$location.path("/login")},0);
		}); 
	};

	function loginResolve(userAuthentication, $rootScope, $location, $localStorage){
		userAuthentication
		.isLoggedIn({token: $localStorage.currentUser.token})
		.$promise
		.catch(function error(response){
			$('#apps-side-nav').hide("fast");
			$("#login-side-nav").show("slow").css({left: "38%"});
		}); 
	};
})();