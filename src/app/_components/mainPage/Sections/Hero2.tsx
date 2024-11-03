import React from 'react'
import Button from '../../global/Button'
import ArrowUpRight from '@/app/_icons/ArrowUpRight'
import Image from 'next/image'
import HeroImg from '@/../public/HeroImages/3dobj2.png'

const Hero = () => {
    return (
        <section
            id='hero2'
            className=' pt-52 lg:mt-0 lg:h-screen h-fit flex lg:flex-row flex-col lg:gap-0 items-center'
        >
            <div className='relative w-full lg:h-screen h-[50vh] '>
                <h1 className='lg:text-[10rem] md:text-[8rem] text-[14vw] text-center z-0 relative'>
                    Profesionální
                </h1>
                <h1 className='lg:text-[10rem] md:text-[8rem] text-[14vw] text-center z-20 relative opacity-70'>
                    3D tisk
                </h1>
                <h1 className='lg:text-[10rem] md:text-[8rem] text-[14vw] text-center z-20 relative opacity-70'>
                    Na zakázku
                </h1>
                <div className='flex flex-col items-center z-20 relative'>
                    <Button
                        text='Poptat 3D tisk'
                        link=''
                        className='py-4 px-14 mt-4'
                        icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                    ></Button>
                </div>
                <div className='absolute top-5 sm:top-12 md:top-20 left-1/2 -translate-x-1/2 w-full sm:w-2/3 z-10'>
                    <Image
                        src={HeroImg}
                        width={1000}
                        alt='heroImage'
                        className='filter: brightness-75 opacity-80'
                    ></Image>
                </div>
            </div>
            {/* <div className='lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
                <p className='text-lg sm:text-xl mt-3 sm:w-2/3'>
                    Profesionální a přesný 3D tisk, který promění vaše nápady v
                    realitu. Poskytujeme kvalitní tisk s různými materiály pro
                    rychlé prototypování, náhradní díly a kreativní projekty.
                </p>

             
            </div> */}
        </section>
    )
}

export default Hero
