import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <footer>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button>
    </footer>
    <hr/>
    </>
  )
}
