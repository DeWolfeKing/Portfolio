import TodoItem from "./Components/todoItem";


function App() {
  return (
    <div className={'App-header'}>
      <div className={'TodoApp'}>
        <div className={'TodoList'}>
          <TodoItem/>

        </div>
        <div className={'AddTodoSection'}>
          <input placeholder={'Todo Name'}/>
          <input placeholder={'Todo Description'}/>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
