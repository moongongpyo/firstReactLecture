import './App.css'
import Header from "./components/Header";
import Main from "./components/main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";


//App 컴포넌트 //부모 컴포넌트
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3
  }
  return (
      <>
       <Button {...buttonProps}/>
       <Button text={"카페"}/>
       <Button text={"블로그"}>
        <Header/>
       </Button>
    </>
  )
}

export default App
