import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Printujto_logo from '@/../public/Printujto_logo_dark.png'
import Button from './Button'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center w-full'>
            <div className='w-full p-4 max-w-[1230px] flex flex-col border-t-2 border-slate-700 border-opacity-5 pt-12'>
                <div className='flex gap-6 w-full justify-around'>
                    <div className='w-full'>
                        <Link href='/'>
                            <Image
                                src={Printujto_logo}
                                width={150}
                                alt='Printujto logo'
                            ></Image>
                        </Link>
                        <ul className='mt-2'>
                            <li className='font-bold'>Jan středula</li>
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
                        <div className='flex justify-end'>
                            <Button text='Vypočítat cenu' link='/'></Button>
                        </div>
                    </div>
                </div>

                <div className='mt-4 flex justify-end pt-2 w-full border-t-2 border-slate-700 border-opacity-10'>
                    <p className='text-sm'>© 2024 Printujto.cz</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
