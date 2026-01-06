import {useContext, useEffect, useMemo, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {DiaryStateContext} from "../App.jsx";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext)

  const nav = useNavigate();

  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(id));
  }, [id, data]);

  useEffect(() => {
    // 조건: 데이터가 로드됐고(length > 0) AND 아이템을 못 찾았고 AND 삭제 중이 아닐 때
    if (data.length > 0 && !curDiaryItem ) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, []); // 모든 의존성 포함 (ESLint 통과)



    return curDiaryItem;
};

export default useDiary;