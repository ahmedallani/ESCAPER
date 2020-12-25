
var express = require("express");
var {
  findBlogs,
  createBlog,
  update,
  deleteBlog  
} = require("../db/Models/blogs.models");

const router = express.Router();
//GET.
router.route("/").get(function(req,res){
  findBlogs((err,data) => {
    if (err) throw err;
  res.send(data);
})
})
//POST.
router.route("/").post(function(req,res){
  console.log(req.body);
  createBlog((err,data)=>{
  if (err) throw err;
res.send(data);
  });
});
// UPDATE.
router.route("/").put(function(req,res){
console.log(req.body);
update(req.body,(err,data) =>{
  if(err) throw err;
res.send(data);
  });
});
// DELETE.
router.route("/").delete((req,res) => {
console.log(req.params.id);
deleteBlog(req.params.id,(err,data) =>{
  if(err) throw err;
  res.send(data);
});
});
module.exports = router;
