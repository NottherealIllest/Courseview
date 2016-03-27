"use strict"

angular.module("courseview.coursecell", [])
    .directive('courseCell', ['$mdDialog', 'courseService', 'notify', function($modal, courseService, notify){
        return {
            scope : {
                course : '='
            },
            templateUrl : 'app/course/directives/courseCell.html',
            restrict : 'E',
            controller : function($scope, $element, $attrs){
                $scope.isValidCourse = function(course){
                    if(course.coursename !== undefined || course.coursename != null)
                        return true;
                    return false;
                }
                
                $scope.open = function(){
                    var $modalInstance = $modal.show(
                        {
                            templateUrl: 'views/course.create.modal.html',
                            controller: 'courseEditModalController',
                            clickOutsideToClose: true,
                            openFrom: "left",
                            closeTo: "right",
                            fullscreen: true,
                            resolve: {
                                course: function(){
                                    return $scope.course;
                                }
                            }
                        }
                    );
                    
                    $modalInstance.then(function(course){
                        courseService.updateCourse(course._id, course).
                            success(function(data){
                                notify('Course Updated');
                            })
                            .error(function(error, status){
                                notify("Error Update:"+error);
                            });
                        
                        //$scope.course = course;
                    }, function(){
                    });
                }
            }
        }
    }]);