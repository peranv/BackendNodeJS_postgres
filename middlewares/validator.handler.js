const boom = require('@hapi/boom');

function validatorHandler(schema, property){
  return (req, res, next)=>{
     const data = req[property]; // en esta propiedad le indicamos si la data viene en req.body, req.params o req.query
     const { error } = schema.validate(data, { abortEarly: false });
     if(error){
      next(boom.badRequest(error));
     }
     next();
  }
}


module.exports = validatorHandler;
