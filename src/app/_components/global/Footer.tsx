'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Printujto_logo_dark from '@/../public/Printujto_logo_dark.png'
import Printujto_logo_light from '@/../public/Printujto_logo_light.png'
import { useTheme } from 'next-themes'

const Footer = () => {
    const { resolvedTheme } = useTheme()
    const [logoSrc, setLogoSrc] = useState(Printujto_logo_light)

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
                                <Link href='tel:+420 774 577 446'>
                                    +420 774 577 446
                                </Link>
                            </li>
                            <li>
                                <span className='font-bold'>Email:</span>{' '}
                                <Link href='mailto:info@printujto.cz'>
                                    info@printujto.cz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4>Odkazy</h4>

                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                <Link href='/#uvod'>Domů</Link>
                            </li>
                            <li>
                                <Link href='/#o-nas'>O nás</Link>
                            </li>
                            <li>
                                <Link href='/#print-process'>Proces</Link>
                            </li>
                            <li>
                                <Link href='/#qaa'>Q&A</Link>
                            </li>
                            <li>
                                <Link href='/#formular'>Poptat zakázku</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h4>Užitečné odkazy</h4>
                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                <Link href='/obchodni-podminky'>
                                    Obchodní podmínky
                                </Link>
                            </li>
                            <li>
                                <Link href='/gdpr'>
                                    Zpracování osobních údajů
                                </Link>
                            </li>
                            <li>
                                <Link href='/doprava-a-platba'>
                                    Doprava a platba
                                </Link>
                            </li>
                            <li>
                                <Link href='/reklamace'>Reklamační řád</Link>
                            </li>
                        </ul>
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
