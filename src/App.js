import TodoItem from "./Components/todoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTodo, changeTodo, deleteTodo} from "./store/reducers/todoListReducer";
import { v4 as uuid } from 'uuid';

function App() {

  const todolist = useSelector((state) => state.todoListData.todoList);
  const dispatch = useDispatch();
  const [name,setName] = useState('name task');
  const [desc,setDesc] = useState('desc');

  function deleteToDoFunc (id) {
    dispatch(deleteTodo({id}))
  }

  function addToDoFunc () {
    const id = uuid();
    dispatch(addTodo({id,name,desc}))
  }

  function changeToDoFunc ( id,name,desc ) {
    dispatch(changeTodo({id,name,desc}))
  }

  return (
    <div className={'App-header'}>
      <div className={'TodoApp'}>
        <div className={'TodoList'}>
          <div>
            {
              todolist.map((item,key) =>
                  <TodoItem item={item}
                            key={key}
                            deleteFunc={deleteToDoFunc}
                            changeFunc={changeToDoFunc}
                  />
            )}
          </div>
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