angular.module('courseview.school')
    .factory('schoolService', ['$http', function($http){
        var dbs = "http://localhost:3000/api";
        return {
            getSchools: function () {
                return $http.get(dbs + '/university');
            },
            
            getSchoolColleges: function (schoolId) {
                return $http.get(dbs + '/university/' + schoolId + '/colleges');
            },
            
            getCollegeDepartments: function (collegeId) {
                return $http.get(dbs + '/college/' + collegeId + '/departments');
            },
            
            getDepartmentProgrammes: function (departmentId) {
                return $http.get(dbs + '/department/' + departmentId + '/programmes');
            },
			
			getProgrammeCourses: function (programmeId) {
                return $http.get(dbs + '/programme/' + programmeId + '/courses');
            }
        }
    }]);