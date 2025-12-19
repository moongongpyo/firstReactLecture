import "./Counter.css";
import Viewer from "./Viewer.jsx";
import Controller from "./Controller.jsx";
import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return(
      <div className="Counter">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}/>
        </section>
        <section>
          <Controller count={count} setCount={setCount}/>
        </section>
      </div>
  );
}

export default Counter;