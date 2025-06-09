import React from 'react'
import { PiToggleLeftLight } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";

const DarkMode = () => {
        const [theme, setTheme ] = React.useState(
            localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
        )

        React.useEffect(() => {
            const element = document.documentElement

            if(theme == 'dark') {
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
        }, [theme])

        const changeTheme = () => {
            if(theme == 'light') {
                setTheme('dark')
            } else {
                setTheme('light')
            }
        }
  return (
    <>
    <div className='relative flex items-center justify-center'>
        <PiToggleLeftLight onClick={ changeTheme } className={`text-5xl absolute text-gray-800 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ${ theme == "dark" ? "opacity-0" : "opacity-100"}`}/>
        <PiToggleRightFill onClick={ changeTheme } className={`text-5xl absolute text-gray-800 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}/>
    </div>
    </>
  )
}

export default DarkMode
