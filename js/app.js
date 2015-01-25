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
    otherwise({
      redirectTo: '/list'
    });

  }]);

})();
