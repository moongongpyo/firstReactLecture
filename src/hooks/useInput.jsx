import {useState} from "react";

function useInput(){ //함수 이름 앞에 'use' 라는 접두사를 사용하면 리액트는 해당함수를 커스텀 훅이라고 판단하여 1번 규칙과 상관 없이 선언 가능하다
  const [input, setInput] = useState(0);

  const onChange = (e) => {
    setInput(e.target.value)
  };

  return [input,onChange,setInput]
}

export default useInput;