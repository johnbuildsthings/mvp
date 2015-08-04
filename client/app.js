var app = angular.module('sched', ['sched.title']);



app.controller('appController', function ($scope) {
  $scope.title = 'M3AAWG';
});

app.controller('timeTableController', function ($scope) {
  $scope.table = {
    times: [],
    height: 0,
  };

  $scope.buildTimeArray = function(start, end){
    //assumes start is am and end is pm i.e. 800, 1930
    var results = [];
    var index = start;
    while(index <= end){
      if(index%50 === 0){
        results.push(index.toString());
        index += 30;
      }else{
        results.push(index.toString());
        index += 70;
      }
    }
    return results;
  };

  $scope.table.times = $scope.buildTimeArray(800, 1930);
  $scope.table.height = (100 / $scope.table.times.length);

});

// .config(function($routeProvider){
//   $routeProvider
//   .when('/', {
//     templateUrl: 'views/title.html',
//     controller: 'titleController'
//   })
// })