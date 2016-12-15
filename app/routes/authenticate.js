var User = require('../models/user');


module.exports = function (router){
    router.post('/login', function(req, res, next) {
        
        User.findOne(req.body, function(err, user) {

            // if there is an error retrieving, send the error.
            if (err)
                res.send(err);

            res.json(user); // return all user in JSON format 
        });
    });
    
    router.post('/register', function(req, res, next) {
        User.create(req.body, function(err, result) {
                if(err)
                    res.send(err);
                res.json(result);
        });
    });
}