
// const axios =  require("axios");

const instance = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 1000,
    
});

// const getProducts = async(url) =>{
//     try {
//         const controller = new AbortController();
//         const {data} = await instance.get(url , {
//             signal: controller.signal,
//         });
//             console.log(data);
     
//     //cancel the req
//     controller.abort();

//     } catch (error) {
//         console.log({error})
//     }

 
// };
// getProducts('/products');


//login

const login = async () => { 
    try{
        const email=  document.getElementById("email").value ;
        const password  =  document.getElementById("pw").value ;
        const payload = {
            username: email,
            password : password,
    
        };

        const controller  = new AbortController();

        const { data } =  await instance.post("/auth/login" , payload , {
            signal: controller.signal, 
            headers: {
                'Content-Type': 'application/json'
            }

        });
        localStorage.setItem("userCredentials" ,  JSON.stringify(data));
        sessionStorage.setItem("userCredentials" ,  JSON.stringify(data));
        const userInfo = localStorage.getItem("userCredentials");
        document.getElementById("userDetails").innerHTML =  userInfo;
        //cancel the request 
        controller.abort();
        
    }
    catch(e){
        console.log({e});
    }
   
    
}

