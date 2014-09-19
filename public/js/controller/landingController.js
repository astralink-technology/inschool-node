'use strict';

/* Controllers */

angular.module('inSchoolApp.landingController', []).
  controller('landingController', ['$scope', '$http', function ($scope, $http) {

        $scope.loginModal = function(){
            $('#loginModal').modal({
                backdrop: 'static',
                keyboard: true
            });
        }
        $scope.signupModal= function(){
            $('#signupModal').modal({
                backdrop: 'static',
                keyboard: true
            });
        }
        $scope.schoolSignupModal = function(){
            $('#schoolSignupModal').modal({
                backdrop: 'static',
                keyboard: true
            });
        }

        $scope.cancelLogin = function(){
            $('#loginModal').modal('hide');
        }
        $scope.cancelSignup = function(){
            $('#signupModal').modal('hide');
        }
        $scope.cancelSchoolSignup = function(){
            $('#schoolSignupModal').modal('hide');
        }

        $scope.signup = function(){
            alert('signup here');
        }

        $scope.login = function(){
            alert('login here');
        }

        $scope.schoolSignup = function(){
            alert('school signup here');
        }
  }]);
