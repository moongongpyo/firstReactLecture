import './Dd.css';
import Rd from "./Rd.jsx";
import {useReducer} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH" :
      return action.data
    default :
      return state;
  }
}

const Dd = ({todos, onUpdate, onDelete}) => {

  const [search,dispatch] = useReducer(reducer,"");
  const onChange = (e) => {
    dispatch({
      type : "SEARCH",
      data : e.target.value,
    })
  }
  return <>
    <div className='Dd'>
      <h4>
        Todo List 🌱
      </h4>
      <input onChange={onChange} placeholder='검색어를 입력하세요'/>
      {
        todos.filter((todo)=>todo.content.toLowerCase().includes(search))
        .map((todo) => (<Rd todo={todo} onUpdate = {onUpdate} onDelete = {onDelete} />))
      }
    </div>

    <br/>
  </>;
}

export default Dd;