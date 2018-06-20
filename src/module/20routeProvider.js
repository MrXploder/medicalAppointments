(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(routeProvider);

	routeProvider.$inject  = ["$routeProvider"];
	

	function routeProvider($routeProvider){
		$routeProvider
		.when("/firstTime", {
			templateUrl: "src/module/route/firstTime/template.html",
			controller: "firstTimeController",
			controllerAs: "ftc",
		})
		.when("/home", {
			templateUrl: "src/module/route/home/template.html",
			controller: "homeController",
			controllerAs: "hmc",
			resolve: { preCondition: common},
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
			templateUrl: "src/module/route/newAppointment/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/dailyStatistics", {
			controller: "dailyStatisticsController",
			controllerAs: "dsc",
			templateUrl: "src/module/route/dailyStatistics/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/patientControlList", {
			controller: "patientControlListController",
			controllerAs: "pclc",
			templateUrl: "src/module/route/patientControlList/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/monthlyReport", {
			controller: "monthlyReportController",
			controllerAs: "mrc",
			templateUrl: "src/module/route/monthlyReport/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/manageDoctors",{
			controller: "manageDoctorsController",
			controllerAs: "mdc",
			templateUrl: "src/module/route/manageDoctors/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/managePatients",{
			controller: "managePatientsController",
			controllerAs: "mpc",
			templateUrl: "src/module/route/managePatients/template.html",
			resolve: { preCondition: authorized },
		})
		.when("/manageOperators",{
			controller: "manageOperatorsController",
			controllerAs: "moc",
			templateUrl: "src/module/route/manageOperators/template.html",
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
		.then(function(){
			if($localStorage.currentLicense.status !== "pristine"){
				$rootScope.$evalAsync(function(){ $location.path("/firstTime"); });
			}
		})
		.catch(function(){
			$rootScope.$evalAsync(function(){ $location.path("/login"); });
		}); 
	};

	authorized.$inject = ["userAuthentication", "$rootScope", "$location", "$localStorage"];
	function authorized(userAuthentication, $rootScope, $location, $localStorage){
		userAuthentication
		.isLoggedIn({token: $localStorage.currentUser.token})
		.$promise
		.then(function(response){
			if($localStorage.currentLicense.status !== "pristine"){
				$rootScope.$evalAsync(function(){ $location.path("/firstTime"); });
			}
		})
		.catch(function(response){
			$rootScope.$evalAsync(function(){ $location.path("/login"); });
		}); 
	};
})();