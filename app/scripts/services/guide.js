"use strict"

angular.module('myexportquoteApp').factory('guides', ['$http', function($http) {
  return $http.get('scripts/services/guide.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
