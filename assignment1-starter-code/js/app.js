
var myapp = angular.module('LunchCheck', []);

myapp.controller('LunchCheckController', function($scope){

  // $scope.name = 'World';
  $scope.post = {postId: null};
  $scope.getById = function (id) {
        var val = id.split(",")
        if(val.length > 3){
			$scope.post = {res: "Too much!"};
        }
        else {
        	$scope.post = {res: "Enjoy!"};
        }
        //$scope.post = {postId: id};
        
    };


});
myapp.$inject = ['$scope'];