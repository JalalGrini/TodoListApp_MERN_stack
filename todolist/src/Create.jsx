import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function Create({ onTaskAdded }) {
    const [task, setTask] = useState('')
    
    const handleAdd = () => {
        axios.post("http://localhost:3001/add", { task })
        .then(() => {
            onTaskAdded() 
            setTask('')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='create_form'>
            <input 
                type="text" 
                placeholder='Enter a Task' 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create