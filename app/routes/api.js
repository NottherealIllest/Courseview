'use strict'

var db       = require('../../config/db');
var router = require('express').Router();
var response = require('../api/response');
var mongoose = require('mongoose');

mongoose.connect(db.url, function(err)  {
    if(err){
		
		console.log('Connection Error:' + err);
		console.log('Trying with local mongo instance');
		
		mongoose.connect(db.localMongo, function(error){
			
			if(error)
				console.log("Local Instance Error:", error);
			
			else
				console.log("Connected to local Mongo instance");
		});
	}
        
    else
        console.log("Connected");
});

var University = require('../models/university');
var College = require('../models/college');
var Department = require('../models/department');
var Programme = require('../models/programme');
var Course = require('../models/course');


//Course API Endpoints

//get all courses in mongodb
router.get('/course', function(req, res, next) {
    // use mongoose to get all courses in the database
    Course.find(function(err, courses) {

        // if there is an error retrieving, send the error.
        if (err)
            res.send(err);

        res.json(courses); // return all courses in JSON format 
    });
});

// get a single course
router.get('/course/:id', function(req, res, next) {
    // use mongoose to get all courses in the database
    Course.findById(req.params.id,function(err, course) {

        // if there is an error retrieving, send the error.
        if (err)
            res.send(err);

        res.json(course); // return all courses in JSON format
    });
});

// create a course
router.post('/course', function(req, res, next){
    
    Course.create(req.body, function(err, result) {
        if(err)
            res.send(err);
        res.json(result);
    });
});

// delete a course
router.delete('/course/:id', function(req, res, next) {
             
});

// update a course
router.put('/course/:id', function(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body, function(err , result) {
        if(err)
            return next(err);
        res.json(result);
    });
});


//University API Endpoint

//get all universities
router.get('/university', function(req, res, next){
	University.find( {}, function (error, universities) {
		
		if(error)
			next(error);
		
		res.json(universities);
		
	});
});

//get all colleges in university
router.get('/university/:id/colleges', function(req, res, next){
	
	College.find({ university: req.params.id}, function(error, colleges){
		
		if(error)
			return next(error);
		
		res.json(colleges);
	});
	
});

//get universities with id
router.get('/university/:id', function(req, res, next){
	University.findById(req.params.id, function(error, colleges){
		
		if(error)
			return next(error);
		
		res.json(colleges);
	});
});



//College API Endpoint

//get all colleges in mongodb
router.get('/college', function(req, res, next){
    College.find({}, function (error, colleges) {
        if(error)
            next(error);
        
        res.json(colleges);
        
    })
});

//get colleges with id
router.get('/college/:id', function(req, res, next){
	College.findById(req.param.id, function(error, college){
		
		if(error)
			return next(error);
		
		res.json(college);
		
	});
});

//get all department within college
router.get('/college/:id/departments', function(req, res, next){
	
	Department.find({ college: req.params.id}, function(error, departments){
		if(error)
			return next(error);
		
		res.json(departments);
	});
	
});


//Department API Endpoint

//get all departments in mongodb
router.get('/department', function(req, res, next){
    Department.find({}, function (error, departments) {
        if(error)
            next(error);
        
        res.json(departments);
        
    });
});

//get department with id
router.get('/department/:id', function(req, res, next){
	
	Department.findById(req.params.id, function(error, department){
		if(error)
			return next(error);
		
		res.json(department);
		
	});
	
});

//get programmes with department id 
router.get('/department/:id/programmes', function(req, res, next){
	
	Programme.find({ department: req.params.id}, function(error, programmes){
		console.log(error, programmes, req.params.id, req.query);
		if(error)
			return next(error);
		
		res.json(programmes);
		
	});
	
});



//Programme API Endpoint

//get all programmes in mongodb
router.get('/programme', function(req, res, next){
    Programme.find({}, function (error, programmes) {
        if(error)
            next(error);
        
        res.json(programmes);
        
    })
});

//get programme with id
router.get('/programme/:id', function(req, res, next){
	
	Programme.findById(req.params.id, function(error, programme){
		if(error)
			return next(error);
		
		res.json(programme);
		
	});
	
});

//get courses with programme id 
router.get('/programme/:id/courses/:level', function(req, res, next){
	console.log(req.params);
	Course.find({ programme: req.params.id, level: req.params.level}, function(error, courses){
		if(error)
			return next(error);
		
		res.json(courses);
		
	});
	
});


module.exports = router;

//test route for elastix call center
router.get('/customer/', function(req, res, next){
    var phone = req.params('number');
    res.send("Wale M - " + phone);
});


    