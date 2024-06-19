// import Goal from "./Goal";
// import { conditionals } from "./conditionals";
// import Login from "./Login";
import List  from "./List"

export const App = () => {
  //js 
  const data  =  [
    {name: "BMW" ,  model :2009},
    {name: "Mercedes" ,  model :2010},
  ];
  const detail ={
    name:"Tesla",
     model:2099,
     color:"red",
  };
  return (
    <div>< data={data} car={detail}/></div>
  );
}

export default App;
