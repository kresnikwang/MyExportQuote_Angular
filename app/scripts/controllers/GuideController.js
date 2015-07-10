'use strict';

/**
 * @ngdoc function
 * @name myexportquoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myexportquoteApp
 */


angular.module('myexportquoteApp')
  .controller('GuideController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('scripts/services/'+$routeParams.id+'.json').success(function(data){
    $scope.detail = data;
  });
}]);