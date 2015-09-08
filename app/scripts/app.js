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
  .controller('HeaderController',function($scope, $location)
  {
    $scope.isActive = function(viewLocation){
      return viewLocation === $location.path();
      console.log(viewLocation);
      console.log($location.path());
    };

  })
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
  })
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});



/////////////////////////////////////////////////////
//$(document).ready(function() {
//    $(".header li").on("click", function() {
//        $(".header li").removeClass("active");
//        $(this).addClass("active");
//    });
//});
function HeaderController($scope, $location)
{
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}
