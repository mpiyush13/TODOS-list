import logo from './logo.svg';
import './App.css';
import Header from './mycomponent/header';
import {Footer} from "./mycomponent/Footer";
import {Addtodo} from "./mycomponent/Addtodo";
import {Todos} from './mycomponent/Todos';
import React, { useState } from 'react';




function App() {
  const [id, setId] = useState("");
    const [desc, setDesc] = useState("");
  const onDelete=(todo)=>{
    console.log("I am Delete ",todo);
    setTodos(list.filter((e)=>{
      return e!=todo
    }));
  }
  const Addtodo1=(id,desc)=>{
     console.log("i am adding this part ",id,desc);
     const temp={
      id:id,
      desc:desc
     }
     setTodos([...list,temp])

  }
  const [list, setTodos] = useState(
  [{id:1,
  desc:"hey i am piyush 1"},
{
  id:2,
  desc:"hey i am piyush 2"
},
{
  id:3,
  desc:"hey i am piyush 3"
}
]);
  return (
   <>
   <Header title="Piyush" searchbar={false}/>
   <Addtodo Addtodo2={Addtodo1}/>
   <Todos list={list} onDelete1={onDelete}/>
   <Footer/>
   

   </>
  );
}

export default App;
