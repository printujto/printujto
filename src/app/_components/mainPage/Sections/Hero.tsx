import React from 'react'
import Button from '../../global/Button'
import ArrowUpRight from '@/app/_icons/ArrowUpRight'
import Image from 'next/image'
import HeroImg from '@/../public/HeroImages/3dobj2.png'

const Hero = () => {
    return (
        <section
            id='uvod'
            className='mt-32 lg:mt-0 lg:h-screen h-fit flex lg:flex-row flex-col gap-10 lg:gap-0 items-center'
        >
            <div className='lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
                <h1 className='sm:text-7xl text-5xl'>Zakázkový 3D tisk</h1>
                <p className='text-lg sm:text-xl mt-3 sm:w-4/5'>
                    Profesionální a přesný 3D tisk, který promění vaše nápady v
                    realitu. Poskytujeme kvalitní tisk s různými materiály pro
                    rychlé prototypování, náhradní díly a kreativní projekty.
                </p>
                <div className='flex flex-col sm:flex-row items-center  sm:gap-4'>
                    <Button
                        text='Naše služby'
                        link='/#nase-sluzby'
                        variant='withoutBg'
                        className='py-4 px-14 mt-4'
                        icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                    ></Button>
                    <Button
                        text='Poptat 3D tisk'
                        link='/#formular'
                        className='py-4 px-14 mt-4'
                        icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                    ></Button>
                </div>
            </div>
            <div
                className='flex-1filter: brightness-75 opacity-80'
                id='heroImage3'
            >
                <Image
                    src={HeroImg}
                    priority
                    width={600}
                    alt='heroImage'
                ></Image>
            </div>
        </section>
    )
}

export default Hero
