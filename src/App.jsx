import './App.css'
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

//1. 컴포넌트는 자신이 관리하는 state가 변경되었을때 리랜더링
//2. 컴포넌트는 자신이 전달받는 props의 값이 변경되었을때 리랜더링
//3. 부모 컴포넌트가 리랜더링 되었을때 자식 컴포넌트도 리랜더링
//* 따라서 의미없이 부모의 상태를 자식이 props로 전달 받으면 성는이 저하됨,(부모의 상태에 영향 받으면 상관 없음)

//App 컴포넌트 //부모 컴포넌트
// 1. "/" : 모든 일기를 조화하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
      <>
        {/*<div>
          <img src={getEmotionImage(1)}/>
          <img src={getEmotionImage(2)}/>
          <img src={getEmotionImage(3)}/>
          <img src={getEmotionImage(4)}/>
          <img src={getEmotionImage(5)}/>

        </div>

        <div>
          <Link to={"/"}>Home </Link> client side Rendering 방식으로 라우팅하기에 a태그와 다르게 전체 페이지를 다시 불러올 필요가 없음
          <Link to={"/new"}>New </Link>
          <Link to={"/diary"}>Diary</Link>
          <br/>
          <a href="/">Home </a>
          <a href="/new">New </a>
          <a href="/diary">Diary </a>
          <br/>
        </div>*/}
        <Header title={"header"}
                leftChild={<Button text={"Left"} onClick={() => {
                  console.log("버튼클릭")
                }}/>}
                rightChild={<Button text={"Right"} onClick={() => {
                  console.log("버튼클릭")
                }}/>}/>


        {/*Routes 컴포넌트 위에 적용되는 페이지는 모든 페이지에 공통으로 들어감*/}
        <Routes>
          {/*Route 컴포넌트 이외의 다른 태그를 하위로 두면 에러 발생*/}
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/diary/:id" element={<Diary/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </>);
}

export default App
