import { useState,useEffect } from "react"
import "../style.css"
export default function TodoAdd({setTodos,todos}){

const [form, setForm] = useState({"id": 0,"title": ""})

const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value })
}

const getNextId = () => {
    const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
    return maxId + 1;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") {
      return; // eğer title boş ise hiçbir şey yapma
    }
    const newTodo = { id: getNextId(), title: form.title, completed: false };
    setTodos([...todos, newTodo]);
    setForm({ title: "" });
  };
useEffect(()=>{
    setForm({"title": ""})
   },[todos])

return(
<div className="header">
<h1>Todos</h1>
<form onSubmit={onSubmit} >
    <input 
    property="newTodo" 
    className="new-todo" 
    type="text" 
    placeholder="what needs to be done ? " 
    name="title" 
    onChange={handleChange} value={form.title} autoFocus />
</form>
</div>
)}