import './App.css'
import Register from "./components/Register.jsx";



//1. 컴포넌트는 자신이 관리하는 state가 변경되었을때 리랜더링
//2. 컴포넌트는 자신이 전달받는 props의 값이 변경되었을때 리랜더링
//3. 부모 컴포넌트가 리랜더링 되었을때 자식 컴포넌트도 리랜더링
//* 따라서 의미없이 부모의 상태를 자식이 props로 전달 받으면 성는이 저하됨,(부모의 상태에 영향 받으면 상관 없음)

//App 컴포넌트 //부모 컴포넌트
function App() {
  return <>
    <Register/>
  </>;
}

export default App
