"use strict"

angular.module("courseview.common.datepicker", [])
    .directive('datePicker', [function(){
        return {
            templateUrl : 'app/common/directives/datepicker/datePicker.html'
        }
    }]);