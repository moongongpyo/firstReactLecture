import './Td.css';
const Td = () => {
  let date = new Date();
  return <>
    <div className='Td'>
      <h3>오늘은 📆</h3>
      <h1>{date.toDateString()}</h1>
    </div>
  </>;
}

export default Td;