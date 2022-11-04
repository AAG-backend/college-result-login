const express = require('express');
const router = express.Router();
const { Register } = require('../models');

//GET /all registers or admins

router.get('/', async (req, res, next) => {
  try{
    const registers = await Register.findAll();
    res.send(registers);

  } catch(error){
    next(error)
  }
})

//GET registers by id
router.get('/:id', async (req, res, next) => {
    try{

    } catch(error){
      next(error)
    }
})

//Add or register results 

router.post('/', async (req, res, next) => {
  try{
    const [register, adminCreated] = await Register.findOrCreate({
      where: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          email: req.body.email,
        }
    });
    res.send(register);

  } catch(error){
    next(error)
  }
})

//Update results in the table or database

router.put('/:id', async (req, res, next) => {
    try{ 
      const updatedRegistered = await Register.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.send(updatedRegistered);


    } catch(error){
      next(error)
    }
})



module.exports = router;