

const express = require("express");
const routerApi = require('./routes');


const app = express();
const port = 3000;

//con esto recibido el rquest en json para los post
app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});


routerApi(app);



app.listen(port, () =>{
  console.log("My port: " + port);
});
