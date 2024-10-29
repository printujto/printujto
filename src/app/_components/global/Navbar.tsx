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

const links = [
    {
        text: 'Domů',
        link: '/',
    },
    {
        text: 'Portfolio',
        link: '#portfolio',
    },
    {
        text: 'Služby',
        link: '#sluzby',
    },
    {
        text: 'O nás',
        link: '#o-nas',
    },
    {
        text: 'Proces',
        link: '#proces',
    },
    {
        text: 'Q&A',
        link: '#qaa',
    },
    {
        text: 'Kontakt',
        link: '#kontakt',
    },
]

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false)

    const { resolvedTheme } = useTheme()
    const [logoSrc, setLogoSrc] = useState(Printujto_logo_dark) // Výchozí hodnota pro SSR

    useEffect(() => {
        if (resolvedTheme === 'light') {
            setLogoSrc(Printujto_logo_dark)
        } else {
            setLogoSrc(Printujto_logo_light)
        }

        InitialAnimation()
    }, [resolvedTheme])

    return (
        <nav className='flex fixed top-0 bg-slate-300/30 dark:bg-slate-400/30 shadow-sm backdrop-blur-md border-b-2 border-slate-700 border-opacity-5 justify-center w-full z-50'>
            <div className='w-full max-w-[1230px] flex justify-between gap-2 items-center px-2 py-2'>
                <Link href='/'>
                    <Image
                        src={logoSrc}
                        width={150}
                        alt='Printujto logo'
                    ></Image>
                </Link>

                <div className='flex items-center gap-10'>
                    <div>
                        <ul className='gap-2 sm:flex hidden'>
                            {links.map((link) => (
                                <React.Fragment key={link.link}>
                                    <NavLink
                                        url={link.link}
                                        text={link.text}
                                    ></NavLink>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className='sm:block hidden'>
                        <Button
                            text='Zjistit cenu'
                            link='/'
                            icon={
                                <CalculatorIcon className='w-5'></CalculatorIcon>
                            }
                        ></Button>
                    </div>
                    <HamburgerIcon
                        handleClick={() => setIsOpened((prev) => !prev)}
                        isOpened={isOpened}
                    ></HamburgerIcon>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
