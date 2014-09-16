'use strict';

/* Controllers */

angular.module('inSchoolApp.dashboardController', []).
  controller('dashboardController', ['$scope', '$http', function ($scope, $http) {
        $('#navbar-dashboard').addClass('navbar-active');
  }]);
