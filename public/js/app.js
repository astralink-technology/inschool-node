'use strict';

// Declare app level module which depends on filters, and services

angular.module('eyexApp', [
    'ngRoute'
   , 'ui.bootstrap'
    , 'duScroll'
   , 'inschoolApp.validationServices'
   , 'inschoolApp.dateTimeServices'
   , 'inschoolApp.stringServices'
   , 'inschoolApp.loadServices'
   , 'inschoolApp.countryServices'
   , 'inschoolApp.dashboardController'
   , 'inschoolApp.attendanceListController'
   , 'inschoolApp.calendarController'
   , 'inschoolApp.myClassesController'
   , 'inschoolApp.mySchoolController'
   , 'inschoolApp.profileController'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
}).
run(function($rootScope, $http){


    });
