"use strict"

angular.module("courseview.courseModal", ['courseview.common.datepicker']).controller("courseEditModalCtrl", ['$scope', '$modalInstance', 'course', function($scope, $modalInstance, course){
    $scope.course = course;
    $scope.course.level = 400;
    $scope.save = function(){
        console.log($scope.course);
        $modalInstance.close($scope.course);
    };
    
    $scope.cancel = function(){
        console.log(course);
        $modalInstance.dismiss('cancel');
    }
}]);