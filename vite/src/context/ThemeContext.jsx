import { createContext, useState ,useContext } from 'react';

const intialContext =  createContext(null);

const ThemeContext  =({children}) =>{
    const [theme ,  setTheme] = useState("light");


    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark":"light")
    };

  return(
     <intialContext.Provider value={{theme ,  toggleTheme}}>
        {children}
    </intialContext.Provider>);

};

export default ThemeContext ;

//Custom Hook
export const useThemeContext =  () =>{
    const  context =  useContext(intialContext);
    if(!context) throw new Error ("Context is not wrappped inside provider");
    return context;
}