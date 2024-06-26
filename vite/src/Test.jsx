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
  


  //js 
  // const data  =  [
  //   {name: "BMW" ,  model :2009},
  //   {name: "Mercedes" ,  model :2010},
  // ];
  // const detail ={
  //   name:"Tesla",
  //    model:2099,
  //    color:"red",
  // };
  



  //Login related sab

//   import { useState  ,  useRef} from "react";


// const App = () => {
//   const formRef = useRef();
//   // const [error ,  setError] =  useState({email:"" , message:""})
//   const [payload  ,setPayload] = useState({
//     email:"",
//     message:"",
//   });

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(payload);
//   };

//   // const validateFormData = (formData) =>{
//   //   const {email ,  msg} = formData;
//   //   if(email.includes("@")){
//   //     return true;
//   //   }
//   //   else{
      
//   //   }
//   // };

//   const handleUncontrolledSubmit =  (e) =>{
//     e.preventDefault();
//     const data  =  formRef.current;
//     const formData  =  new FormData(data);
//     for(const value of formData.values()){
//       console.log(value);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//       <form onSubmit={(e) => handleSubmit(e)}>
//           <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email"
//               className="form-control"
//               placeholder="name@example.com"
//               onChange={(e)=>
//                 setPayload((prev)=>{
//                   return{...prev ,  email: e.target.value};
//                 })
//               } 
//               />

//           </div>
              

//           <div className="mb-3">
//               <label className="form-label">Message</label>
//               <input type="text"
//               className="form-control"
//               placeholder="Message"
//               onChange={(e)=>
//                 setPayload((prev)=>{
//                   return{...prev ,  message: e.target.value};
//                 })
//               } 
//               />

//           </div>

//           <button type="submit">Submit</button>
//       </form>
//   </div>

//     <br />
//     <br />

//     <div className="container">
//       <h2>Uncontrolled From</h2>
//       <form onSubmit={(e) => handleUncontrolledSubmit(e)} ref={formRef}>
//           <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email"
//               className="form-control"
//               placeholder="name@example.com"
        
//               />

//           </div>
              

//           <div className="mb-3">
//               <label className="form-label">Message</label>
//               <input type="text"
//               className="form-control"
//               placeholder="Message"

//               />

//           </div>

//           <button type="submit">Submit</button>
//       </form>


//     </div>
//     </>
    
//   )
// }

// export default App





// import { useCallback, useState } from 'react'
// import Todo from './Todo'


// const App = () => {

// const [count ,  setCount] = useState(0);
// const [todos ,  setTodos] =  useState([]);

// const increment = () =>{
//   setCount((c)=> c+1);
// };


// //useCall back syntax useCallback(cbFn , dependency) 


// const addTodo =useCallback( ()=>{
//   setTodos((t)=>[...t , "New Todo List"]);
// }, [] );


//   return (
//     <>
//       <Todo todos={todos} addTodo={addTodo}/>
//       <br />
//       <p>
//         Count: {count}
//         <button onClick={increment}>increase</button>
//       </p>
//     </>
    
//   )
// }

// export default App


//wite a 2 components
//1App
//a make the api calls using custom hook and use effect
//pojemon.jsx props pokemonArray  , offset
//a change offset value from pokemon jsx