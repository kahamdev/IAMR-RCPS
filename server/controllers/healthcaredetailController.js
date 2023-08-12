const  dbConn  = require('../config/dbConfig');
const  sharedQuery = require('../models/shared/queries')
// get all controller
exports.healthcaredetail = (req,res) => {
        dbConn.query(sharedQuery.selectHealthcareDetail,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
        })
}

// get by id controller
exports.healthcaredetailById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectHealthcareDetailById,[id],(err,result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
    })
}
// add controller
exports.addHealthcareDetail = (req,res) => {
    const {id,firstname,middlename,lastname,position,phone} =req.body;

    dbConn.query(sharedQuery.addExistHealthcareDetail,[phone],(err,result)=>{
        if(result.rows.length){
            res.send("the health care detail already exists , try another");
        }
  
    dbConn.query(sharedQuery.addHealthcareDetail,[id,firstname,middlename,lastname,position,phone],(err,result)=>{
        if(err) throw err;
        res.status(201).json({ message: 'Healthcare detail added succesful.'})
    })
    });
}
// update controller
exports.updateHealthcareDetail = (req,res) => {
    const id = parseInt(req.params.id);
    const {firstname,middlename,lastname,position,phone} = req.body;
    dbConn.query(sharedQuery.selectHealthcareDetailById,[id],(err,result)=>{
           
           if(!result.rows.length){
                res.send("the health care detail you want to modify does not exists");
            }

           dbConn.query(sharedQuery.updateHealthcareDetail,[firstname,middlename,lastname,position,phone,id],(err,result)=>{
                if(err) throw err;
                res.status(200).json({ message: 'the health care detail updated successful'})
            })
    });
}
// delete controller
exports.deleteHealthcareDetail = (req,res) => {
    const id = parseInt(req.params.id);

    dbConn.query(sharedQuery.selectHealthcareDetailById,[id],(err,result)=>{
        if(!result.rows.length){
            res.send("the health care detail you want to remove does not exists");
        }

        dbConn.query(sharedQuery.deleteHealthcareDetail,[id],(err,result)=>{
            if(err) throw err;
            res.status(200).json({ message: 'The health care detail deleted successful'})
            
        })
    });
}