import * as actionTypes from '../../actions/action';

const initialState = {
    todoList: [
        { id: '1', content: 'todo1', category: 'Home', done: true },
        { id: '2', content: 'todo2', category: 'Home', done: false },
        { id: '3', content: 'todo3', category: 'Office', done: true },
        { id: '4', content: 'todo4', category: 'Office', done: false }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat({
                    id: new Date(),
                    content: action.content,
                    category: action.category,
                    done: false
                })
            };
        case actionTypes.TOGGLE_TODO:
            const todoIndex = state.todoList.findIndex(todo => todo.id === action.id);
            const newTodoStatus = !state.todoList[todoIndex].done;
            const updatedTodo = [...state.todoList];
            updatedTodo[todoIndex].done = newTodoStatus;
            return {
                ...state,
                todoList: updatedTodo
            };
        case actionTypes.UPDATE_TODO:
            const index = state.todoList.findIndex(todo => todo.id === action.id);
            const newTodoCategory = action.category;
            const newTodo = [...state.todoList];
            newTodo[index].category = newTodoCategory;
            return {
                ...state,
                todoList: newTodo
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
};

export default todoReducer;
