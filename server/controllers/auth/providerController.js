const  dbConn  = require('../../config/dbConfig');
const  sharedQuery = require('../../models/shared/queries')

exports.healthcareAuth = (req,res) => {
    dbConn.query(sharedQuery.selectHealthcareAuth,(err,result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
    })
}

exports.healthcareAuthById = (req,res) => {
const id = parseInt(req.params.id);
dbConn.query(sharedQuery.selectHealthcareAuthById,[id],(err,result)=>{
if(err) throw err;
res.status(200).json(result.rows);
})
}


// add controller
exports.addHealthcareAuth= (req,res) => {
const {id,username,password} =req.body;

dbConn.query(sharedQuery.addExistHealthcareAuth,[username],(err,result)=>{
    if(result.rows.length){
        res.send("the healthcare authenticityalready exists , try another");
    }

dbConn.query(sharedQuery.addHealthcareAuth,[id,username,password],(err,result)=>{
    if(err) throw err;
    res.status(201).json({ message: 'the healthcare authenticity added succesful'})
})
});
}

// update controller
exports.updateHealthcareAuth = (req,res) => {
const id = parseInt(req.params.id);
const {username,password} = req.body;
dbConn.query(sharedQuery.selectHealthcareAuthById,[id],(err,result)=>{
       
       if(!result.rows.length){
            res.send("the healthcare authenticity you want to modify does not exists");
        }

       dbConn.query(sharedQuery.updateHealthcareAuth,[username,password,id],(err,result)=>{
            if(err) throw err;
            res.status(200).json({ message: 'the healthcare authenticity updated successful'})
        })
});
}
// delete controller
exports.deleteHealthcareAuth = (req,res) => {
const id = parseInt(req.params.id);

dbConn.query(sharedQuery.selectHealthcareAuthById,[id],(err,result)=>{
    if(!result.rows.length){
        res.send("the healthcare authenticity you want to remove does not exists");
    }

    dbConn.query(sharedQuery.deleteHealthcareAuth,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json({ message: 'The healthcare authenticity deleted successful'})
    })
});
}
