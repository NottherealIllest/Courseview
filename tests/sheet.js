<option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            
            
        ,
        
            controller  : function($scope, $element, $attr){
                $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                $scope.dayTimes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            }
            
            ng-options="day for day in days"\
            
            "times": [
        {
            "coursetime": "7",
            "courseday": "Tuesday",
            "courselocation": "Room 4"
        },
        {
            "coursetime": "7",
            "courseday": "Thursday",
            "courselocation": "Room 4"
        }