import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/counterSlice";
import todoListReducer from "./reducers/todoListReducer";

export default configureStore({
    reducer: {
        counter : counterReducer,
        todoListData : todoListReducer,
    },
})