import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/toDoRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ToDoList");

app.use('/', todoRoutes);

app.listen(3001, () => {
    console.log("Server Up !");
});
