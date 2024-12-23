const StudentsModel = require('../models/StudentsModel');

//inser data
exports.Insertstudent = (req, res) => {
    let reqBody = req.body;
    StudentsModel.create(reqBody)
   
        .then((data) => {
            res.status(201).json({ status: "success", data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });
};


//find read data
exports.ReadStudent=(req,res)=>{
    let quary={};
    let itmes = 'Name Role Class Remarks';
    StudentsModel.find(quary,itmes)
        .then((data) => {
            res.status(201).json({ status: "success",code:200, data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });

};


//update data
exports.UpdateStudent=(req,res)=>{
    let id = req.params.id;
    let quary={_id:id};
    let reqBody = req.body;
    StudentsModel.updateOne(quary,reqBody)
        .then((data) => {
            res.status(201).json({ status: "success",code:200, data: data });
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", data: err });
        });

};


//update data
exports.DeleteStudent = (req, res) => {
    let id = req.params.id;

    StudentsModel.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({ status: "fail", code: 404, message: "Student not found" });
            } else {
                res.status(200).json({ status: "success", code: 200, data: data });
            }
        })
        .catch((err) => {
            res.status(400).json({ status: "fail", code: 400, data: err });
        });
};



