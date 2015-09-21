restaurantList.controller("RestaurantCtrl", function($scope){
  $scope.restaurants = [];
  // $scope.radio = '';
    $scope.query = '';
  $scope.addRestaurant = function(){
    $scope.restaurants.push({name: $scope.restaurantName,
                             cuisine: $scope.cuisine,
                             location: $scope.location,
                             priceRange: $scope.priceRange});
                             $scope.restaurantName = null;
                             $scope.cuisine = null;
                             $scope.location = null;
                             $scope.priceRange = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };


});
