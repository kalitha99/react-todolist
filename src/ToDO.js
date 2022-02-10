import React, { useState } from 'react'

function Todo() {
    const handelOnChane = (e) => {

    }
    const initialState = [
        {
            id: 1,
            task: 'task 1',
            isCompleted: 'Not Done'
        },

        {
            id: 2,
            task: 'ttask 2',
            isCompleted: 'Not Done'
        }
    ]


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(task)
      }


    const taskcomp = (id) => {
        console.log(id)
        let newState = [...todos];
        newState[id - 1].isCompleted = ' Done';
        setTodos(newState)
    }


    const [todos, setTodos] = useState(initialState)
    const [task, setTask] = useState()
    console.log(todos)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) =>setTask(e.target.value)} />
                <button >add</button>
            </form>
            {
                todos.map(item => (


                    <li key={item.id}>{item.task} status - {item.isCompleted} <button onClick={() => taskcomp(item.id)}>done</button></li>


                ))}


        </div>
    )
}

export default Todo