var mivo = angular.module('mivo',[]);

mivo.controller('mainController',['$scope','$http',function($scope,$http){
	$scope.fetch = function(){
		console.log($scope.searchTerm);
		$http.get('http://www.omdbapi.com/?t='+$scope.searchTerm+'&y=&plot=short&r=json')
			 .success(function(data){
			 	$scope.movie = data;
			 });
	}
}]);