import {useEffect} from "react";

const Even = () => {
  // 3. 언마운트 : 죽음
  useEffect(()=>{

    //클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);//콜백 안에서 콜백을 리턴하면
  return <div>짝수입니다</div>;
};
export default Even;