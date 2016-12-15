"use strict"

angular.module("courseview.common.datepicker", [])
    .directive('datePicker', [function(){
        return {
            templateUrl : 'app/common/directives/datepicker/datePicker.html',
            controller  : function($scope, $element){
                console.log($scope.time);
                $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                $scope.test = ["2", "12", "wale", "hello"];
                $scope.dayTimes = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
            }
        }
    }]);