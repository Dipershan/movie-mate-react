import "./App.css";
import Navbar from "./Navbar";

import { useContext } from "react";
import {intialContext} from './context/ThemeContext';



const App = () => {
  const context =  useContext(intialContext);
  if(!context) throw new Error("COntext must be wraped inside provider")

  return (
    <div>
    <Navbar />    
      <h1 className="dark">Title</h1>

    </div>
  )
}

export default App