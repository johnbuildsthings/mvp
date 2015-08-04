angular.module('sched.day', [])

.controller('dayLayoutController', function ($scope){
  $scope.table = {
    date: 'monday',
    rooms: ['westHall', 'eastWing', 'mainHall']
  };
});