export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return [...action.todos,

            ]
        case 'ADD_TODO':
            return [...state, {
                title: action.todo.title,
                completed: action.todo.completed,
                id: action.todo.id
            }]
        case 'MARK_COMPLETE':
            return state.map(todo => {
                if (todo.id === action.value.id) {
                    todo.completed = action.value.completed
                }
                return todo;
            })
        case 'MARK_EDIT':
            return state.map(todo =>
                todo.id === action.id);
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}