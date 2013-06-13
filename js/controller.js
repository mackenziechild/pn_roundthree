var controllers = angular.module('pn.controllers', []);

controllers.controller('signupController', function($scope, $http) {
  $scope.form = {course: $scope.course, name: $scope.name, email: $scope.email, hire: $scope.hire};
  $scope.submitForm = function() {
    $http.post(
      "contact.php",
      $.param($scope.form), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).success(function(responseData) {
      console.log(responseData);
      angular.element('#signupForm').fadeOut('slow');
      angular.element('.success').fadeIn('slow');
      });
    $http.post(
      "http://respondto.it/pn_frontend_test",
      $.param($scope.form), {
      dataType: "json",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  };
})