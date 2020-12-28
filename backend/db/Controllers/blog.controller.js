var { Blogs } = require("../Models/blogs.models");

// Get.
var findblogs = function (callbacks) {
  Blogs.find({}).exec(callbacks);
};
//Post.
var createblog = function (obj, callbacks) {
  debugger
  const blog = new Blogs({
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
var deleteblog = function (id, callback) {
  Blogs.findByIdAndRemove({ _id: id }).exec(callback);
};

module.exports.findblogs = findblogs;
module.exports.createblog = createblog;
module.exports.update = update;
module.exports.deleteblog = deleteblog;
