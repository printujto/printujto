import React from 'react'
import Image from 'next/image'
import BgGradient from '@/../public/BgGradient.svg'

const Background = () => {
    return (
        <figure className='fixed z-0 w-screen h-screen bg-gradient-to-br from-violet/10 from-30% to-pink/10 pointer-events-none'>
            <Image
                id='background_blur_1'
                className='fixed -top-[100px] -left-[200px] md:-top-[10px] md:-left-[20px] opacity-15 blur-6xl pointer-events-none z-0'
                src={BgGradient}
                width={600}
                alt='Obrázek barevného přechodu na webu Printujto'
            ></Image>

            <Image
                id='background_blur_2'
                className='fixed blur-6xl -bottom-[200px] -right-[200px] md:-bottom-[50px] md:-right-[20px] opacity-[0.16] pointer-events-none z-0'
                src={BgGradient}
                width={500}
                alt='Obrázek barevného přechodu na webu Printujto'
            ></Image>
        </figure>
    )
}

export default Background
