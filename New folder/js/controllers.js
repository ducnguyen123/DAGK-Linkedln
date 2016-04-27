var nameSpace = angular.module("ProfileApp", []);



nameSpace.controller('Extra-info',['$scope','$http', function($scope, $http)
		{    
			$http.get('js/profile.json').success(function(res){
				$scope.profile = res.Test;
				$scope.Summary = res.Summary;
			}); 

		}]
);