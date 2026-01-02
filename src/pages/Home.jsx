import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const Home = () => {
  const [params,setParams] = useSearchParams();
  const value = params.get("value");
  console.log(value)
  setParams({ value: "hi" })
  useEffect(() => {
    // 컴포넌트가 마운트될 때 value가 없으면 "hi"로 설정
    if (!value) {
      setParams({ value: "hi" });
    }
  }, [value, setParams]);
  return <div>Home</div>
}

export default Home