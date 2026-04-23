import { createContext, useContext, useState, useEffect } from 'react'
import { THEMES, DEFAULT_THEME } from '../themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeKey] = useState(
    () => localStorage.getItem('theme') || DEFAULT_THEME
  )

  useEffect(() => {
    const vars = THEMES[theme]
    const root = document.documentElement
    Object.entries(vars).forEach(([k, v]) => {
      if (k.startsWith('--')) root.style.setProperty(k, v)
    })
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
