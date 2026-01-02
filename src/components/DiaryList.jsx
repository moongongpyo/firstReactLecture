import React from 'react';
import Button from "./Button.jsx";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem.jsx";

const DiaryList = () => {
  const onButtonClick = () =>{

  }
  return (
      <div className="DiaryList">
          <div className="menu_bar">
            <select>
              <option value={"latest"}>최신순</option>
              <option value={"oldest"}>오래된 순</option>
            </select>
            <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={onButtonClick}/>
          </div>
          <div className="list_wrapper">
            <DiaryItem/>
            <DiaryItem/>
            <DiaryItem/>
          </div>
      </div>
  );
};

export default DiaryList;