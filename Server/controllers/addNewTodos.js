import mongoose from 'mongoose';
import ToDoModel from '../Models/ToDo.js';

mongoose.connect("mongodb://127.0.0.1:27017/ToDoList")

const addNewTodo = (req, res) => {
    const task = req.body.task
    ToDoModel.create({
        task: task,
        done: false
    }).then(result => res.json(result))
    .catch(err => res.json(err))
};

export {addNewTodo};