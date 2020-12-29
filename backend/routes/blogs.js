var express = require("express");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, "../frontend/src/assets/uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  }
});
var upload = multer({ storage });

var {
  findblogs,
  createblog,
  update,
  deleteblog
} = require("../db/Controllers/blog.controller.js");

const router = express.Router();
//GET.
router.get("/", function (req, res) {
  findblogs((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//POST.

router.post("/", upload.single("image"), function (req, res) {
  const obj = {
    title: req.body.title,
    image: req.file.originalname,
    Body: req.body.Body
  };
  console.log("obj", obj);
  createblog(obj, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// UPDATE.
router.put("/:id", function (req, res) {
  console.log(req.body);
  update(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// DELETE.
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  deleteblog(req.params.id, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
module.exports = router;
