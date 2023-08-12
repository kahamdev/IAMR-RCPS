// we take some modules dependencies
const express = require('express'); 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); 

// we call mysql for capture sensor data
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobx'
  });

  connection.connect(function (error) {
    if (error) {
      console.log("Error connecting to MySQL database");
    } else {
      console.log("Connected to MySQL database");
    }
  });


  app.get('/sensors', (req, res) => {
    connection.query("SELECT * FROM pulserate", (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error retrieving data from MySQL' });
      }
  
      //const dataToTransfer = result.map(row => [row.id, row.pulse, row.temperature]);
  
      //const updateQuery = "UPDATE pulserate SET pulse = $1, temperature = $2 WHERE id = $3";
  
      //dataToTransfer.forEach(data => {
       // const [id, pulse, temperature] = data;
       // const values = [pulse, temperature, id];
  
        //client.query(updateQuery, values, (pgErr) => {
         // if (pgErr) {
        //    console.error('Error updating data in PostgreSQL:', pgErr);
        //    return res.status(500).json({ error: 'Error updating data in PostgreSQL' });
       //   }
      //  });
     // });
  
      res.json({ message: 'Data retrived successfull' });
    });
  });
  


require('dotenv').config();
const PORT = process.env.SERVER_PORT;

// we use modules dependencies
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({origin : 'http://localhost:4200' }))


// authentication routes
const  AdminAuthPath  = require('./routers/adminRouter');
const  ProviderAuthPath  = require('./routers/providerRouter');
const  PregnantAuthPath  = require('./routers/pregnantRouter');


// authentication path routes
app.use('/api/auth',AdminAuthPath)
app.use('/api/auth',ProviderAuthPath)
app.use('/api/auth',PregnantAuthPath)


// other routes
const  AskhelpPath  = require('./routers/askhelpRouter');
const  ClinicardPath  = require('./routers/clinicardRouter');
const  PregDetailPath  = require('./routers/pregdetailRouter');
const  HealthCareDetailPath  = require('./routers/healthcaredetailRouter');
const  VisitFormPath= require('./routers/visitformRouter')


// other path routes

app.use('/api',AskhelpPath)
app.use('/api',ClinicardPath)
app.use('/api',PregDetailPath)
app.use('/api',HealthCareDetailPath)
app.use('/api',VisitFormPath)

// test routes
app.get('/',(req,res) =>{
    res.send('Hello welcome 😂, server wants greeting you ✋✋ be happy.');
})



app.listen(PORT,()=>{console.log(`Server running at localhost port : ${PORT}`);})



