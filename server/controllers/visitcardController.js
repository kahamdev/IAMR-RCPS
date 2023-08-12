const  dbConn  = require('../config/dbConfig');
const  sharedQuery = require('../models/shared/queries')
// get all controller
exports.Visitcard = (req,res) => {
        dbConn.query(sharedQuery.selectVisitcard,(err,result)=>{
        if(err) throw err;
        return res.status(200).json(result.rows);
        })
}

// get by id controller
exports.VisitcardById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectVisitcardById,[id],(err,result)=>{
    if(err) throw err;
    return res.status(200).json(result.rows);
    })
}
// add controller
exports.addVisitcard = (req,res) => {
    const {id,name,weight,pressure,albumin,blood,diabete,gestationalage,gestationalheight,childhorizontal,introduction,childplaying,childheartbeat,oedema} =req.body;

    dbConn.query(sharedQuery.addExistVisitcard,[id],(err,result)=>{
        if(result.rows.length){
            return res.status(200).json({message:"the visit card already exists , try another"});
        }
  
    dbConn.query(sharedQuery.addVisitcard,[id,name,weight,pressure,albumin,blood,diabete,gestationalage,gestationalheight,childhorizontal,introduction,childplaying,childheartbeat,oedema],(err,result)=>{
        if(err) throw err;
        return res.status(201).json({message:"visit card added succesful"});
    })
    });
}
// update controller
exports.updateVisitcard = (req,res) => {
    const id = parseInt(req.params.id);
    const {name,weight,pressure,albumin,blood,diabete,gestationalage,gestationalheight,childhorizontal,introduction,childplaying,childheartbeat,oedema} = req.body;
    dbConn.query(sharedQuery.selectVisitcardById,[id],(err,result)=>{
           
           if(!result.rows.length){
                return res.status(200).json({message:"the visit card you want to modify does not exists"});
            }

           dbConn.query(sharedQuery.updateVisitcard,[name,weight,pressure,albumin,blood,diabete,gestationalage,gestationalheight,childhorizontal,introduction,childplaying,childheartbeat,oedema,id],(err,result)=>{
                if(err) throw err;
                return res.status(200).json({message:"the visit card updated successful"});
            })
    });
}
// delete controller
exports.deleteVisitcard = (req,res) => {
    const id = parseInt(req.params.id);

    dbConn.query(sharedQuery.selectVisitcardById,[id],(err,result)=>{
        if(!result.rows.length){
            return res.status(200).json({message:"the visit card you want to remove does not exists"});
        }

        dbConn.query(sharedQuery.deleteVisitcard,[id],(err,result)=>{
            if(err) throw err;
            return res.status(200).json({message:"The visit card deleted successful "});
        })
    });
}