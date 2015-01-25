app.controller('DirectoryController', ['$http', function($http) {
    
  var directory = this;
  directory.artists = [];
  this.artistOrder = "name";
  $http.get('js/data.json').success(function(data) {
    directory.artists = data;
  });

}]);
    