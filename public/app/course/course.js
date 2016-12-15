"use strict"

angular.module('courseview.course', [])
    .controller('CourseController', ['$scope', function($scope) {
        $scope.start = 1;
        $scope.title = "Course View 2";
    }]);