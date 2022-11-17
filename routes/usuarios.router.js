
const express = require('express');


const router = express.Router();


router.get("/usuarios", (req, res) =>{
  res.json([
    {
      name: "Usuario 1",
      password: "***"
    },
    {
      name: "Usuario 2",
      password: "***"
    }
  ]);
});


module.exports= router;
