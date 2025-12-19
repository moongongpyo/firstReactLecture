import "./Counter.css";
import Viewer from "./Viewer.jsx";
import Controller from "./Controller.jsx";
import {useState, useEffect, useRef} from "react";
import Even from "./Even.jsx";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); //빈배열 deps로 전달시

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current){
      isMount.current = true;
      return
    }
    console.log("update")
  });//deps 없이 전달시 mount + update



/*
  useEffect(() => { //state 변경에 의한 사이트 이펙트를 구현하기 위함
    console.log(`count: ${count}, input: ${input}`);
    }, [count,input]);
//의존성 배열, dependency array, deps
*/

  return (

      <div className="Counter">
        <h1>Simple Counter</h1>
        <section>
          <input value={input} onChange={(e)=>{
            setInput(e.target.value);//리액트의 state는 비동기로 업데이트 됨
           // console.log(`count: ${count}, input: ${input}`);// 즉 이렇게 찍는 로그는 이전의 값이 반영됨
            }}
            />
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 === 0 ? <Even/> : null}
        </section>
        <section>
          <Controller count={count} setCount={setCount}/>
        </section>
      </div>
  );
}

export default Counter;