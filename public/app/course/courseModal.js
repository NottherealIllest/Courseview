"use strict"

angular.module("courseview.courseModal", ['courseview.common.datepicker']).controller("courseEditModalCtrl", ['$scope', '$modalInstance', 'course', function($scope, $modalInstance, mainCourse){
    var oldCourse = angular.copy(mainCourse);
    $scope.course = mainCourse;
    
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