(function(){
	angular
	.module('angularApp')
	.controller('loginController', loginController);

	loginController.$inject = ["userAuthentication", "$location", "$timeout", "$scope", "$localStorage"];

	function loginController(userAuthentication, $location, $timeout, $scope, $localStorage){
		var lg = this;

		$("#login-side-nav").css({left: 0});
		$("#apps-side-nav").hide("fast");
		$("#login-side-nav").animate({"left": "38%"}, "fast");
		$("#login-side-nav").show("slow");
		$("footer").css({paddingLeft: 0});

		/* this event comes from the main controller called "mainController" that handles the sidenavs */
		$scope.$on('attemptToLogIn', (event, logInData) => {
			userAuthentication.logIn(logInData)
			.$promise
			.then(response => {
				$localStorage.currentUser = response.user;
				$("footer").animate({"paddingLeft": 300}, "fast");
				$.when($("#login-side-nav").animate({"left":"0%"}, "slow")).done(function(){
					$.when($('#apps-side-nav').show("slow")).done(function(){
						$('.button-collapse').sideNav({menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true,});
					});
					$("#login-side-nav").hide("slow");
					Materialize.toast('Bienvenido '+ response.user.name, 5000, 'green');
					$location.path("/home");
				});
			});
		});
	}
})();