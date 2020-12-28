var express = require("express");
var {
  findblogs,
  createblog,
  update,
  deleteblog
} = require("../db/Controllers/blog.controller.js");

const router = express.Router();
//GET.
router.route("/").get(function (req, res) {
  findblogs((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//POST.
router.route("/").post(function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.body);
  createblog(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// UPDATE.
router.route("/:id").put(function (req, res) {
  console.log(req.body);
  update(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// DELETE.
router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  deleteblog(req.params.id, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
module.exports = router;
