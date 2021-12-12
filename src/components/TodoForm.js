import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import axios from 'axios';
import TodoList from './TodoList';


const TodoForm = () => {

    const { todos } = useContext(TodoContext);
    const { dispatch } = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const create = (e) => {
        e.preventDefault();
        if (title) {
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            })
                .then(res => dispatch({ type: 'ADD_TODO', todo: res.data }));
            setTitle('');
        }
    }

    const countTotalTodo = () => {
        let inComplete = todos.filter(todo => {
            return !todo.completed + todo.completed
        })
        return inComplete.length;
    }

    const countIncompletedTodo = () => {
        let inComplete = todos.filter(todo => {
            return !todo.completed
        })
        return inComplete.length;
    }

    const countCompletedTodo = () => {
        let inComplete = todos.filter(todo => {
            return todo.completed
        })
        return inComplete.length;
    }

    const handleInputChange = ({ target }) => {
        { setTitle(target.value) }
    }

    return (
        <div className='content'>
            <div className='left'>
                <div className='input_task'>
                    <form
                        className='add_task'
                        onSubmit={create}>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            value={title}
                            placeholder="   + Add a task, press Enter to save" />
                        <input type="submit" value="Add" />

                    </form>
                    <p className='total'>Total: {countTotalTodo()}</p>
                </div>

                <TodoList />
                <p className='to_do'>To do ({countIncompletedTodo()})</p>
            </div>

            <div className='completed_tasks'>
                <p className='to_do'>Completed ({countCompletedTodo()})</p>

            </div>
        </div>
    );
}

export default TodoForm;