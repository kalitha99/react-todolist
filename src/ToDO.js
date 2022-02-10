import React, { useState } from 'react'

function Todo() {

    const initialTask = ''


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(task)
        console.log(todos.length)
        setTodos([...todos, { id: todos.length, task: task, isCompleted: 'Not Done' }])
        setTask('')
    }


    const taskcomp = (id) => {
        console.log(id)
        let newState = [...todos];
        newState[id].isCompleted = ' Done';
        setTodos(newState)
    }



    const [todos, setTodos] = useState([])
    const [task, setTask] = useState(initialTask)
    console.log(todos)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button >add</button>
            </form>
            <ul>
                {
                    todos.map(item => (


                        <li key={item.id}>{item.task} status - {item.isCompleted} <button onClick={() => taskcomp(item.id)}>done</button></li>


                    ))}

            </ul>
        </div>
    )
}

export default Todo