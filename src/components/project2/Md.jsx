import "./Md.css";
import Ld from "./Ld.jsx";
import Dd from "./Dd.jsx";
import Td from "./Td.jsx";
import { useState} from "react";

const Md = () => {
  let [todos, setTodos] = useState([
    {id: 1, isDone: false, content: "리액트 공부", date: new Date()},
    {id: 2, isDone: false, content: "빨래 하기", date: new Date()},
    {id: 3, isDone: false, content: "노래 연습", date: new Date()},
  ]);

  return <>
    <div className='md'>
      <section>
        <Td/>
      </section>
      <section>
        <Ld todos={todos} setTodos={setTodos}/>
      </section>
      <section>
        <Dd todos={todos} setTodos={setTodos}/>
      </section>
    </div>
  </>;
}

export default Md;