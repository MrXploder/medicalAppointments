(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('manageDoctorsController', manageDoctorsController);

	manageDoctorsController.$inject = ["Doctors", "$scope", "ngDialog"];

	function manageDoctorsController(Doctors, $scope, ngDialog){
		var mdc = this;

		mdc.doctors 		 = [];
		mdc.sortBy 		 	 = 'id';
		mdc.searchTerm   = "";
		mdc.sortReverse  = false;
		mdc.itemsPerPage = 10;
		mdc.addDoctor 	 = addDoctor;
		mdc.isAdding     = false;
		mdc.erase        = erase;
		mdc.details      = details;

		activate();

		//////////////////////////////////////

		function activate(){
			Doctors
			.query()
			.$promise
			.then(function(response){
				mdc.doctors = response;
			});
		}

		function addDoctor(){
			mdc.isAdding = true;
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/addDoctor/template.html",
				controller: "addDoctorController",
				controllerAs: "adc",
				showClose: true,
				closeByDocument: true,
				width: "30%",
			})
			.then(function(response){
				Materialize.toast("Exito", 5000, "green");
				Doctors
				.query()
				.$promise
				.then(function(response){
					mdc.doctors = response;
				})
			})
			.finally(function(response){
				mdc.isAdding = false;
			})
		}

		function erase(doctor){
			Doctors
			.delete({id: doctor.id})
			.$promise
			.then(function(response){
				mdc.doctors.splice(mdc.doctors.indexOf(doctor),1);
				Materialize.toast("Borrado", 5000, "red");
			});
		}

		function details(doctor){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/detailsDoctor/template.html",
				controller: "detailsDoctorController",
				controllerAs: "ddc",
				data: doctor,
				showClose: true,
				closeByDocument: true,
				width: "30%"
			})
			.then(function(response){
				Materialize.toast("Exito", 5000, "green");

			})

		}
	}
})();