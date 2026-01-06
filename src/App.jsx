import './App.css'
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";

import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import {createContext, useEffect, useReducer, useRef, useState} from "react";

//1. 컴포넌트는 자신이 관리하는 state가 변경되었을때 리랜더링
//2. 컴포넌트는 자신이 전달받는 props의 값이 변경되었을때 리랜더링
//3. 부모 컴포넌트가 리랜더링 되었을때 자식 컴포넌트도 리랜더링
//* 따라서 의미없이 부모의 상태를 자식이 props로 전달 받으면 성는이 저하됨,(부모의 상태에 영향 받으면 상관 없음)

//App 컴포넌트 //부모 컴포넌트
// 1. "/" : 모든 일기를 조화하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지



function reducer(state, action) {
  let nextState;

  switch (action.type) {

    case "INIT" : {
      return action.data;
    }

    case "CREATE" : {
      nextState = [action.data, ...state];
    }
      break;

    case "UPDATE" : {
      nextState = state.map(
          (item) => String(item.id) === String(action.data.id) ? action.data
              : item);
      break;
    }

    case "DELETE" : {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default : {
      return state;
    }

  }

  localStorage.setItem("diary",JSON.stringify(nextState))
  return nextState;

}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // const nav = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if (!storedData){
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData)

    let maxId = 0;

    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    parsedData.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    })

    idRef.current = maxId + 1;

    dispatch({
      type:"INIT",
      data: parsedData
    });
    setIsLoading(false);
  },[])


  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate: createdDate,
        emotionId: emotionId,
        content: content
      }
    })
  }
  //기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        createdDate: createdDate,
        emotionId: emotionId,
        content: content
      }
    })
  }
  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id
    })
  }

  if (isLoading){
    return <div>데이터 로딩중입니다 ...</div>
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


        {/*Routes 컴포넌트 위에 적용되는 페이지는 모든 페이지에 공통으로 들어감*/}
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
            <Routes>
              {/*Route 컴포넌트 이외의 다른 태그를 하위로 두면 에러 발생*/}
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>);
}

export default App
