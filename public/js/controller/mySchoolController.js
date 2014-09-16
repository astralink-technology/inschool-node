'use strict';

/* Controllers */

angular.module('inSchoolApp.mySchoolController', []).
  controller('mySchoolController', ['$scope', '$http', function ($scope, $http) {
        $('#navbar-myschool').addClass('navbar-active');
  }]);
