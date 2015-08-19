angular.module('courseview.course')
    .factory('courseService', ['$http', function($http){
        var dbs = "http://localhost:3000/api";
        return {
            getCourses: function() {
                return $http.get(dbs + '/course');
            },
            
            createCourse: function(course) {
                return $http.post(dbs + '/course', course);
            },
            
            updateCourse: function(id, course){
                return $http.put(dbs + '/course/' + id, course);
            },
            
            deleteCourse: function(id) {
                return $http.delete('/course/'+id);
            }
        }
    }]);