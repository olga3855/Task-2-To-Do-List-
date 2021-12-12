import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import axios from 'axios';
import edit from '../assets/images/edit.png';
import copy from '../assets/images/copy.png';
import remove from '../assets/images/remove.png';

const TodoDetails = ({ todo }) => {

    const { dispatch } = useContext(TodoContext);

    const getStyle = () => {
        return {
            opacity: todo.completed ? '0.5' : '0.7',
            textDecoration: todo.completed ? 'line-through' : 'none',
        }
    }

    const handleMarkComplete = () => {
        dispatch({ type: 'MARK_COMPLETE', value: { completed: !todo.completed, id: todo.id } })
    }
    const handleDelete = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
            .then(res => dispatch({ type: 'REMOVE_TODO', id: todo.id }))
            .catch(err => console.log(err))
    }

    const handleMarkEdit = () => {
        dispatch({ type: 'MARK_EDIT', id: todo.id })
    }


    return (
        <li style={getStyle()}>
            <div className="title">
                <span>
                    <input type="checkbox" />
                    {todo.title}
                </span>

            </div>
            <div className='task_actions'>

                <img className="edit" src={edit} alt={"edit"} onClick={handleMarkEdit} />

                <img className="copy" src={copy} alt={"copy"} onClick={handleMarkComplete} />

                <img className="remove" src={remove} alt={"remove"} onClick={handleDelete} />

            </div>
        </li>
    )
}

export default TodoDetails
