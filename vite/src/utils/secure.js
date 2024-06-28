//JWT TOKEN
//# sceneraios to handle during token check


import { getToken  } from "./token";
 

export const isValidToken =()=>{
    const token =  getToken();
    if(!token) return false;
    //token expiry
    //proper oken check
    return true;
};

export const isValidRole = (sysRoles=[] ,  userRoles= [])=>{
    if(sysRoles.lenth ===0) return true;
    return sysRoles.some((role) => userRoles.includes(role));
};