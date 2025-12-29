import './Ld.css';
import {useRef} from "react";

const Ld = ({onCreate}) => {
  const inputRef = useRef();

  const onClick = () => {
    // 1. 입력값 가져오기
    const value = inputRef.current.value;

    // 2. 빈 값 체크
    if(value === "") {
      inputRef.current.focus();
      return;
    }


    onCreate(value);

    // 3. 입력창 비우기
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