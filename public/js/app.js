'use strict';

// Declare app level module which depends on filters, and services

angular.module('inSchoolApp', [
    'ngRoute'
   , 'ui.bootstrap'
    , 'duScroll'
   , 'inSchoolApp.validationServices'
   , 'inSchoolApp.dateTimeServices'
   , 'inSchoolApp.stringServices'
   , 'inSchoolApp.loadServices'
   , 'inSchoolApp.countryServices'
   , 'inSchoolApp.dashboardController'
   , 'inSchoolApp.attendanceListController'
   , 'inSchoolApp.calendarController'
   , 'inSchoolApp.myClassesController'
   , 'inSchoolApp.mySchoolController'
   , 'inSchoolApp.profileController'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
}).
run(function($rootScope, $http){


    });
