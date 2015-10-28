"use strict"

angular.module("courseview.courseModal", ['courseview.common.datepicker']).controller("courseEditModalController", ['$scope', '$modalInstance', 'course', function($scope, $modalInstance, mainCourse){
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
        $modalInstance.close($scope.course);
    };
    
    $scope.cancel = function(){
        mainCourse.coursecode = oldCourse.coursecode;
        mainCourse.coursename = oldCourse.coursename;
        mainCourse.color = oldCourse.color;
        mainCourse.times = oldCourse.times;
        $modalInstance.dismiss('cancel');
    }
}]);