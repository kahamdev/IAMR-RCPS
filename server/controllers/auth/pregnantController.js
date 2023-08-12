const  dbConn  = require('../../config/dbConfig');
const  sharedQuery = require('../../models/shared/queries')

exports.pregnantAuth = (req,res) => {
        dbConn.query(sharedQuery.selectPregnantAuth,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
        })
}

exports.pregnantAuthById = (req,res) => {
    const id = parseInt(req.params.id);
    dbConn.query(sharedQuery.selectPregnantAuthById,[id],(err,result)=>{
    if(err) throw err;
    res.status(200).json(result.rows);
    })
}


// add controller
exports.addPregnantAuth= (req,res) => {
    const {id,username,password} =req.body;

    dbConn.query(sharedQuery.addExistPregnantAuth,[username],(err,result)=>{
        if(result.rows.length){
            res.send("the pregnant authenticityalready exists , try another");
        }
  
    dbConn.query(sharedQuery.addPregnantAuth,[id,username,password],(err,result)=>{
        if(err) throw err;
        res.status(201).json({ message: 'the pregnant authenticity added succesful'})
    })
    });
}

// update controller
exports.updatePregnantAuth = (req,res) => {
    const id = parseInt(req.params.id);
    const {username,password} = req.body;
    dbConn.query(sharedQuery.selectPregnantAuthById,[id],(err,result)=>{
           
           if(!result.rows.length){
                res.send("the pregnant authenticity you want to modify does not exists");
            }

           dbConn.query(sharedQuery.updatePregnantAuth,[username,password,id],(err,result)=>{
                if(err) throw err;
                res.status(200).json({ message: 'the pregnant authenticity updated successful'})
            })
    });
}
// delete controller
exports.deletePregnantAuth = (req,res) => {
    const id = parseInt(req.params.id);

    dbConn.query(sharedQuery.selectPregnantAuthById,[id],(err,result)=>{
        if(!result.rows.length){
            res.send("the pregnant authenticity you want to remove does not exists");
        }

        dbConn.query(sharedQuery.deletePregnantAuth,[id],(err,result)=>{
            if(err) throw err;
            res.status(200).json({ message: 'The pregnant authenticity deleted successful'})
        })
    });
}
