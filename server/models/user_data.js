

var mongoose = require('mongoose')


// const Schema = mongoose.Schema;

const UserDetails = mongoose.model({

  tutor:{type: String},
  duration: {type: String},
  rating: {type: Number},
  certified: {type: Boolean},
  date: {type: Date, default: Date.now}
});

//Define your collection
const courses = mongoose.model('courses', userDetails);

// var mongoose = require('mongoose');
//
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// module.exports = {Todo};
//
//
// exports.modules = {
  courses
};
