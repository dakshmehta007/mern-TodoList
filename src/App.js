import './App.css';
import Header from "./MyComponents/Header";
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import About from './MyComponents/About';
import { Footer } from './MyComponents/Footer';
import React, {useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete=(todo)=>{
    console.log("I am  on Delete.",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
    console.log("deleted",todos)
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo =(title,desc)=>{
    console.log("I am adding this Todo",title,desc)
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title:title,
      desc:desc
    }

    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  
  return (
    <>
    <Router>
      <Header title=" Daksh's Todos List" />
      <Routes>
        <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>
          }>

        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
