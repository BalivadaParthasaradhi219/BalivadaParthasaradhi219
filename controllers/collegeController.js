const CollegeModel = require('../Model/CollegeModel')


const colleges = async function (req,res){

 let data = req.body

 if(!data.length == 0) return res.status(400).send({status: false, msg: "Please fill the data"})

 const createdData = await CollegeModel.create(data)
 res.status(201).send({status: true , data: createdData})

}

module.exports.colleges = colleges