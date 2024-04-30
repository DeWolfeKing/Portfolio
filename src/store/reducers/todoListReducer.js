import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const todoListReducer = createSlice({
    name: 'todoListData',
    initialState: {
        todoList: [{
                id : uuid(),
                name: 'Name',
                desc: 'Description',
            }
        ],
    },
    reducers: {
        addTodo: ( state, action) => {
            state.todoList = [...state.todoList, action.payload]
        },
        deleteTodo: ( state, action) => {
            let deleteIndex = state.todoList.findIndex((item) => (item.id === action.payload.id))
            state.todoList = [...state.todoList.slice(0,deleteIndex), ...state.todoList.slice(deleteIndex+1)]
        },
        changeTodo: ( state, action) => {
            let changeIndex = state.todoList.findIndex((item) => (item.id === action.payload.id))
            state.todoList = [...state.todoList.slice(0,changeIndex),action.payload, ...state.todoList.slice(changeIndex+1)]
        },
    },
})
export const { addTodo, deleteTodo, changeTodo } = todoListReducer.actions

export default todoListReducer.reducer