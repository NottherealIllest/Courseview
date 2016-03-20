"use strict"

angular.module("courseview.loginModal", []).
    controller("LoginModalController", ['$scope', '$modalInstance', '$firebaseAuth', function($scope, $modalInstance, $firebaseAuth){
        
        var ref = new Firebase("https://flickering-torch-7869.firebaseio.com");
        
        //create instance of auth service
        var auth = $firebaseAuth(ref);
        
        auth.$authWithOAuthPopup("google").then(function(authData){ console.log(authData);}).catch(function(error){ console.log(error);})
    }])
