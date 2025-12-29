import "./Md.css";
import Ld from "./Ld.jsx";
import Dd from "./Dd.jsx";
import Td from "./Td.jsx";
import {useReducer, useState} from "react";
const mockData = [
  {id: 1, isDone: false, content: "리액트 공부", date: new Date()},
  {id: 2, isDone: false, content: "빨래 하기", date: new Date()},
  {id: 3, isDone: false, content: "노래 연습", date: new Date()},
]

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO" :
      return [action.data, ...state];
    case "DELETE":
      // action.data로 id를 받아서 해당 id 제외하고 필터링
      return state.filter((item) => item.id !== action.data);

    case "UPDATE":
      // action.data로 id를 받아서 해당 id의 isDone만 반전
      return state.map((item) =>
          item.id === action.data
              ? { ...item, isDone: !item.isDone }
              : item
      );
    default :
      return state;
  }
}

const Md = () => {

  let [todos, todoDispatch] =  useReducer(reducer,mockData)
// 1. 추가 기능 (ID 생성 로직도 여기로 이사옴!)
  const onCreate = (content) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      isDone: false,
      content: content,
      date: new Date(),
    };
    todoDispatch({ type: "ADD_TODO", data: newTodo });
  };

  // 2. 수정 기능
  const onUpdate = (targetId) => {
    todoDispatch({ type: "UPDATE", data: targetId });
  };

  // 3. 삭제 기능
  const onDelete = (targetId) => {
    todoDispatch({ type: "DELETE", data: targetId });
  };
  return <>
    <div className='md'>
      <section>
        <Td/>
      </section>
      <section>
        <Ld onCreate={onCreate}/>
      </section>
      <section>
        <Dd todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </section>
    </div>
  </>;
}

export default Md;