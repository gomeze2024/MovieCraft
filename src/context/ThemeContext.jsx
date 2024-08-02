import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem('theme'));

  const [isLightTheme, setIsLightTheme] = useState(isTrue(theme));
  const light = { bg: 'white', text: 'black', outline: '#5880a3', primary: '#eff8fd', secondary: '#ceebfa'};
  const dark = { bg: 'black', text: 'white', outline: 'white', primary: 'black', secondary: '#537dad'};

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    localStorage.setItem('theme', JSON.stringify(!isLightTheme));
  };

  function isTrue(str) {
    return str === null || str === true;
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme, light, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
