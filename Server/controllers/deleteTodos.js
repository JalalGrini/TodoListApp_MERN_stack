import mongoose from 'mongoose';
import ToDoModel from '../Models/ToDo.js';

mongoose.connect("mongodb://127.0.0.1:27017/ToDoList")

const deleteTodo = (req, res) => {
    const {id} = req.params
    ToDoModel.findByIdAndDelete(
        id, 
    )
    .then(result => res.json(result))
    .catch(err => res.json(err))
};

export {deleteTodo};