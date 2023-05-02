import React from 'react'

export const Todoitem = (props) => {
  return (
    <div><p>{props.todo1.id}</p><p>{props.todo1.desc}</p>
    <button type="button" className="btn btn-danger" onClick={()=>{props.onDelete2(props.todo1)}}>Delete</button>
    </div>
  )
}
