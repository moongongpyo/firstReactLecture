

const Button = ({children, text, color = "black"}) => {

  //인벤트 객체
  const onClick = (e) =>{
    console.log(e);
    console.log(text)
  }

  return <button onClick={onClick} /*onMouseEnter={onClick}*/ style={{ color: color}}>
    {text} - {color.toUpperCase()}
    {children}
  </button>
}

 export default Button;