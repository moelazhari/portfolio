"use client"
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handelCLick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
      <button className="grid place-content-center p-2 rounded-xl hover:text-bkg hover:bg-content" onClick={handelCLick}>
          {theme === 'dark' ? <FaSun size={22} /> : <FaMoon size={22} /> }
      </button>
  )
}

export default DarkModeButton