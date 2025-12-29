import './Ld.css';
import {useRef} from "react";

const Ld = ({todos,setTodos}) => {
  const inputRef = useRef();

  const onClick = () => {
    const value = inputRef.current.value;
    if(value === "") {
      inputRef.current.focus();
      return;
    }

    let newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      isDone: false,
      content: value ,
      date: new Date() ,
    }
    setTodos([newTodo,...todos])
    inputRef.current.value = "";
  };

  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      onClick();
    }
  }

  return <>
    <div className='Ld'>
      <input ref={inputRef} onKeyDown={onKeyDown}  placeholder='새로운 Todo...'/>
      <button onClick={onClick}>추가</button>
      <br/>
    </div>
  </>;
}

export default Ld;