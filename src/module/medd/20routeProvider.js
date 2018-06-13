(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(routeProvider);

	routeProvider.$inject  = ["$routeProvider"];
	

	function routeProvider($routeProvider){
		$routeProvider
		.when("/firstTime", {
			templateUrl: "src/module/medd/route/firstTime/template.html",
			controller: "firstTimeController",
			controllerAs: "ftc",
		})
		.when("/home", {
			templateUrl: "src/module/medd/route/home/template.html",
			controller: "homeController",
			controllerAs: "hmc",
			resolve: { preCondition:  common},
		})
		.when("/login", {
			controller: "loginController",
			controllerAs: "lg",
			template: '<div></div>',
		})
		.when("/exit",{
			controller: "exitController",
			template: '<div></div>',
		})
		.when("/newAppointment", {
			controller: "newAppointmentController",
			controllerAs: "nac",
			templateUrl: "src/module/medd/route/newAppointment/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/dailyStatistics", {
			controller: "dailyStatisticsController",
			controllerAs: "dsc",
			templateUrl: "src/module/medd/route/dailyStatistics/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/patientControlList", {
			controller: "patientControlListController",
			controllerAs: "pclc",
			templateUrl: "src/module/medd/route/patientControlList/template.html",
			resolve: { preCondition: authorized },
		})
		.otherwise({
			redirectTo: "/home",
		});
	};

	common.$inject = ["userAuthentication", "$rootScope", "$location", "$localStorage"];
	function common(userAuthentication, $rootScope, $location, $localStorage){
		userAuthentication
		.isLoggedIn({token: $localStorage.currentUser.token})
		.$promise
		.then(() => {
			if($localStorage.currentLicense.status !== "pristine"){
				$rootScope.$evalAsync(() => { $location.path("/firstTime");	});
			}
		})
		.catch(() => {
			$rootScope.$evalAsync(() => { 
				$location.path("/login"); 
			});
		}); 
	};

	authorized.$inject = ["userAuthentication", "$rootScope", "$location", "$localStorage"];
	function authorized(userAuthentication, $rootScope, $location, $localStorage){
		userAuthentication
		.isLoggedIn({token: $localStorage.currentUser.token})
		.$promise
		.then(response => {
			if($localStorage.currentLicense.status !== "pristine"){
				$rootScope.$evalAsync(() => { $location.path("/firstTime");	});
			}
		})
		.catch(response => {
			$rootScope.$evalAsync(() => { $location.path("/login"); });
		}); 
	};
})();