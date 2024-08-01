import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const light = { bg: 'white', text: 'black', outline: '#5880a3', primary: '#eff8fd', secondary: '#ceebfa'};
  const dark = { bg: 'black', text: 'white', outline: 'white', primary: 'black', secondary: '#537dad'};

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme, light, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
