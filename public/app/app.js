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
//                              'ui.bootstrap',
                              'courseview.courseModal',
                              'courseview.loginModal',
                              'cgNotify']).

/**
 *  Created to allow registration of modal for login box
 * 
 */
controller('AppController', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){
    $scope.isToolbarOpen = true;
    
    $scope.toggleToolbar = function () {
        $scope.tbOpen = !$scope.tbOpen;
        return $scope.tbOpen;
    }
    
    $scope.openLoginModal = function(){
        
//        var $modalInstance = $modal.open({
//				animation: true,
//				templateUrl: 'app/login/login.html',
//				controller: 'LoginModalController'
//		});
        
        var ref = new Firebase("https://flickering-torch-7869.firebaseio.com");
        //create instance of auth service
        var auth = $firebaseAuth(ref);

        auth.$authWithOAuthPopup("google").then(function(authData){ console.log(authData);}).catch(function(error){ console.log(error);})
        
    };
    
}]);