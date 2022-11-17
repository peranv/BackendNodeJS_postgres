
const express = require('express');
const { serialize } = require('pg-protocol');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res)=>{
    const products = await service.find();
    res.json(products);
});

router.get('/filter', (req, res) =>{
    res.send("Yo soy un filter");
})

router.get('/:id', async (req, res)=>{
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
})

router.post('/', async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);

})

//patch recibo los objetos de forma parcial a diferencia de put que deberia actualizar en volumens
router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const product =  await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res)=>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports= router;