angular.module('sched.days', [])

.controller('daysController', function ($scope){
  $scope.table = {
    days: ['monday', 'tuesday', 'wednesday', 'thursday'],
  }

});