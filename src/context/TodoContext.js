import React, { createContext, useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import axios from 'axios';
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => dispatch({ type: 'INITIALIZE', todos: res.data}))
        .catch(err => console.log(err))
    }, [])
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;