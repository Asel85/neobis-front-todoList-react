import { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";


function App() {

  const [todo, setTodo] = useState([
    {
    id:1,
    title:"first title",
    status:true
  },
  {
    id:2,
    title:"first title",
    status:true
  },
  {
    id:3,
    title:"first title",
    status:true
  },
])
  return (
    <div>
      <Todo />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
