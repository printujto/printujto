'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Printujto_logo from '@/../public/Printujto_logo_dark.png'
import Link from 'next/link'
import HamburgerIcon from './HamburgerIcon'
import NavLink from './NavLink'
import Button from './Button'
import CalculatorIcon from '@/app/_icons/CalculatorIcon'

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

    return (
        <nav className='flex fixed top-0 bg-slate-300 shadow-sm bg-opacity-45 backdrop-blur-sm border-b-2 border-slate-700 border-opacity-5 justify-center w-full'>
            <div className='w-full max-w-[1230px] flex justify-between gap-2 items-center px-2 py-2'>
                <Link href='/'>
                    <Image
                        src={Printujto_logo}
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
