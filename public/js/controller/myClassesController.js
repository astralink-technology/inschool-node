'use strict';

/* Controllers */

angular.module('inSchoolApp.myClassesController', []).
  controller('myClassesController', ['$scope', '$http', function ($scope, $http) {
        $('#navbar-my-classes').addClass('navbar-active');
  }]);
