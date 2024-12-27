const UserModel = require('../models/UserModel');
var jwt = require('jsonwebtoken');

//inser data
exports.CreateUser = (req, res) => {
    let reqBody = req.body;
    UserModel.create(reqBody)
   
        .then((data) => {
            res.status(201).json({ status: "success", data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};


//User Login
exports.UserLogin = (req, res) => {
    let Email = req.body['Email'];
    let Password = req.body['Password'];
    UserModel.find({Email:Email,Password:Password})
   
        .then((data) => {
            if(data.length >0){

                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),  // Expiry time (1 hour from now)
                    data: {
                        Email: Email,
                        Password: Password,
                        admin: true
                    }
                };
                  let token = jwt.sign(payload, 'secretOrPrivateKey1234');

                res.status(201).json({ status: "Login success",token:token, data: data });
            }else{
                res.status(404).json({ status: "Invalid email or password" });
            }
           
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};



//find read data
exports.ReadUser = (req, res) => {
    let Email = req.header('email'); // Correct way to access header
    UserModel.findOne({ Email: Email }) // Use findOne for a single user
        .then((data) => {
            if (data) {
                res.status(200).json({ status: "success", code: 200, data: data });
            } else {
                res.status(404).json({ status: "fail", code: 404, message: "User not found" });
            }
        })
        .catch((err) => {
            res.status(500).json({ status: "fail", code: 500, error: err.message });
        });
};



