import { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";


function App() {

  const [todo, setTodo] = useState([]);
  return (
    <div>
      <Todo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
