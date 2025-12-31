import './Dd.css';
import ListItem from "./ListItem.jsx";
import {useContext, useMemo, useReducer} from "react";
import {TodoStateContext} from "./Todo.jsx";

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH" :
      return action.data
    default :
      return state;
  }
}

const List = () => {

  const todos = useContext(TodoStateContext);

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
        .map((todo) => (<ListItem key={todo.id} {...todo}/>))
      }
    </div>

    <br/>
  </>;
}

export default List;