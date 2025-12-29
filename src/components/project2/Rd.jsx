import './Rd.css';
const Rd = ({todo, todos,setTodos}) => {
  const onClick = () =>{
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  const onChangeCheckbox = () => {
    setTodos(
        todos.map((item) =>
            item.id === todo.id
                ? { ...item, isDone: !item.isDone }
                : item
        )
    );
  };
  return <>
    <div className='Rd'>
      <input
          type='checkbox'
          checked={todo.isDone}
          onChange={onChangeCheckbox}
      />
      <div className='contents'>{todo.content}</div>
      <div className='date'>
        {todo.date.toLocaleDateString()}
      </div>
      <button onClick={onClick}>삭제</button>
    </div>

  </>;
}

export default Rd;