import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'
import Create from './Create'
import './App.css'

function Home() {
    const [todos, setTodos] = useState([])
    
    const fetchTodos = () => {
        axios.get("http://localhost:3001/get")
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleEdit = (id) => {
        axios.put(`http://localhost:3001/update/${id}`)
        .then(() => fetchTodos())
        .catch(err => console.log(err))
    }
    const handleDelete =(id) => {
       axios.delete(`http://localhost:3001/delete/${id}`)
       .then(() => fetchTodos())
       .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <h2>ToDo List App</h2>
            <Create onTaskAdded={fetchTodos} />
            {
                todos.length === 0 ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                <div className='task' key={todo._id}>
                    <div className='checkBox' onClick={() => handleEdit(todo._id)}>
                    {todo.done ?
                        <BsFillCheckCircleFill className='icon' />
                        :
                        <BsCircleFill className='icon' />
                      }
                      <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                    </div>
                    <div>
                      <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)} /></span>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Home