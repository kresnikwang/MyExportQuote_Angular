'use strict';

/**
 * @ngdoc function
 * @name myexportquoteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myexportquoteApp
 */
angular.module('myexportquoteApp')
  .controller('PackageCtrl', function ($scope) {
    $scope.units = [
      {id:1, name:'g'},
      {id:28.35, name:'oz'},
      {id:1000, name:'kg'}]

  });
