import express from 'express'

import { showAllTodos } from '../controllers/getAllTodos.js'
import { addNewTodo } from '../controllers/addNewTodos.js'
import { updateTodo } from '../controllers/updateTodos.js'
import { deleteTodo } from '../controllers/deleteTodos.js'

const router = express.Router();

router.get('/get', showAllTodos);
router.post('/add', addNewTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;




