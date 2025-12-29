import './Dd.css';
import Rd from "./Rd.jsx";
import {useMemo, useReducer} from "react";

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


  const {totalCount,doneCount,notDoneCount} =  useMemo(() => {console.log("getAnalyzedData 호출")
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;

      return{totalCount,doneCount,notDoneCount};}, [todos]);
    //의존성배열 : deps
    //deps가 비어있으면 최초에만 랜더링 됨
  return <>
    <div className='Dd'>
      <h4>
        Todo List 🌱
      </h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
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