import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mySaga from '../sagas/todoSaga'

import todoListReducer from "./reducers/todoListReducer";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        todoListData : todoListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(mySaga)