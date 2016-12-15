angular.module('courseview.course')
    .factory('courseService', ['$http', function($http){
		
		if(window.location.host.match(/localhost/)){
			
			var dbs = "http://localhost:3000/api";
			
		}else{
			
			var dbs = "https://courseview.herokuapp.com/api";
		}
		
        return {
            getCourses: function(programmeId, level) {
                return $http.get(dbs + '/programme/' + programmeId + '/courses/' + level);
            },
            
            createCourse: function(course) {
                return $http.post(dbs + '/course', course);
            },
            
            updateCourse: function(id, course){
                return $http.put(dbs + '/course/' + id, course);
            },
            
            deleteCourse: function(id) {
                return $http.delete('/course/'+id);
            },
            
            updateTimetable: function(course){
                return ;
            }
        }
    }]);