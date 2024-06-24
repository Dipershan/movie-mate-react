import { useState  ,  useRef} from "react";


const App = () => {
  const formRef = useRef();
  // const [error ,  setError] =  useState({email:"" , message:""})
  const [payload  ,setPayload] = useState({
    email:"",
    message:"",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(payload);
  };

  // const validateFormData = (formData) =>{
  //   const {email ,  msg} = formData;
  //   if(email.includes("@")){
  //     return true;
  //   }
  //   else{
      
  //   }
  // };

  const handleUncontrolledSubmit =  (e) =>{
    e.preventDefault();
    const data  =  formRef.current;
    const formData  =  new FormData(data);
    for(const value of formData.values()){
      console.log(value);
    }
  };

  return (
    <>
      <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e)=>
                setPayload((prev)=>{
                  return{...prev ,  email: e.target.value};
                })
              } 
              />

          </div>
              

          <div className="mb-3">
              <label className="form-label">Message</label>
              <input type="text"
              className="form-control"
              placeholder="Message"
              onChange={(e)=>
                setPayload((prev)=>{
                  return{...prev ,  message: e.target.value};
                })
              } 
              />

          </div>

          <button type="submit">Submit</button>
      </form>
  </div>

    <br />
    <br />

    <div className="container">
      <h2>Uncontrolled From</h2>
      <form onSubmit={(e) => handleUncontrolledSubmit(e)} ref={formRef}>
          <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email"
              className="form-control"
              placeholder="name@example.com"
        
              />

          </div>
              

          <div className="mb-3">
              <label className="form-label">Message</label>
              <input type="text"
              className="form-control"
              placeholder="Message"

              />

          </div>

          <button type="submit">Submit</button>
      </form>


    </div>
    </>
    
  )
}

export default App