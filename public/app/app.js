/**
 * Application Starting Main Module
 * 
 */

angular.
module('CourseView', ['ui.router', 
                      'appRoutes', 
                      'firebase',
                      'ngMaterial',
                      'courseview.home', 
                      'courseview.course',
                      'courseview.timetable', 
                      'courseview.school',
                      'courseview.coursecell', 
                      'courseview.courseModal',
                      'courseview.loginModal', 
                      'courseview.registerModal'])

/**
 *  Created to allow registration of modal for login box
 * 
 */
.controller('AppController', ['$scope', '$mdDialog', function($scope, $mdDialog){
    $scope.isToolbarOpen = true;
    
    $scope.toggleToolbar = function () {
        
        $scope.tbOpen = !$scope.tbOpen;
        return $scope.tbOpen;
    }
    
    $scope.openLoginModal = function(){
        
        $mdDialog.show({
				templateUrl: 'app/login/login.html',
				controller: 'LoginModalController',
                fullscreen: true,
                clickOutsideToClose: true
		});
        
    };
    
    $scope.openRegisterModal = function(){
        
        $mdDialog.show({
				templateUrl: 'app/register/register.html',
				controller: 'RegisterModalController',
                fullscreen: true,
                clickOutsideToClose: true
		});
        
    };
    
}])

.factory('AuthService', ['$rootScope', 'UserService', '$http', function ($rootScope, UserService, $http) {
    return {
        Login: function (credential) {
            ClearCredential();
            
            return $http.post('/api/login', credential);
        },
        
        SetCredential: function (username) {
            
            $rootScope.globals = {
                currentUser: {
                    username: username
                }    
            }
            
//            $cookieStore.put('globals', $rootScope.globals);
        },
        
        ClearCredential: function () {
            $rootScope.globals = {};
//            $cookieStore.remove('globals');
        }
    }
}])

.factory('UserService', ['$http', function ($http) {
    return {
        
        Create: function () {
            
        }
    }
}]);