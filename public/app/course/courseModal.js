"use strict"

angular.module("courseview.courseModal", ['courseview.common.datepicker']).controller("courseEditModalController", ['$scope', '$mdDialog', 'course', function($scope, $mdDialog, mainCourse){
    var oldCourse = angular.copy(mainCourse);
    $scope.course = mainCourse;
    
    $scope.add_date = function(){
        $scope.course.times.push({"coursetime": "", "courseday": "", "courselocation": ""});
    };
    
    $scope.remove_date = function(index){
        console.log(index);
        $scope.course.times.splice(index, index + 1);
    },
    
    $scope.save = function(){
        $mdDialog.hide($scope.course);
    };
    
    $scope.cancel = function(){
        mainCourse.coursecode = oldCourse.coursecode;
        mainCourse.coursename = oldCourse.coursename;
        mainCourse.color = oldCourse.color;
        mainCourse.times = oldCourse.times;
        $mdDialog.cancel('cancel');
    }
}]);