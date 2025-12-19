import {useState, useRef} from "react"; //useState, useRef는 React Hooks로, 함수 컴포넌트에서 클래스 컴포넌트와 유사한 기능을 하게 해줌, React Hooks대략 는 20개정도가 존재하며, 조건문과 반복문 내부에서는 호출이 불가능함


const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birthDate: (new Date()).toISOString().slice(0, 10),
    nationality: "",
    selfIntroduce: ""
  });

  const countRef = useRef(0); //ui의 리랜더링을 바라는 상황은 아닐 때
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current ++;
    console.log(countRef.current);

    let value = e.target.value;
    let name = e.target.name;

    if (name === "nationality" && (value === "" || value === "--국적--")) {
      return;
    }

    // 2. 그 외의 모든 경우는 여기서 처리 (중복 제거됨)
    setInput({
      ...input,
      [name]: value
    });

  }

  const onsubmit = () =>{
    if (input.name === ""){
      // 이름을 입력하는 Dom 요소 포커스
      inputRef.current.focus();
    }
  }

  return (
      <div>
        <br/>
        {`이름: ${input.name}`}
        <br/>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange}
               placeholder={"이름"}/>
        <br/>
        <br/>
        {`생일: ${input.birthDate}`}
        <br/>
        <input name="birthDate" value={input.birthDate} type="date"
               onChange={onChange}/><br/>
        <br/>
        {`국적: ${input.nationality || "선택 안함"}`}
        <br/>
        <select name="nationality" value={input.nationality}
                onChange={onChange}>
          <option value="">--국적--</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="cn">중국</option>
          <option value="jp">일본</option>
        </select>
        <br/>
        <br/>
        {`자기소개: ${input.selfIntroduce}`}
        <br/>
        <textarea name="selfIntroduce" value={input.selfIntroduce}
                  onChange={onChange}/>
        <br/>
        <button onClick={onsubmit}>제출</button>
      </div>);
}

export default Register;