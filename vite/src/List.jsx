import { useState ,  useEffect } from "react";

const List  = () =>{
    const [count ,  setCount] =  useState(10);

    useEffect(()=>{
      //Logic
      setTimeout(()=>{
        setCount(count -1);
      }  , 1000)
      
    })

    return <>{count}</>


};

export default List;