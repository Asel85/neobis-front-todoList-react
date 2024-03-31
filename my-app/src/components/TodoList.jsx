import React, { useState } from 'react'

const TodoList = ({todo, setTodo}) => {

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState();

function deleteTodo(id){
  const newTodo = todo.filter((item)=>{
    return (
      item.id !== id
    )
  });
  setTodo(newTodo);
}

function statusTodo(id){
  console.log(todo
    )
  const newTodo = todo.filter(item=>{
    
      if (item.id === id){
        item.status = !item.status
      }return(item)
    
  })
  setTodo(newTodo);
}

function editTodo(id, title){
  setEdit(id);
  setValue(title);

}

function saveTodo(id){
  const newTodo = todo.map(item=>{
    if(item.id === id){
      item.title = value;
    }return item
  })
  setTodo(newTodo);
  setEdit(null);
}
  return (
     <div className="todo-list">
       <h3 className="todo-list__title">todo list</h3>
      {
        todo.map((item)=>{
          return(
            <div className="items" key={item.id}>
            <div className="items__content">
            <div onClick={()=>{statusTodo(item.id)}} className={ item.status ? "items__radio" : "items__radio_checked"}></div>
            {
              edit === item.id ?
              <div>
                <input className='editInput' value={value} onChange={(e)=>setValue(e.target.value)} />
              </div>
              :
               <div className={item.status ? "items__text" : "items__text_done"}>{item.title}</div>
            }
              </div>
              {
                edit === item.id ?
                <div>
                <button className='btnSave' onClick={()=>saveTodo(item.id)}>Save</button>
                </div>
                :
                <div className="items__buttons">
                <button onClick={()=>editTodo(item.id, item.title)} className="items__button-edit">Edit</button>
                <button onClick={()=>deleteTodo(item.id)} className="items__button-delete">Delete</button>
              </div>
              }
          </div>
          )
        })
      }
      </div>
   )
}

export default TodoList
