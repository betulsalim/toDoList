import { useState,useEffect } from "react"
import Form from "./Form"
import List from "./List"
import "./style.css"


export default function Todos(){
    const[todos, setTodos] = useState([
        { "id":1,"title": "Learn React" },
        {"id":2,"title": "Do ToDoList" },
        
    ])
    
    useEffect(()=>{
        console.log(todos)
    },[todos])

   

return(

   <section  className="todoapp" >
   <Form setTodos={setTodos} todos={todos}/>
    <List todos={todos} setTodos={setTodos}/>
   
    </section>
)}