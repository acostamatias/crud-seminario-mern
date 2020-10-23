const router = require('express').Router();
const Task = require('../models/Tasks');

router.get('/gettasks', async (req, res) => {
    
    const tasks = await Task.find();
    
    res.send(tasks);
});


router.post('/addtask', async (req, res) => {
    
    const {name, task } = req.body;

    const tasks = {
        name,
        task
    }

    const newTask = new Task(tasks);
    const newTask2 = await newTask.save();

    res.send(newTask2);

});

// Actualizar datos de usuario
router.put('/taskupdate/:id', async (req, res) => {

    const {name, task } = req.body;
    const tasks = {
        name,
        task
    }

    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, tasks);

    res.send(taskUpdated);

});

router.delete('/taskdelete/:id', async (req, res) => {
    
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);
    res.send(taskDeleted);
});

module.exports = router;

