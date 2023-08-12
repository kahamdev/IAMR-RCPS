const  dbConn  = require('../config/dbConfig');
const  sharedQuery = require('../models/shared/queries')
// get all controller
exports.askHelp = (req,res) => {
        dbConn.query(sharedQuery.selectAskhelp,(err,result)=>{
        if(err) throw err;
        return res.status(200).json(result.rows);
        })
}

// get by id controller
exports.askHelpById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectAskhelpById,[id],(err,result)=>{
    if(err) throw err;
    return res.status(200).json(result.rows);
    })
}
// add controller
exports.addAskHelp = (req,res) => {
 const {id,name,message} =req.body;
 
 dbConn.query(sharedQuery.addExistAskhelp,[message],(err,result)=>{
    if(result.rows.length){
        return res.send("Already exists Ask help, try another");
    }

    dbConn.query(sharedQuery.addAskhelp,[id,name,message],(err,result)=>{
        if(err) throw err;
        return res.status(201).json({ message: 'Ask help added succesful'})
    })
});
}
// delete controller
exports.deleteAskHelp = (req,res) => {
    const id = parseInt(req.params.id);
    
    dbConn.query(sharedQuery.selectAskhelpById,[id],(err,result)=>{
        if(!result.rows.length){
           return res.status(200).json({message:"Ask help you want to remove does not exists"});
        }

        dbConn.query(sharedQuery.deleteAskhelp,[id],(err,result)=>{
            if(err) throw err;
            return res.status(200).json({message:"Ask help deleted successful "});
            
        })
    });
}