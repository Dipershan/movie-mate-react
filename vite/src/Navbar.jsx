import  { useContext } from 'react'
import{intialContext} from "./context/AppContext"

const Navbar = () => {
    const  context =  useContext(intialContext);
    if(!context) throw new Error ("COntext is not wrappped inside provider");
    const {name :user ,  setName} = context;

  return (
    <div>Navbar HO Guyz,{user}
        <input placeholder='Enter new Name'
        onChange={(e)=> setName(e.target.value)}
        />
    </div>
  )
}

export default Navbar;