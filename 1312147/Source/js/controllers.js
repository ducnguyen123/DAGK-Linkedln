var nameSpace = angular.module("ProfileApp", []);

nameSpace.controller('Extra-info',['$scope','$http', function($scope, $http)
		{    
			$http.get('js/profile.json').success(function(res){
				$scope.profile = res.Test;
				$scope.background = res.Background;
				$scope.info = res.Info;
				$scope.expp = res.Experience;
				$scope.edu = res.Education;
				$scope.pj = res.Project;

				
				$scope.myFunc = function(){
					$scope.editProfile = true;
					  
				};
				
				
				$scope.mySave = function() {
					$scope.editProfile = false;
					$scope.editBG = false;
					$scope.editE = false;
					$scope.editEd = false;
					$scope.editEd2 = false;
					$scope.editEd3 = false;
					$scope.editEd4 = false;
					$scope.editP = false;
				}

				$scope.myFuncBG = function () {
					$scope.editBG = true;
				}
				
				$scope.myFuncE = function () {
					$scope.editE = true;
				}
				
				$scope.myFuncEd = function () {
					$scope.editEd = true;
				}

				$scope.myFuncEd2 = function () {
					$scope.editEd2 = true;
				}
				$scope.myFuncEd3 = function () {
					$scope.editEd3 = true;
				}
				$scope.myFuncEd4 = function () {
					$scope.editEd4 = true;
				}
				$scope.myFuncP = function () {
					$scope.editP = true;
				}
				

			}); 

		}]
);

