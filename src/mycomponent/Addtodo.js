import React from 'react'
import { useState } from 'react';
export const Addtodo = (props) => {
    const [id, setId] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
     e.preventDefault()
     if(!id || !desc){
        alert("this is empty");
     }
      props.Addtodo2(id,desc);
    }
  return (
    <div className='container my-5' >
        <h1>Add todo list</h1>
<form onSubmit={submit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Id</label>
    <input type="text" className="form-control" value={id} onChange={(e)=>setId(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter id"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Desc</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="exampleInputPassword1" placeholder="Description"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    
  )
}
