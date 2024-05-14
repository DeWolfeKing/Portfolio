import TodoItem from "./Components/todoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState, } from "react";
import {
  fetchRequestAddTodo, fetchRequestChangeTodo,
  fetchRequestDeleteTodo,
  fetchRequestTodoListData
} from "./store/reducers/todoListReducer";
import { v4 as uuid } from 'uuid';

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore'


function App() {

  const todolist = useSelector((state) => state.todoListData.todoList);
  const isLoading = useSelector((state) => state.todoListData.isLoading);
  const dispatch = useDispatch();
  const [name,setName] = useState('name task');
  const [desc,setDesc] = useState('desc');

  function deleteToDoFunc (id) {
    dispatch(fetchRequestDeleteTodo({id}))
  }

  function addToDoFunc () {
    const id = uuid();
    dispatch(fetchRequestAddTodo({id,name,desc,complete: false}))
  }

  function changeToDoFunc ( id,name,desc,complete) {
    dispatch(fetchRequestChangeTodo({id,name,desc,complete}))
  }
  useEffect(() => {
    dispatch(fetchRequestTodoListData());
  },[])
  return (
    <div className={'App-header'}>
      <div className={'TodoApp'}>
        <div className={'TodoList'}>
          { isLoading ? (
              <div>
                <p>LOADING</p>
              </div>
          ) : (
              <div>
                  {
                    todolist.map((item, key) =>
                        <TodoItem item={item}
                                  index={key}
                                  deleteFunc={deleteToDoFunc}
                                  changeFunc={changeToDoFunc}
                        />
                  )}
              </div>
          )}
        </div>
        <div className={'AddTodoSection'}>
          <input value={name}
                 onChange={(event) => (setName(event.target.value))}
                 placeholder={'Todo Name'}
          />
          <input value={desc}
                 onChange={(event) => (setDesc(event.target.value))}
                 placeholder={'Todo Description'}
          />
          <button onClick={addToDoFunc} >Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;