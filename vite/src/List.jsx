import { useState  } from "react";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";


  
  
  const List  =  ( )=>{
    
    const [search , setSearch] =  useState("");

    const {result}  =  useDebounce({ searchTerm:search});

    const {loading ,  error ,  data} = useFetch({
      url:`recipes/search?q=${result}`,
    });

    return <>
  
    <input 
    placeholder="Search by recipe"
    onChange={(e)=>setSearch(e.target.value)} 
    />
      {error && JSON.stringify(error)}
      {loading? <>Data Loading..</> :JSON.stringify(data.recipes)}</>;
    }

    





export default List;