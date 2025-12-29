import './Rd.css';
const Rd = ({todo, todos,todoDispatch}) => {
  const onClick = () => {
    todoDispatch({
      type: "DELETE",
      data: todo.id, // 삭제할 ID만 던져줌
    });
  };
  const onChangeCheckbox = () => {
    todoDispatch({
      type: "UPDATE",
      data: todo.id, // 수정할 ID만 던져줌
    });
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