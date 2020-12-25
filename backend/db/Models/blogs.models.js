const { strict } = require("assert");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogsSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  title: String,
  image: String,
  Body: String
});

const Blogs = mongoose.model("blog", BlogsSchema);
module.exports.Blogs = Blogs;
