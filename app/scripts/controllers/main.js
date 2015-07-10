'use strict';

/**
 * @ngdoc function
 * @name myexportquoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myexportquoteApp
 */
angular.module('myexportquoteApp')
  .controller('MainCtrl', ['$scope', 'guides', function($scope, guides) {
  guides.success(function(data) {
    $scope.guides = data;
  });
}]);