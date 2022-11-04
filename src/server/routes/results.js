const express = require('express');
const router = express.Router();
const { Result } = require('../models');

//GET /all results

router.get('/', async (req, res, next) => {
  try{
    const results = await Result.findAll();
    res.send(results);

  } catch(error){
    next(error)
  }
})

//GET results by id
router.get('/:id', async (req, res, next) => {
    try{

    } catch(error){
      next(error)
    }
})

//Add or register results 

router.post('/', async (req, res, next) => {
  try{
    const [results, resultCreated] = await Result.findOrCreate({
      where: {
          studentname: req.body.studentname,
          studentlastname: req.body.studentlastname,
          coursename: req.body.coursename,
          courseresult: req.body.courseresult,
          coursegrade: req.body.coursegrade
      }
    });
    res.send(results);

  } catch(error){
    next(error)
  }
})

//Update results in the table or database

router.put('/:id', async (req, res, next) => {
    try{ 
      const updatedResult = await Result.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.send(updatedResult);


    } catch(error){
      next(error)
    }
})

// DELETE / item by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Result.destroy({
      where: {
        id: req.params.id
      }
    });
    const results = await Result.findAll();
    res.send(results);
  } catch (error) {
    next(error);
  }
});


module.exports = router;