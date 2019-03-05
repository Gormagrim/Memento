var angularjs = angular.module('angularjs', ['ngRoute']);
angularjs.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'view/html.html',
    controller: 'htmlCtrl'
  })
  .when('/oscaro', {
    templateUrl: 'view/oscaro/oscaro.html',
    controller: 'oscaroCtrl',
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
