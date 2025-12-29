import './Ld.css';
import {useRef} from "react";

const Ld = ({todos,todoDispatch}) => {
  const inputRef = useRef();

  const onClick = () => {
    // 1. 입력값 가져오기
    const value = inputRef.current.value;

    // 2. 빈 값 체크
    if(value === "") {
      inputRef.current.focus();
      return;
    }

    // 3. 새로운 Todo 객체 생성 (기존 로직 활용)
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      isDone: false,
      content: value,
      date: new Date(),
    }

    // 4. 리듀서에게 "이거 추가해줘(ADD_TODO)"라고 요청 보내기
    // 핵심: data에는 '전체 리스트'가 아니라 '새로 추가할 놈'만 담아서 보낸다.
    todoDispatch({
      type: "ADD_TODO",
      data: newTodo,
    });

    // 5. 입력창 비우기
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