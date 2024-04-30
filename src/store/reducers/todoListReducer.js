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
            console.log('Action Payload CHANGE :',action.payload)
            let changeIndex = state.todoList.findIndex((item) => (item.id === action.payload.id))
            console.log('INDEX CHANGE :',changeIndex)
            state.todoList = [...state.todoList.slice(0,changeIndex),action.payload, ...state.todoList.slice(changeIndex+1)]
            console.log('Todo state CHANGE :',state.todoList)
        },
    },
})
export const { addTodo, deleteTodo, changeTodo } = todoListReducer.actions

export default todoListReducer.reducer