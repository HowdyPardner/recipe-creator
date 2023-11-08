import { createContext, useEffect, useState } from "react";
export const mainContext = createContext();

const MainProvider = (props) => {
    const [] = useState([])
  return (
    <mainContext.Provider value={{

    }}>
        {props.children}
    </mainContext.Provider>
    )
} 
export default MainProvider
   