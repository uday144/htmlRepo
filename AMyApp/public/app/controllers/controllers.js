// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("myApp");

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.middleName = "Uday";
    $scope.lastName = "Doe";
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
