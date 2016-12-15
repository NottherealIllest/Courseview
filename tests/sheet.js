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
                
                
                

                
var courses = [{coursename: "Intro To Database Management System", 
                "coursecode": "CSC301",
                "level": "300",
                "programme": "Computer Science",
                "department": "Computer Science",
                "college": "COLICT",
                "university": "Bells University",
                color: "blue", 
                time: [{coursetime: 7, courseday: "Monday", courselocation: "Room 1"}, 
                                                            {coursetime: 8, courseday: "Monday", courselocation: "Room 1"},
                                                            {coursetime: 12, courseday: "Tuesday", courselocation: "Edozien"}, 
                                                            {coursetime: 17, courseday: "Friday", courselocation: "MPH"}]},
               
               {"coursename": "Numerical Methods", 
                "coursecode": "CSC302",
                "level": "300",
                "programme": "Computer Science",
                "department": "Computer Science",
                "college": "COLICT",
                "university": "Bells University",
                "color": "green", 
                "time": [{coursetime: 7, courseday:"Tuesday", courselocation: "Room 4", },
                                                            {coursetime: 7, courseday:"Thursday", courselocation: "Room 4", }]},
               
               {"coursename": "Learning AngularJS",
                "coursecode": "CSC304",
                "level": "300",
                "programme": "Computer Science",
                "department": "Computer Science",
                "college": "COLICT",
                "university": "Bells University",
                "color": "yellow", 
                "time":[{coursetime: 7, courseday:"Thursday", courselocation: "Room 15"},
                                                              {coursetime: 8, courseday:"Thursday", courselocation: "Edozien"},
                                                              {coursetime: 17, courseday:"Thursday", courselocation: "Edozien"},
                                                              {coursetime: 7, courseday:"Saturday", courselocation: "Room 2"}]},
               
               {"coursename": "Operating Systems", 
                "coursecode": "CSC307",
                "level": 300,
                "programme": "Computer Science",
                "department": "Computer Science",
                "college": "COLICT",
                "university": "Bells University",
                "color": "cyan", 
                "time": [{coursetime: 8,courseday:"Wednesday", "courselocation": "Room 9"},
                                                              {coursetime: 14, courseday:"Wednesday", courselocation: "Hall B"},
                                                              {coursetime: 12, courseday:"Wednesday", courselocation: "Room 2"},
                                                              {coursetime: 13, courseday:"Wednesday", courselocation: "Room 2"}]},
               
               {"coursename": "Data Structure & Algorithms ",
                "coursecode": "CSC310",
                "level": "300",
                "programme": "Computer Science",
                "department": "Computer Science",
                "college": "COLICT",
                "university": "Bells University",
                "color": "red", 
                "time": [{coursetime: 16, courseday: "Monday", courselocation: "Hall B"}, 
                                                            {coursetime: 17, courseday: "Monday", courselocation: "Hall B"},
                                                            {coursetime: 12, courseday: "Tuesday", courselocation: "Hall B"},
                                                            {coursetime: 9, courseday:"Thursday", courselocation: "MPH"}]}
              ];