var app = angular.module("studentApp", []);
app.controller("StudentController", function ($scope, $http) {
  $scope.students = [];
  $scope.newStudent = {};

  // Fetch students
  $scope.getStudents = function () {
    $http.get("http://localhost:3000/students").then(function (response) {
      $scope.students = response.data;
    });
  };

  // Add student
  $scope.addStudent = function () {
    $http
      .post("http://localhost:3000/students", $scope.newStudent)
      .then(function (response) {
        $scope.students.push(response.data);
        $scope.newStudent = {};
      });
  };

  // Delete student
  $scope.deleteStudent = function (id) {
    $http.delete("http://localhost:3000/students/" + id).then(function () {
      $scope.getStudents();
    });
  };

  // Initial Fetch
  $scope.getStudents();
});
