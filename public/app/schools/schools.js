"use strict";

var schoolModule = angular.module('courseview.school', []);


	schoolModule.controller('SchoolController', ['$scope', '$stateParams', 'schoolService', function ($scope, $stateParams, schoolService) {
		
		$scope.schools = [];
		schoolService.getSchools()
			.then(function (response) {
			
				console.log("schools:", response.data)
				$scope.schools = response.data;

			}, function (error) {
				console.log("Error:", error);
			});
		
		
	}]);

	schoolModule.controller('CollegeController', ['$scope', '$stateParams', 'schoolService', function ($scope, $stateParams, schoolService) {
		
		$scope.colleges = [];
		$scope.universityId = $stateParams.schoolId;
		schoolService.getSchoolColleges($scope.universityId)
			.then(function (response) {
				
				console.log("Colleges", response);
				$scope.colleges = response.data;
			
			}, function (error) {
				console.log(error);
			});
		
	}]);

	schoolModule.controller('DepartmentController', ['$scope', '$stateParams', 'schoolService', function ($scope, $stateParams, schoolService) {
		
		$scope.departments = [];
		$scope.collegeId = $stateParams.collegeId;
		schoolService.getCollegeDepartments($scope.collegeId)
			.then(function (response) {
				
				console.log("Departments", response);
				$scope.departments = response.data;
			
			}, function (error) {
				console.log(error);
			});
		
	}]);

	schoolModule.controller('ProgrammeController', ['$scope', '$stateParams', 'schoolService', '$state', function ($scope, $stateParams, schoolService, $state) {
		
		$scope.programmes = [];
		$scope.departmentId = $stateParams.departmentId;
		$scope.chosen_level = "100";
		
		schoolService.getDepartmentProgrammes($scope.departmentId)
			.then(function (response) {
				
				console.log("Programmes", response);
				$scope.programmes = response.data;
			
			}, function (error) {
				console.log(error);
			});
		
		$scope.show_timetable = function(programmeId, chosen_level){
			
			var timetableParams = {
				"programmeId" : programmeId,
				"level" : chosen_level
			};
			
			$state.go('school.timetable', timetableParams);
		}
		
	}]);

	