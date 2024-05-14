import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    fetchRequestTodoListData,
    successRequestTodoListData,
    fetchRequestDeleteTodo,
    failedRequestTodoListData,
    successRequestDeleteTodo,
    failedRequestDeleteTodo,
    failedRequestAddTodo,
    successRequestAddTodo,
    fetchRequestAddTodo,
    fetchRequestChangeTodo,
    successRequestChangeTodo,
    failedRequestChangeTodo,
} from "../store/reducers/todoListReducer";
import {todoDb} from "../config/firebase";
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

function* getTodos(){
    try {
        const res = yield getDocs(collection(todoDb, "todoList"))
        const docs = res.docs.map((item) => item.data())
        yield put(successRequestTodoListData(docs))
    } catch (e) {
        console.warn('ERROR :',e)
        yield put(failedRequestTodoListData(e))

    }

}

function* deleteTodoRequest( {payload} ) {
    try {
        yield deleteDoc(doc(todoDb, "todoList",payload.id))
        yield put(successRequestDeleteTodo(payload.id))
    } catch (e) {
        console.warn('ERROR :',e)
        yield put(failedRequestDeleteTodo(e))
    }

}

function* addTodoRequest({payload}){
    const pathConfig = doc(todoDb, `todoList/${payload.id}`)
    try {
        yield setDoc(pathConfig, payload);
        yield put(successRequestAddTodo(payload))
    } catch (e) {
        yield put(failedRequestAddTodo(e))
    }
}

function* changeTodoRequest({payload}){
    console.log('PAYLOAD: ',payload)
    const pathConfig = doc(todoDb, `todoList/${payload.id}`)
    try {
        yield updateDoc(pathConfig, {...payload});
        yield put(successRequestChangeTodo(payload))
    } catch (e) {
        yield put(failedRequestChangeTodo(e))
    }
}

export default function* toDoSaga() {
    yield takeLatest(fetchRequestTodoListData().type,getTodos);
    yield takeLatest(fetchRequestDeleteTodo().type,deleteTodoRequest);
    yield takeLatest(fetchRequestAddTodo().type,addTodoRequest);
    yield takeLatest(fetchRequestChangeTodo().type,changeTodoRequest);
}