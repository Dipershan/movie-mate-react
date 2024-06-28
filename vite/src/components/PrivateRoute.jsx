// TOken invalid = login pagge
// token match =  components

// token  match but user doesnt have proper acess => uSer authorized message => dashboard

import { isValidRole ,  isValidToken } from "../utils/secure";
import { Navigate } from "react-router-dom";

const PrivateRoute =({component ,  sysRoles=[] }) =>{
    console.log({ sysRoles });
     return <>{
     isValidToken()&& isValidRole(sysRoles) ?
      component :isValidToken() && !isValidRole(sysRoles) ?
      <Navigate replace to ="/admin"/>:
      <Navigate replace to="/login"/>

     }</>;
};



export default PrivateRoute;