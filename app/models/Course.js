 
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const Course = new Schema({
    name: String,
    noidung: String,
    img: String,
  });

  module.exports = mongoose.model('Course', Course);