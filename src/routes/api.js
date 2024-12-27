const express=require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const UserProfileController = require("../controllers/UserProfileController");
const TokenIssueController = require("../controllers/TokenIssueController");
const JWTPartices = require("../controllers/JWTPartices");
const TokenVerifymiddleware = require("../middleware/TokenVerifymiddleware");
const router= express.Router();


router.get( "/hello-get", HelloController.Hello);
router.post( "/hello-post", HelloController.HelloPost);

router.get( "/ReadStudent",TokenVerifymiddleware, StudentsController.ReadStudent);
router.post( "/Insertstudent", StudentsController.Insertstudent);
router.post( "/UpdateStudent/:id", StudentsController.UpdateStudent);
router.get( "/DeleteStudent/:id", StudentsController.DeleteStudent);

//create user
router.post( "/CreateUser", UserProfileController.CreateUser);
router.post( "/UserLogin", UserProfileController.UserLogin);
router.get( "/ReadUser",TokenVerifymiddleware, UserProfileController.ReadUser);


//CreateToken
router.get( "/CreateToken", JWTPartices.CreateToken);

router.get( "/TokenIssue/", TokenIssueController.TokenIssue);


module.exports=router;