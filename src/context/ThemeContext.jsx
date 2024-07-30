import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const light = { bg: 'white', text: 'black', buttonOutline: '#5880a3', buttonAccent: '#eff8fd'};
  const dark = { bg: 'black', text: 'white', buttonOutline: 'white', buttonAccent: 'black'};

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
