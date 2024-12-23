const express=require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const router= express.Router();


router.get( "/hello-get", HelloController.Hello);
router.post( "/hello-post", HelloController.HelloPost);

router.post( "/Insertstudent", StudentsController.Insertstudent);
router.get( "/ReadStudent", StudentsController.ReadStudent);
router.post( "/UpdateStudent/:id", StudentsController.UpdateStudent);
router.get( "/DeleteStudent/:id", StudentsController.DeleteStudent);


module.exports=router;