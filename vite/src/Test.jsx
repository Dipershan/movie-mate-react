//Scneraio no1  (Countdown)
// const List  = () =>{
//     const [count ,  setCount] =  useState(10);

//     useEffect(()=>{
//       //Logic
//       if(count <=0) return;
//       const timer = setTimeout(()=>{
//         setCount(count -1);
//       }  , 1000);
//       return ()=>{
//         clearTimeout(timer);
//       }
      
//     })

//     return <>{count}</>


// };

//Scenario no2
// const List = () =>{
//     //API URL : https://dummyjson.com/recipes/search
//       const [data , setData] = useState([]);
  
//       useEffect(()=>{
//         const controller =  new AbortController();
//         const fetchRecipes = async() =>{
//           const {data}  =  await instance.get('recipes/search' ,  {
//             signal: controller.signal,
//           });
//           setData(data.recipes);
  
//         };
//         fetchRecipes();
  
//         return ()=>{
//           controller.abort();
//         }
//       } , []);
  
//     return <>{JSON.stringify(data)}</>;
  
    
    
//   };
  
  //SCenario no3 
  
  // const List  =  ( )=>{
  //   const [data  , setData] =  useState([]);
  //   const [search , setSearch] =  useState("");
  
  //   useEffect(()=>{
//      const controller =  new AbortController();
  //     const fetchRecipes =  async() =>{
  //       const {data} =  await instance.get(`recipes/search?q=${search}`);\
  //        signal:controller.signal,
  //       setData(data.recipes);
  //     };
  
  //     fetchRecipes();
  // return () =>{
    //controller.abort();
    //}
  //   } , [search])
  
  
  //   return <>
    
  // <input type="text" placeholder="Search by recipe" onChange={(e)=>setSearch(e.target.value)} />
  
  //   {JSON.stringify(data)}</>;
  // }
  