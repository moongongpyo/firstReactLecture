import './Rd.css';
const Rd = ({todo, onUpdate,onDelete}) => {
  const onClick = () => {
    // "삭제해줘" (ID만 넘김)
    onDelete(todo.id);
  };

  const onChangeCheckbox = () => {
    // "업데이트해줘" (ID만 넘김)
    onUpdate(todo.id);
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