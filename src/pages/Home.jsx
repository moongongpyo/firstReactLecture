import {useSearchParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {DiaryStateContext} from "../App.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1,
      0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0,
      23, 59, 59).getTime();// 마지막 달 을 구하는 방법


  return data.filter((item) =>
      beginTime <= item.createdDate && item.createdDate <= endTime);

}

const Home = () => {
  usePageTitle("감정 일기장");

  /* const [params,setParams] = useSearchParams();
   const value = params.get("value");
   console.log(value)
   setParams({ value: "hi" })
   useEffect(() => {
     // 컴포넌트가 마운트될 때 value가 없으면 "hi"로 설정
     if (!value) {
       setParams({ value: "hi" });
     }
   }, [value, setParams]);*/

  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (<div>
        <Header
            title={`${pivotDate.getFullYear()} 년 ${pivotDate.getMonth() + 1} 월`}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}/>
        <DiaryList data={monthlyData}/>
      </div>
  );
}

export default Home