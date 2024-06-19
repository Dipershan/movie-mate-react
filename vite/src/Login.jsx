import Invalid from "./Invalid";
import Welcome from "./Welcome";


 const Login = () => {
    //js
    const handleSubmit =(e)=>{
        e.preventDefault();
        const password =  document.getElementById("pw").value;
        const username =  document.getElementById("un").value;
        

        if(username=== password){
            return true;

        }
        else{
            return false;
        }

    };
  return (
    <div>
        <form action="" onSubmit={()=>handleSubmit(e)}>
            <input type="text" placeholder="username" id="un"  />
            <input type="text" placeholder="password" id="pw" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Login;
