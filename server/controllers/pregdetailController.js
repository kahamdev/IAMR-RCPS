const  dbConn  = require('../config/dbConfig');
const  sharedQuery = require('../models/shared/queries')
// get all controller
exports.pregDetail = (req,res) => {
        dbConn.query(sharedQuery.selectPregDetail,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
        })
}

// get by id controller
exports.pregDetailById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectPregDetailById,[id],(err,result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
    })
}
// add controller
exports.addPregDetail = (req,res) => {
    const {id,name,region,district,ward,address,phone} =req.body;

    dbConn.query(sharedQuery.addExistPregDetail,[phone],(err,result)=>{
        if(result.rows.length){
            res.send("the pregdetail already exists , try another");
        }
  
    dbConn.query(sharedQuery.addPregDetail,[id,name,region,district,ward,address,phone],(err,result)=>{
        if(err) throw err;
        res.status(201).json({ message: 'the pregdetail added succesful'})
    })
    });
}
// update controller
exports.updatePregDetail = (req,res) => {
    const id = parseInt(req.params.id);
    const {name,region,district,ward,address,phone} = req.body;
    dbConn.query(sharedQuery.selectPregDetailById,[id],(err,result)=>{
           
           if(!result.rows.length){
                res.send("the pregdetail you want to modify does not exists");
            }

           dbConn.query(sharedQuery.updatePregDetail,[name,region,district,ward,address,phone,id],(err,result)=>{
                if(err) throw err;
                res.status(200).json({ message: 'the pregdetail updated successful'})
            })
    });
}
// delete controller
exports.deletePregDetail = (req,res) => {
    const id = parseInt(req.params.id);

    dbConn.query(sharedQuery.selectPregDetailById,[id],(err,result)=>{
        if(!result.rows.length){
            res.send("the pregdetail you want to remove does not exists");
        }

        dbConn.query(sharedQuery.deletePregDetail,[id],(err,result)=>{
            if(err) throw err;
            res.status(200).json({ message: 'The pregdetail deleted successful'})
        })
    });
}