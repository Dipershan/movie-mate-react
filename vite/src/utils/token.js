export const getToken = (key="access_token") =>{
    return localStorage.getItem(key);


};

export const setToken = (key="acess_token" ,  data) =>{
    return  localStorage.setItem(key ,  JSON.stringify(data))

};
export const removeToken = (key="access_token")=>{
    return localStorage.removeItem(key); 

};