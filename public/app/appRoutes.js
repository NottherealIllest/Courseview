angular.module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.when("/", "");
      $urlRouterProvider.otherwise('');
        
        $stateProvider.state('index', {
            url         : '',
            templateUrl : 'views/home.html'
        })
		
		//school states
        .state('school', {
			abstract 	: true,
            url         : '/schools',
            templateUrl : 'views/schools.html'
        })
		.state('school.home', {
			url 	    : '',
			templateUrl : 'views/schools.home.html'
		})
		.state('school.college', {
			url			: '/:schoolId/colleges',
			templateUrl : 'views/school.colleges.html'
		})
		.state('school.department', {
			url			: '/:collegeId/departments',
			templateUrl : 'views/school.college.departments.html'
		})
		.state('school.programme', {
			url			: '/:departmentId/programmes',
			templateUrl : 'views/school.college.department.programmes.html'
		})
		
		
		//course states
        .state('course', {
            abstract    : true,
            url         : '/course',
            templateUrl : 'views/course.html'
        })
        .state('course.detail', {
            url         : '/:courseId',
            templateUrl : 'views/course.detail.html'
        })
        .state('school.timetable', {
            url         : '/:programmeId/courses/:level',
            templateUrl : 'views/course.timetable.html'
        });
    }]);