// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.middleName = "Joe";
    $scope.lastName = "Doe";
});

app.controller('AppCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});


