"use strict"

angular.module("courseview.courseModal", ['courseview.common.datepicker']).controller("courseEditModalCtrl", ['$scope', '$modalInstance', 'course', function($scope, $modalInstance, course){
    $scope.course = course;
    
    $scope.save = function(){
        //$modalInstance
    
    };
    
    $scope.cancel = function(){
        console.log(course);
        $modalInstance.dismiss('cancel');
    }
}]);