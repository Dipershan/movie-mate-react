import axios from "axios";


 export const instance  =  axios.create({
    baseURL:"https://dummyjson.com/",
    timeout:10000,
    
});


