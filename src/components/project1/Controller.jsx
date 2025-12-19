const Controller = ({count, setCount}) => {

  let onclick = (e) => {
    console.log(e.target.value);
    setCount(count + Number(e.target.value));
  }
  return <>
    <button onClick={onclick} value="-1">-1</button>
    <button onClick={onclick} value="-10">-10</button>
    <button onClick={onclick} value="-100">-100</button>
    <button onClick={onclick} value="100">+100</button>
    <button onClick={onclick} value="10">+10</button>
    <button onClick={onclick} value="1">+1</button>
  </>;
}

export default Controller;