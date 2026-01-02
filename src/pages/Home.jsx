import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

const Home = () => {
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

  return (<div>
        <Header title={"header"}
                leftChild={<Button text={"<"} onClick={() => {
                  console.log("버튼클릭")
                }}/>}
                rightChild={<Button text={">"} onClick={() => {
                  console.log("버튼클릭")
                }}/>}/>
        <DiaryList/>
      </div>
  );
}

export default Home