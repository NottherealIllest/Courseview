'use strict'

var db       = require('../../config/db');
var express = require('express');
var router = express.Router();
var response = require('../api/response');

var mongoose = require('mongoose');
mongoose.connect(db.url, function(err)  {
    if(err)
        console.log('Connection Error:'+err);
    else
        console.log("Connected");
});

var Course = require('../models/course');


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
            return next(err);
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

//test route for elastix call center
router.get('/customer/', function(req, res, next){
    var phone = req.param('number');
    res.send("Wale M - " + phone);
});

module.exports = router;

    