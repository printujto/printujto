'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Printujto_logo_dark from '@/../public/Printujto_logo_dark.png'
import Printujto_logo_light from '@/../public/Printujto_logo_light.png'
import Link from 'next/link'
import HamburgerIcon from './HamburgerIcon'
import NavLink from './NavLink'
import Button from './Button'
import CalculatorIcon from '@/app/_icons/CalculatorIcon'
import { useTheme } from 'next-themes'
import InitialAnimation from '@/app/_animations/initialAnimation'
import { usePathname } from 'next/navigation'

const links = [
    {
        text: 'Domů',
        link: '/#uvod',
    },
    {
        text: 'O nás',
        link: '/#o-nas',
    },
    {
        text: 'Proces',
        link: '/#print-process',
    },
    {
        text: 'Q&A',
        link: '/#qaa',
    },
    {
        text: 'Poptat zakázku',
        link: '/#formular',
    },
]

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const { resolvedTheme } = useTheme()
    const [logoSrc, setLogoSrc] = useState(Printujto_logo_light)

    const path = usePathname()

    useEffect(() => {
        if (resolvedTheme === 'light') {
            setLogoSrc(Printujto_logo_dark)
        } else {
            setLogoSrc(Printujto_logo_light)
        }

        InitialAnimation(path)
    }, [resolvedTheme, path])

    return (
        <header
            className={`${
                isOpened ? 'h-[100vh] sm:h-16' : 'h-16 overflow-hidden'
            } flex fixed duration-200 transition-all top-0 bg-slate-300/30 dark:bg-slate-700/30 shadow-sm backdrop-blur-md border-b-2 border-slate-700 border-opacity-5 justify-center w-full z-50`}
        >
            <nav className='w-full h-[100svh] sm:h-full max-w-[1230px] flex flex-col  gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center px-2 py-2'>
                <div className='flex justify-between w-full items-center'>
                    <Link href='/'>
                        <Image
                            src={logoSrc}
                            width={150}
                            alt='Printujto logo'
                            priority
                        ></Image>
                    </Link>
                    <HamburgerIcon
                        handleClick={() => setIsOpened((prev) => !prev)}
                        isOpened={isOpened}
                    ></HamburgerIcon>
                </div>

                <div className='flex flex-col sm:flex-row items-center'>
                    <ul className='gap-2 sm:flex text-center'>
                        {links.map((link) => (
                            <React.Fragment key={link.link}>
                                <NavLink
                                    url={link.link}
                                    text={link.text}
                                    handleClick={() => setIsOpened(false)}
                                ></NavLink>
                            </React.Fragment>
                        ))}
                    </ul>

                    <div onClick={() => setIsOpened(false)}>
                        <Button
                            text='Kalkulátor ceny'
                            link='/poptat-tisk'
                            icon={
                                <CalculatorIcon className='w-5'></CalculatorIcon>
                            }
                        ></Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
