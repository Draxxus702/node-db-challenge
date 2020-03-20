const express = require('express');

const project = require('./projectModel.js');

const router = express.Router();

router.get('/', (req, res) =>{
    project.find()
    .then(param =>{
        res.json(param)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'Failed to retrieve tasks'})
    })
})

router.get('/resources', (req,res) => {
    project.getResources()
    .then(param =>{
        res.json(param)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'Failed to retrieve tasks'})
    })
})

router.get('/tasks', (req,res) =>{
    project.getTasks()
    .then(param =>{
        res.json(param)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'Failed to retrieve tasks'})
    })
})

router.get('/tasks/:id', (req,res) =>{
    const id = req.params.id

    project.getTheRightTasks(id)
    .then(param =>{
        res.json(param)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'Failed to retrieve tasks'})
    })
})


router.post('/', (req,res) => {
    project.find()
    .then(param => {
         if(!req.body.project_name || req.body.project_completed){
            res.status(400).json({
                errorMessage: 'missing a field'
            })
        }else{
            project.insert(req.body)
            .then(param =>{
                res.status(201).json(param)
            })
           .catch(err => {
               res.status(500).json({
                   errorMessage: 'failed to complete post'
               })
           })
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'to stop infinite loop'})
    })
})


router.post('/resources', (req,res) =>{
    project.getResources()
    .then(param => {
         if(!req.body.resource_name){
            res.status(400).json({
                errorMessage: 'missing a field'
            })
        }else{
            project.addResources(req.body)
            .then(param =>{
                res.status(201).json(param)
            })
           .catch(err => {
               res.status(500).json({
                   errorMessage: 'failed to complete post'
               })
           })
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'to stop infinite loop'})
    })
})



router.post('/tasks', (req,res) =>{
    project.getResources()
    .then(param => {
         if(!req.body.task || req.body.completed){
            res.status(400).json({
                errorMessage: 'missing a field'
            })
        }else{
            project.addTask(req.body)
            .then(param =>{
                res.status(201).json(param)
            })
           .catch(err => {
               res.status(500).json({
                   errorMessage: 'failed to complete post'
               })
           })
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'to stop infinite loop'})
    })
})













module.exports = router;