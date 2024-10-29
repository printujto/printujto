import React from 'react'
import Button from '../../global/Button'
import ArrowUpRight from '@/app/_icons/ArrowUpRight'
import HeroImage from '../HeroImage'

const Hero = () => {
    return (
        <section
            id='hero'
            className='lg:h-screen h-fit mt-40 lg:mt-0 flex lg:flex-row flex-col lg:gap-0 items-center overflow-hidden pb-10'
        >
            <div className='lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
                <h1 className='text-6xl'>Zakázkový 3D tisk</h1>
                <p className='text-xl mt-3 sm:w-2/3'>
                    Profesionální a přesný 3D tisk, který promění vaše nápady v
                    realitu. Poskytujeme kvalitní tisk s různými materiály pro
                    rychlé prototypování, náhradní díly a kreativní projekty.
                </p>

                <Button
                    text='Poptat 3D tisk'
                    link=''
                    className='py-3 px-8 mt-4'
                    icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                ></Button>
            </div>
            <div className='flex-1 w-full aspect-square h-fit md:max-h-[500px] max-w-[550px] lg:mt-0 mt-24'>
                <HeroImage></HeroImage>
            </div>
        </section>
    )
}

export default Hero
