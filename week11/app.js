var app = angular.module("EmployeeApp", []);

app.controller("EmployeeController", function ($scope, $http) {
  // Define the URL of the JSON file on the server
  var url = "employees.json";

  // Fetch data using $http service
  $http
    .get(url)
    .then(function (response) {
      // Assign the response data to the scope variable
      $scope.employees = response.data;
    })
    .catch(function (error) {
      console.error("Error fetching employee data:", error);
    });
});
