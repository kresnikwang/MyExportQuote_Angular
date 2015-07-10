'use strict';

/**
 * @ngdoc overview
 * @name myexportquoteApp
 * @description
 * # myexportquoteApp
 *
 * Main module of the application.
 */
angular
  .module('myexportquoteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/guides/:id',{
  		controller: 'GuideController',
    	templateUrl: 'views/guide.html'
	  })
      .when('/freight', {
        templateUrl: 'views/freight.html',
        controller: 'FreightCtrl'
      })
	  .when('/package', {
        templateUrl: 'views/package.html',
        controller: 'PackageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  
/////////////////////////////////////////////////////
$(document).ready(function() {
    $(".header li").on("click", function() {
        $(".header li").removeClass("active");
        $(this).addClass("active");
    });
});
