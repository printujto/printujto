'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Printujto_logo_dark from '@/../public/Printujto_logo_dark.png'
import Printujto_logo_light from '@/../public/Printujto_logo_light.png'

import Button from './Button'
import CalculatorIcon from '@/app/_icons/CalculatorIcon'
import { useTheme } from 'next-themes'

const Footer = () => {
    const { resolvedTheme } = useTheme()
    const [logoSrc, setLogoSrc] = useState(Printujto_logo_dark) // Výchozí hodnota pro SSR

    useEffect(() => {
        if (resolvedTheme === 'light') {
            setLogoSrc(Printujto_logo_dark)
        } else {
            setLogoSrc(Printujto_logo_light)
        }
    }, [resolvedTheme])

    return (
        <footer className='flex flex-col items-center justify-center w-full mt-20'>
            <div className='w-full p-4 max-w-[1230px] flex flex-col'>
                <div className='w-full  h-[1.5px] bg-black/15 dark:bg-slate-400/10'></div>
                <div className='flex sm:flex-row flex-col gap-6 w-full justify-around mt-10'>
                    <div className='w-full'>
                        <Link href='/'>
                            <Image
                                src={logoSrc}
                                width={150}
                                alt='Printujto logo'
                            ></Image>
                        </Link>
                        <ul className='mt-2'>
                            <li className='font-bold'>Jan Středula</li>
                            <li>
                                <span className='font-bold'>IČO:</span> 02269252
                            </li>
                            <li>
                                <span className='font-bold'>Adresa:</span> A.
                                Dvořáka 201, Podbořany 4410
                            </li>
                            <li>
                                <span className='font-bold'>Tel:</span>{' '}
                                <a href='tel:+420 774 577 446'>
                                    +420 774 577 446
                                </a>
                            </li>
                            <li>
                                <span className='font-bold'>Email:</span>{' '}
                                <a href='mailto:info@printujto.cz'>
                                    info@printujto.cz
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4>Odkazy</h4>

                        <ul className='mt-2'>
                            <li>
                                <a href=''>Domu</a>
                            </li>
                            <li>
                                <a href=''>Portfolio</a>
                            </li>
                            <li>
                                <a href=''>Služby</a>
                            </li>
                            <li>
                                <a href=''>O nás</a>
                            </li>
                            <li>
                                <a href=''>Proces</a>
                            </li>
                            <li>
                                <a href=''>Q&A</a>
                            </li>
                            <li>
                                <a href=''>Kontakt</a>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col justify-between'>
                        <div>
                            <h4>Užitečné odkazy</h4>
                            <ul className='mt-2'>
                                <li>
                                    <a href=''>Zpracování osobních údajů</a>
                                </li>
                                <li>
                                    <a href=''>Doprava a platba</a>
                                </li>
                            </ul>
                        </div>

                        <Button
                            className='sm:justify-self-start justify-self-end'
                            text='Vypočítat cenu'
                            link='/'
                            icon={<CalculatorIcon className='w-5' />}
                        ></Button>
                    </div>
                </div>
                <div className='w-full  h-[1.5px] bg-black/15 dark:bg-slate-400/10 mt-20'></div>
                <div className='mt-4 flex justify-end pt-2 w-full '>
                    <p className='text-sm'>© 2024 Printujto.cz</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
