import "./Md.css";
import Editor from "./Editor.jsx";
import List from "./List.jsx";
import Td from "./Td.jsx";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";

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
              ? {...item, isDone: !item.isDone}
              : item
      );
    default :
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

const Todo = () => {

  let [todos, todoDispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4);
// 1. 추가 기능 (ID 생성 로직도 여기로 이사옴!)
  const onCreate = useCallback((content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date(),
    };
    todoDispatch({type: "ADD_TODO", data: newTodo});
  }, []);

  // 2. 수정 기능
  const onUpdate = useCallback((targetId) => {
    todoDispatch({type: "UPDATE", data: targetId});
  }, []);

  // 3. 삭제 기능
  const onDelete = useCallback((targetId) => {
    todoDispatch({type: "DELETE", data: targetId});
  }, []);
  const memoizedDispatch = useMemo(() =>{
    return  {onCreate, onUpdate, onDelete};
  },[onCreate,onUpdate,onDelete]);

  return <>
    <div className='md'>
      <section>
        <Td/>
      </section>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <Editor/>
          </section>
          <section>
            <List/>
          </section>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  </>;
}

export default Todo;