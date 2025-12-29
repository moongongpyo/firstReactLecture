import './Dd.css';
import Rd from "./Rd.jsx";
import {useState} from "react";

const Dd = ({todos,setTodos}) => {

  const [search,setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  return <>
    <div className='Dd'>
      <h4>
        Todo List 🌱
      </h4>
      <input onChange={onChange} placeholder='검색어를 입력하세요'/>
      {
        todos.filter((todo)=>todo.content.toLowerCase().includes(search))
        .map((todo) => (<Rd todo={todo} todos = {todos} setTodos = {setTodos} />))
      }
    </div>

    <br/>
  </>;
}

export default Dd;