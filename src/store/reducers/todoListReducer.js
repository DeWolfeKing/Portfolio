import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const todoListReducer = createSlice({
    name: 'todoListData',
    initialState: {
        todoList: [ ],
        error: '',
        isLoading: false,
    },
    reducers: {
        successRequestTodoListData: ( state, action) => {
            state.todoList = action.payload
            state.isLoading = false
        },
        failedRequestTodoListData: ( state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        fetchRequestTodoListData: ( state ) => {
            state.isLoading = true
        },

        successRequestAddTodo: ( state, action) => {
            state.todoList = [...state.todoList, action.payload]
            state.isLoading = false
        },
        failedRequestAddTodo: ( state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        fetchRequestAddTodo: ( state, ) => {
            state.isLoading = true
        },

        successRequestDeleteTodo: ( state, action) => {
            let deleteIndex = state.todoList.findIndex((item) => (item.id === action.payload))
            state.todoList = [...state.todoList.slice(0,deleteIndex), ...state.todoList.slice(deleteIndex+1)]
            state.isLoading = false
        },
        failedRequestDeleteTodo: ( state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        fetchRequestDeleteTodo: (state) => {
            state.isLoading = true
        },

        successRequestChangeTodo: ( state, action) => {
            let changeIndex = state.todoList.findIndex((item) => (item.id === action.payload.id))
            state.todoList = [...state.todoList.slice(0,changeIndex),action.payload, ...state.todoList.slice(changeIndex+1)]
            state.isLoading = false
        },
        failedRequestChangeTodo: ( state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        fetchRequestChangeTodo: (state) => {
            state.isLoading = true
        },

        changeTodo: ( state, action) => {
            let changeIndex = state.todoList.findIndex((item) => (item.id === action.payload.id))
            state.todoList = [...state.todoList.slice(0,changeIndex),action.payload, ...state.todoList.slice(changeIndex+1)]
        },
    },
})
export const {
    fetchRequestChangeTodo,
    failedRequestChangeTodo,
    successRequestChangeTodo,

    fetchRequestAddTodo,
    failedRequestAddTodo,
    successRequestAddTodo,

    fetchRequestTodoListData,
    failedRequestTodoListData,
    successRequestTodoListData,

    fetchRequestDeleteTodo,
    failedRequestDeleteTodo,
    successRequestDeleteTodo,
} = todoListReducer.actions

export default todoListReducer.reducer