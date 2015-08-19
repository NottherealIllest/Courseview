angular.module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.when("/", "");
      $urlRouterProvider.otherwise('');
        
        $stateProvider.state('index', {
            url         : '',
            templateUrl : 'views/home.html'
        })
        .state('timetable', {
            url         : 'timetable',
            templateUrl : 'views/timetable.html'
        })
        .state('course', {
            abstract    : true,
            url         : '/course',
            templateUrl : 'views/course.html'
        })
        .state('course.create', {
            url         : '/create',
            templateUrl : 'views/course.create.html'
        })
        .state('course.detail', {
            url         : '/:courseId',
            templateUrl : 'views/course.detail.html'
        })
        .state('course.list', {
            url         : '/list',
            templateUrl : 'views/course.list.html'
        })
        .state('course.choose', {
            url         : '/choose',
            templateUrl : 'views/course.choose.html'
        })
        .state('course.timetable', {
            url         : '',
            templateUrl : 'views/course.timetable.html'
        })
        .state('schools', {
            url        : 'schools',
            templateUrl : 'views/schools.html'
        });
    }]);