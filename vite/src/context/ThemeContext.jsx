import {createContext, useState} from 'react'

export const intialContext =  createContext(null);

const ThemeContext  =({children}) =>{
    const [theme ,  setTheme] = useState("ligth");


    const toggleTheme = () =>{
        setTheme(theme == "light" ? "dark":"light")
    }

    
  return(
     <intialContext.Provider value={{theme ,  toggleTheme}}>
        {children}
    </intialContext.Provider>)
  ;
}


export default ThemeContext ;