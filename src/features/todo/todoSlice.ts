import { createSlice } from "@reduxjs/toolkit";

import type { ITodo, ITodoState } from '../../interfaces/todo'


// Load tasks from LocalStorage
function loadSavedTasks() {
    const data = localStorage.getItem('todos');
    const json = JSON.parse(data || "")
    if (json) {
        return json
    }
    return [];
}

const initialState: ITodoState = {
    todos: loadSavedTasks()
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                isDone: false
            })

            localStorage.setItem('todos', JSON.stringify(state.todos))

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo: ITodo) => todo.id === action.payload)
            if (todo) {
                todo.isDone = !todo.isDone
            }
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer;