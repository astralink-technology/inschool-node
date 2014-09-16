'use strict';

/* Controllers */

angular.module('inSchoolApp.calendarController', []).
  controller('calendarController', ['$scope', '$http', function ($scope, $http) {
        $('#navbar-calendar').addClass('navbar-active');
  }]);
