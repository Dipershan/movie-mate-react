import {memo} from "react";

const Todo = ({todos , addTodo}) => {
  console.log("todo child render");

  return (
    <div>
      My todos
      <br />
      <ul>
        {todos.map((todo , index)=>{
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <button onClick={addTodo}>Add new Todo</button>
    </div>
  )
}

export default memo(Todo)

//memo works usning refrential equality