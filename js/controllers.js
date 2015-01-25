(function(){

  var app = angular.module('appControllers', []);

  app.controller('DirectoryController', ['$http', function($http) {
    
    var directory = this;
    directory.artists = [];
    this.artistOrder = "name";
    $http.get('js/data.json').success(function(data) {
      directory.artists = data;
    });

  }]);

  app.controller('ArtistDetailController', ['$http', '$routeParams', 
    function($http, $routeParams) {

    var directory = this;
    directory.artists = [];

    $http.get('js/data.json').success(function(data) {
      directory.artists = data;
      directory.whichItem = $routeParams.itemId;
    });

  }]);
    
})();
