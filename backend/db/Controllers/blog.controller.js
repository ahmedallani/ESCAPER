var { Blogs } = require("../Models/blogs.models");

// Get.
var findBlogs = function (callbacks) {
  Blogs.find({}).exec(callback);
};
//Post.
var createBlog = function (obj, callbacks) {
  const blog = new Blogs({
    id: obj.id,
    title: obj.title,
    image: obj.image,
    Body: obj.Body
  });
  blog.save(callbacks);
};
//Put.
var update = function (obj, callback) {
  Blogs.findOneAndUpdate({ _id: obj._id }, obj, { upsert: true }, callback);
};
//Delete.
var deleteBlog = function (id, callback) {
  Blogs.findByIdAndRemove({ _id: id }).exec(callback);
};

module.exports.findBlogs = findBlogs;
module.exports.createBlog = createBlog;
module.exports.update = update;
module.exports.deleteBlog = deleteBlog;
