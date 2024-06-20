import { useState ,  useEffect } from "react";
import { instance } from "./utils/axios";

//Scneraio no1  (Countdown)
// const List  = () =>{
//     const [count ,  setCount] =  useState(10);

//     useEffect(()=>{
//       //Logic
//       if(count <=0) return;
//       setTimeout(()=>{
//         setCount(count -1);
//       }  , 1000)
      
//     })

//     return <>{count}</>


// };

//Scenario no2
const List = () =>{
  //API URL : https://dummyjson.com/recipes/search
    const [data , setData] = useState([]);

    useEffect(()=>{
      const fetchRecipes = async() =>{
        const {data}  =  await instance.get('recipes/search');
        setData(data.recipes);

      };
      fetchRecipes();
    } , []);

  return <>{JSON.stringify(data)}</>;

  
  
};


export default List;