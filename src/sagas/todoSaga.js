import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {deleteTodo} from "../store/reducers/todoListReducer";


function* fetchTodo(){
    try {
        console.warn('NORM')
    } catch (e) {
        console.warn('ERROR')
    }

}

export default function* toDoSaga() {
    yield takeLatest(deleteTodo('1').type,fetchTodo);
}