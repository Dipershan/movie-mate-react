//remove unwanted api calls during search

import { useEffect , useState } from "react";


const  useDebounce = ({searchTerm ,  delay =1500}) =>{
     const [result ,  setResult]    =  useState("");

     useEffect(()=>{
        const timer = setTimeout(()=>{
            setResult(searchTerm);
        } ,  delay);
        return () =>{
            clearTimeout(timer);
        }
     } , [searchTerm ,  delay])
    return { result };
};

export default useDebounce;