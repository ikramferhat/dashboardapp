import { createContext, useState, useEffect } from 'react';

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(null);
  const [user, setUser] = useState(() => localStorage.getItem('user') ? true : false);

  const checkTheme = () => {
    const theme = localStorage.getItem('theme')
    if(theme === null || theme === 'light') {
      setIsLightTheme(true);
      document.body.setAttribute('style', 'background: #f7fafc');
    }else{
      setIsLightTheme(false);
      document.body.setAttribute('style', 'background: #363642');
    }
  }

  useEffect(() => {
    checkTheme();
  }, [])

  const contextData = {
    isLightTheme,
    setIsLightTheme,
    user,
    setUser
  };
  return isLightTheme !== null && <Context.Provider value={contextData}>{children}</Context.Provider>;
};