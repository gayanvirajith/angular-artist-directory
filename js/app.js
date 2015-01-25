(function(){
  
  var app = angular.module('ArtistDirectory', [
    'ngRoute',
    'appControllers'
  ]);

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'DirectoryController',
      controllerAs: 'directory'
    }).
    when('details/:itemId', {
      templateUrl: 'partials/details.html',
      controller: 'ArtistDetailController',
      controllerAs: 'artistDetail'
    }).
    otherwise({
      redirectTo: '/list'
    });

  }]);

})();
