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

    var artistDetail = this;
    artistDetail.artists = [];

    $http.get('js/data.json').success(function(data) {
      artistDetail.artists = data;
      artistDetail.whichItem = $routeParams.itemId;
  
      if ($routeParams.itemId > 0) {
        artistDetail.prevItem = Number($routeParams.itemId) - 1;
      } else {
        artistDetail.prevItem = artistDetail.artists.length-1;
      }
    
      if ($routeParams.itemId < artistDetail.artists.length-1) {
        artistDetail.nextItem = Number($routeParams.itemId)+1;
      } else {
        artistDetail.nextItem = 0;
      }

    });

  }]);
    
})();
