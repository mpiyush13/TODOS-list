import React from 'react'
import {Todoitem} from '../mycomponent/Todoitem';
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <div className="container my-5" style={mystyle}>
        <h1  className='text-center'>Todos List</h1>
        {props.list.length===0?  <h1>No todos list</h1>:props.list.map((todo)=>{
            return <Todoitem todo1={todo} onDelete2={props.onDelete1}/>
        })}
        
       
        
    </div>
  )
}
