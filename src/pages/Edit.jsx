import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import Editor from "../components/Editor.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext)
  usePageTitle(`${params.id}번 일기 수정`);

  //const [curDiaryItem,setCurDiaryItem] = useState();

  const onclickDelete = () => {
    if (
        window.confirm("일를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      onDelete(params.id);
      nav("/", {replace: true})
    }
  }

  /* //리액트 버전 올라가면서 막힘
    useEffect(()=>{
      const currentDiaryItem = data.find(
          (item) => String(item.id) === String(params.id));
      if (!currentDiaryItem) {
        window.alert("존재하지 않는 일기입니다.");
        nav("/", {replace: true});
      }
      setCurDiaryItem(currentDiaryItem);

    },[params.id,data])
  */

  const curDiaryItem = useDiary(params.id);

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId,
          input.content);
      nav("/", {replace: true})
    }
  }

  return (
      <div>
        <Header
            title={"일기 수정하기"}
            leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>}
            rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}
                                onClick={onclickDelete}/>}
        />
        <Editor initData={curDiaryItem} onClickSubmitButton={onSubmit}/>
      </div>
  );
};

export default Edit;