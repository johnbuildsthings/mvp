angular.module('sched.day', [])

.controller('dayLayoutController', function ($scope){
  $scope.table = {
    date: 'monday',
    rooms: ['westHall', 'eastWing', 'mainHall'],
    westHall: [{start: '0px', duration: '45px', title: 'breakfast'}],
    eastWing: [{start: '60px', duration: '100px', title: 'HowTo'}],
    mainHall: [{start: '0px', duration: '45px', title: 'breakfast'},
      {start: '50px', duration: '100px', title: 'HowTo'}]
  };
});