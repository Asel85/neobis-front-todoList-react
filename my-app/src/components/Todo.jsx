import React from 'react'

const Todo = () => {
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
                <input type="text" className="form-todo__add-text" placeholder="e.g. get a milk"/>
            </div>
            <input type="submit" className="category__button" value="Add todo"/>
            </form> 
    </div> 
  )
}

export default Todo
