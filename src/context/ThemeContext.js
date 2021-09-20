import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "sun";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);
  
    const handleTheme = (e) => {
      if (e.target.value === "moon") {
        setTheme("sun");
      } else {
        setTheme("moon");
      }
    };
  
    const data = { theme, handleTheme };
  
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
  };
  
  export { ThemeProvider };
  export default ThemeContext;