import React from 'react'

const TodoList = ({todo, setTodo}) => {

function deleteTodo(id){
  const newTodo = todo.filter((item)=>{
    return (
      item.id !== id
    )
  });
  setTodo(newTodo);
}
  return (
     <div className="todo-list">
       <h3 className="todo-list__title">todo list</h3>
      {
        todo.map((item)=>{
          return(
            <div className="items" key={item.id}>
            <div className="items__content">
              <div className="items__text">{item.title}</div>
              </div>
              <div className="items__buttons">
                <button className="items__button-edit">Edit</button>
                <button onClick={()=>deleteTodo(item.id)} className="items__button-delete">Delete</button>
              </div>
          </div>
          )
        })
      }
      </div>
   )
}

export default TodoList
