const  dbConn  = require('../config/dbConfig');
const  sharedQuery = require('../models/shared/queries')
// get all controller
exports.clinicard = (req,res) => {
        dbConn.query(sharedQuery.selectClinicard,(err,result)=>{
        if(err) throw err;
        return res.status(200).json(result.rows);
        })
}

// get by id controller
exports.clinicardById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectClinicardById,[id],(err,result)=>{
    if(err) throw err;
    return res.status(200).json(result.rows);
    })
}
// add controller
exports.addClinicard = (req,res) => {
    const {id,clinicname,mothername,motherage,mothereducation,height,pregnancytime,birthtime,childrenliving,miscarriages,year,gestationalage,mothergroup,rh,syphilis,othertest} =req.body;

    dbConn.query(sharedQuery.addExistClinicard,[id],(err,result)=>{
        if(result.rows.length){
            return res.status(200).json({message:"the clinic card already exists , try another"});
        }
  
    dbConn.query(sharedQuery.addClinicard,[id,clinicname,mothername,motherage,mothereducation,height,pregnancytime,birthtime,childrenliving,miscarriages,year,gestationalage,mothergroup,rh,syphilis,othertest],(err,result)=>{
        if(err) throw err;
        return res.status(201).json({message:"clinic card added succesful"});
    })
    });
}
// update controller
exports.updateClinicard = (req,res) => {
    const id = parseInt(req.params.id);
    const {clinicname,mothername,motherage,mothereducation,height,pregnancytime,birthtime,childrenliving,miscarriages,year,gestationalage,mothergroup,rh,syphilis,othertest} =req.body;
    dbConn.query(sharedQuery.selectClinicardById,[id],(err,result)=>{
           
           if(!result.rows.length){
                return res.status(200).json({message:"the clinic card you want to modify does not exists"});
            }

           dbConn.query(sharedQuery.updateClinicard,[clinicname,mothername,motherage,mothereducation,height,pregnancytime,birthtime,childrenliving,miscarriages,year,gestationalage,mothergroup,rh,syphilis,othertest,id],(err,result)=>{
                if(err) throw err;
                return res.status(200).json({message:"the clinic card updated successful"});
            })
    });
}
// delete controller
exports.deleteClinicard = (req,res) => {
    const id = parseInt(req.params.id);

    dbConn.query(sharedQuery.selectClinicardById,[id],(err,result)=>{
        if(!result.rows.length){
            return res.status(200).json({message:"the clinic card you want to remove does not exists"});
        }

        dbConn.query(sharedQuery.deleteClinicard,[id],(err,result)=>{
            if(err) throw err;
            return res.status(200).send("The clinic card deleted successful ");
        })
    });
}