import { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({children}) => {
  const my = "Hellp Keyur";
  const [user, setUser] = useState(null);
  
  const [themeMode, setThemeMode] = useState("light")
  return (
    <ThemeContext.Provider value={{user, setUser, my, themeMode, setThemeMode}} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;