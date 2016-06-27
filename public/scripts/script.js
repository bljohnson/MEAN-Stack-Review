console.log('script.js sourced in');

// create angular app
var testApp = angular.module('testApp', []);

// create controller
testApp.controller('TestController', ['$scope', '$http', function ($scope, $http) { // use $scope which is built into Angular. scope of controller. function uses $scope and calls it $scope. function also uses http
  // test getting user input
  $scope.whatAreWeTryingToDo = function () {
    console.log('in whatAreWeTryingToDo function: ' + $scope.testBinder);
  };
}]);
