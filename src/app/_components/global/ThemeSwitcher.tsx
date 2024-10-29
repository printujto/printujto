'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '@/app/_icons/SunIcon'
import MoonIcon from '@/app/_icons/MoonIcon'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        const savedTheme = window.localStorage.getItem('theme')

        if (!savedTheme) {
            window.localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            setTheme(savedTheme)
        }
    }, [])

    if (!mounted) {
        return null
    }

    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button
            onClick={switchTheme}
            className='fixed bottom-4 right-4 w-8 h-8 p-0 rounded-full z-50 group/themeSwitcher hover:p-0.5 transition-all duration-200 shadow-md'
        >
            <div className='bg-black dark:bg-white w-full h-full rounded-full flex justify-center items-center'>
                {theme === 'dark' ? (
                    <SunIcon className='w-5 group-hover/themeSwitcher:stroke-pink duration-200 transition-all stroke-violet '></SunIcon>
                ) : (
                    <MoonIcon className='w-5  duration-200 transition-all stroke-white'></MoonIcon>
                )}
            </div>
        </button>
    )
}

export default ThemeSwitch
