app.controller("MainController", function($scope){
    $scope.isLoggedIn = false;
    
    $scope
})
app.controller('HomeController', function($scope, $rootScope){
    
  $rootScope.films=[{
  name: 'Cinderella',
  year: 1950
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}, {
  name: 'Fantasia',
  year: 1940
}, {
  name: 'The Jungle Book',
  year: 1967
}, {
  name: 'Sleeping Beauty',
  year: 1959
}, {
  name: 'Pinocchio',
  year: 1940
}, {
  name: 'One Hundred and One Dalmations',
  year: 1961
}, {
  name: 'Bambi',
  year: 1942
}, {
  name: 'Alice in Wonderland',
  year: 1951
}, {
  name: 'Peter Pan',
  year: 1953
}, {
  name: 'The Sword in the Stone',
  year: 1963
}, {
  name: 'Lady and the Tramp',
  year: 1955
}, {
  name: 'Song of the South',
  year: 1946
}, {
  name: 'Steamboat Willie',
  year: 1928
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}]

$rootScope.addFilm = function(newFilm) {
    $rootScope.films.push(newFilm)  
}

$rootScope.removeFilm = function(title) {
    for(var i = 0; i < $rootScope.films.length; i++) {
        if (title === $rootScope.films[i].name) {
            $rootScope.films.splice(i,1)
            $rootScope.success = title + " has been deleted"
            return $rootScope.success
        }
    }
    return "no such title found"
    
}

})



