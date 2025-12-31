import './Rd.css';
import { useContext} from "react";
import {TodoContext} from "./Todo.jsx";
const ListItem = ({id,isDone,content,date}) => {

  const {onDelete,onUpdate} = useContext(TodoContext)

  const onClick = () => {
    // "삭제해줘" (ID만 넘김)
    onDelete(id);
  };

  const onChangeCheckbox = () => {
    // "업데이트해줘" (ID만 넘김)
    onUpdate(id);
  };
  return <>
    <div className='Rd'>
      <input
          type='checkbox'
          checked={isDone}
          onChange={onChangeCheckbox}
      />
      <div className='contents'>{content}</div>
      <div className='date'>
        {date.toLocaleDateString()}
      </div>
      <button onClick={onClick}>삭제</button>
    </div>

  </>;
}


export default ListItem;