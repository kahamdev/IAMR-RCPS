const  dbConn  = require('../../config/dbConfig');
const  sharedQuery = require('../../models/shared/queries')

exports.admin = (req,res) => {
        dbConn.query(sharedQuery.selectAdmin,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
        })
}

exports.adminById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectAdminById,[id],(err,result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
    })
}
