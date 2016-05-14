// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username        : String,
    password        : String,
    access          : [],
    level           : String,
    department      : String,
    date            : Date
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', userSchema);