import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/get-string-date.js";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem){
    return <div>데이터 로딩중...!</div>;
  }

  return <div>
    <Header
        title={`${getStringedDate( new Date(curDiaryItem.createdDate))} 기록` }
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => {
          nav(-1)
        }}/>}
        rightChild={<Button text={"수정하기"} onClick={()=>{
          nav(`/edit/${params.id}`)
        }}/>}
    />
    <Viewer key={curDiaryItem.id} {...curDiaryItem}/>

  </div>
}

export default Diary