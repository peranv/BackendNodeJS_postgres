

const express = require("express");
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3001
//const port = process.env.PORT || 3001;


//con esto recibido el rquest en json para los post
app.use(express.json());

//const whitelist = ['http://localhost:8080'];
/* const options={
  origin: (origin, callback)=>{
     if(whitelist.includes(origin) || origin){
      callback(null, true);

     }
     else{
        callback(new Error ('no permitido'));
     }
  }
}
cors(options)
*/
app.use(cors());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});


routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () =>{
  console.log("My port: " + port);
});
