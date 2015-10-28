'use strict';

var headers = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayTimes = function () {
    this.Monday = {};
    this.Tuesday = {};
    this.Wednesday = {};
    this.Thursday = {};
    this.Friday = {};
    this.Saturday = {};
};

var times = {
        7 : new dayTimes() ,
        8 : new dayTimes() ,
        9 : new dayTimes() , 
        10: new dayTimes() ,
        11: new dayTimes() ,
        12: new dayTimes() ,
        13: new dayTimes() ,
        14: new dayTimes() , 
        15: new dayTimes() ,
        16: new dayTimes() ,
        17: new dayTimes() ,
        18: new dayTimes() ,
        19: new dayTimes()
};

function course_loop(c){
    var index;
    for(index = 0; index < c.times.length; index++){
        times[c.times[index].coursetime][c.times[index].courseday] = c;
    }
}

function TimetableController($scope, courseService, schoolService, $modal, notify, $stateParams){
    console.log($stateParams);
	
	$scope.headers = headers;
	$scope.courses = [];
	$scope.times = times;
	$scope.title = 'Timetable Controller2';
	
	
	courseService.getCourses($stateParams.programmeId, $stateParams.level)
		.success(function(courses){
			
			
			//check if it is a new timetable without any course yet
			if(courses.length >= 1){
				courses.forEach(course_loop);
				$scope.courses = courses;
			}else{
				$scope.times = new times
			}
		
			$scope.skeleton = {
					"level": $stateParams.level,
					"times": [],
					"programme": $stateParams.programmeId
			};

		})
		.error(function(error){
			$scope.message = error;
			notify("Error Retrieving Courses: " + error);
		});

	$scope.open = function(){
		var $modalInstance = $modal.open({
				animation: true,
				templateUrl: 'views/course.create.modal.html',
				controller: 'courseEditModalController',
				resolve : {
					course: function () {
						return $scope.skeleton;
					}
				}
		});

		$modalInstance.result.then(function (course) {
			courseService.createCourse(course).
			success(function (response) {
				console.log(response);
				$scope.courses.push(response);
				$scope.refresh();
				notify("Course created");
			}).
			error(function(error, status){
				notify("Error creating course:" + error);
			});
		});
	};

	$scope.refresh = function () {
		$scope.courses.forEach(course_loop);
	}
        
}

angular.module('courseview.timetable', ['courseview.courseModal'])
    .controller('TimetableController', ['$scope', 'courseService', 
										'schoolService', '$modal', 'notify', '$stateParams', TimetableController]);