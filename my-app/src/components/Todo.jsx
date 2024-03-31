import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid';

const Todo = ({todo, setTodo}) => {
  const [value, setValue] = useState("");

  function saveTodo(e){
    e.preventDefault();
    setTodo([...todo,{
      id: uuidv1(),
      title:value,
      status:true
    }])
    setValue("");
  }
  return (
    <div className='container'>
      <form className="form">
            <div className="form__title">
                <h1>What's up,</h1>
                <input type="text" placeholder="Name here" className="form__add-name"/>    
            </div>
            <div className="form-todo">
                <h3 className="form-todo__title">create a todo</h3>
                <p className="form-todo__text">What's on your todo list?</p>
                <input onChange={(e)=>{setValue(e.target.value)}} type="text" className="form-todo__add-text" value={value} placeholder="e.g. get a milk"/>
            </div>
            <input onClick={saveTodo} type="submit" className="category__button" value="Add todo"/>
            </form> 
    </div> 
  )
}

export default Todo
