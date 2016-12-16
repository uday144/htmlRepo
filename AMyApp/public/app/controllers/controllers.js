// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("myApp");

app.controller('myCtrl', function($scope, $http) {
    $scope.firstName = "John";
    $scope.middleName = "Uday";
    $scope.lastName = "Doe";
		//common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //get all persone
    	var onPersonGetCompleted = function(response){
    		$scope.persons = response.data;
            console.log($scope.persons);
    	}
     var refresh = function(){
        	$http.get('/persons')
        		.then(onPersonGetCompleted, onError);
        	console.log('Response received...');
        }

    refresh();
});

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

   $scope.firstName = "John";
    $scope.middleName = "Uday";
    $scope.lastName = "Doe";
    console.log("Adding.............");
   
   $scope.addContact = function(person) {
  console.log($scope.person);
  $http.post('/persons', $scope.person).success(function(response) {
    console.log(response);
    
  });
};
 
 

}]);
