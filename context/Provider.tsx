'use client'
import { createContext, useContext, useEffect, useState } from 'react'


const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}



const ContentProvider = ({children}:contextType) => {

  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  return (
    <StateContext.Provider value={ {theme, handleThemeChange}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)