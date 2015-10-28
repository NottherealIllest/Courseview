var courses = [
    {
        "name": "Intro To Computer Programming",
        "code": "CSC201",
        "location": "Room 5",
        "level": 200,
        "university": "Bells University",
        "college": [
            "COLICT"
        ],
        "department": [
            "Computer Science"
        ],
        "programme": [
            "Computer Science"
        ],
        "note": [],
        "color": "blue",
        "day": [
            "Tuesday"
        ],
        "time": [
            8
        ]
    },
    {
        "name": "Intro To Algorithms",
        "code": "CSC202",
        "location": "Room 5",
        "level": "200",
        "university": "Bells University",
        "college": [
            "COLICT"
        ],
        "department": [
            "Computer Science"
        ],
        "programme": [
            "Computer Science"
        ],
        "note": [],
        "color": "red",
        "day": [
            "Tuesday"
        ],
        "time": [
            10
        ]
    },
    {
        "name": "Intro To Algorithms2",
        "code": "CSC204",
        "location": "Room 10",
        "level": 200,
        "university": "Bells University",
        "college": [
            "COLICT"
        ],
        "department": [
            "Computer Science"
        ],
        "programme": [
            "Computer Science"
        ],
        "note": [],
        "color": "cyan",
        "day": [
            "Monday"
        ],
        "time": [
            8
        ]
    }
];

var courseModel = {
    "coursename": "Introduction To Database Management", 
    "coursecode": "CSC301",
    "color": "blue", 
    "programme": ["Computer Science"],
    "department": ["Computer Science"],
    "college": ["COLICT"],
    "university": "Bells University",
    "time": [
     {"coursetime": "7", "courseday": "Monday", "courselocation": "Room 1"}, 
     {"coursetime": "8", "courseday": "Monday", "courselocation": "Room 1"},
     {"coursetime": "12", "courseday": "Tuesday", "courselocation": "Edozien"}, 
     {"coursetime": "17", "courseday": "Friday", "courselocation": "MPH"}]
};

var universityModel = {
    "name": "Bells University",
    "location": "Somewhere in ota",
    "description": "Nah",
    "img": ""
}

/*{
    "name": "Bells University",
    "address": {
        "postcode": 234,
        "state": "Ogun",
        "town": "Ota",
        "location": "Bells Drive"
    },
    "colleges":["COLICT", "COLENG", "COLFOODS", "COLNAS"]
}*/

module.exports = courses;

