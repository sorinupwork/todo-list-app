var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/todo-api', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


module.exports.Todo = require("./todo");