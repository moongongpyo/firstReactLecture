import "./Main.css"
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 즉, if문 반복문 등은 못쓴다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 즉 true, undefined, null, 객체와 같은 값은 랜더링 안됨.
// 3. html과 달리 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. 딱히 쓸만한 태그가 없으면 빈 태그로 감싸주면 된다.
const Main = () => {
  const user = {
    name : "이정환",
    isLogin: true,
  };

  if (user.isLogin){
    return <div className="logout">login</div>
  }else{
    return <div>logout</div>
  }
};

export default Main;