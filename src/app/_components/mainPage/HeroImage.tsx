import React from 'react'
import Image from 'next/image'
import Printer3D from '@/../public/HeroImages/3DPrinter.jpg'
import SkullPrint3D from '@/../public/HeroImages/3DSkullPrint.jpg'
import ABS from '@/../public/HeroImages/ABS.png'
import PET from '@/../public/HeroImages/PET.png'
import ASA from '@/../public/HeroImages/ASA.png'
import PLA from '@/../public/HeroImages/PLA.png'
import Ornament1 from '@/../public/HeroImages/Ornament1.png'

const HeroImage = () => {
    return (
        <div className='w-full h-full relative' id='hero-image'>
            {/* Big images */}
            <div className='aspect-square sm:w-56 sm:h-56 w-1/2 h-1/2 rounded-3xl rotate-12 absolute top-2 left-12  bg-slate-500/50 dark:bg-pink/40 shadow-lg hero-image-1'></div>
            <div className='aspect-square sm:w-56 sm:h-56 w-1/2 h-1/2 rounded-3xl overflow-hidden rotate-12 absolute top-0 left-10 hero-image-1'>
                <Image
                    src={Printer3D}
                    width={250}
                    alt='3D Tiskárna detailní pohled'
                    className='w-full'
                    priority
                ></Image>
            </div>

            <div className='aspect-square sm:w-56 sm:h-56 w-1/2 h-1/2  rounded-3xl -rotate-12 absolute -bottom-4 right-4 border border-slate-500/50 dark:border-pink/40 shadow-lg hero-image-2'></div>
            <div className='aspect-square sm:w-56 sm:h-56 w-1/2 h-1/2 rounded-3xl overflow-hidden -rotate-12 absolute -bottom-2 right-8 hero-image-2'>
                <Image
                    src={SkullPrint3D}
                    width={250}
                    alt='3D Tisk lebky'
                    className='w-full'
                    priority
                ></Image>
            </div>

            {/* Details images */}

            <div className='sm:w-12 sm:h-12 h-8 w-8 absolute top-0 right-0 rotate-6 opacity-80 hover:opacity-70 duration-200 transition-all hero-small-image'>
                <Image
                    src={ABS}
                    width={50}
                    alt='ABS Materiál pro 3d tisk'
                    className='w-full'
                ></Image>
            </div>

            <div className='sm:w-14 sm:h-14 h-10 w-10 absolute sm:top-24 top-20 -rotate-12 right-12 opacity-60 hover:opacity-70 duration-200 transition-all hero-small-image'>
                <Image
                    src={PET}
                    width={40}
                    alt='PET Materiál pro 3d tisk'
                    className='w-full'
                ></Image>
            </div>
            <div className='sm:w-14 sm:h-14 h-8 w-8 absolute rotate-6 sm:top-80 bottom-10 left-24 sm:left-32 opacity-90 hover:opacity-80 duration-200 transition-all hero-small-image'>
                <Image
                    src={ASA}
                    width={55}
                    alt='ASA Materiál pro 3d tisk'
                    className='w-full'
                ></Image>
            </div>

            <div className='sm:w-12 sm:h-12 h-8 w-8 absolute rotate-3 sm:top-60 top-52 left-0 opacity-60 hover:opacity-70 duration-200 transition-all hero-small-image'>
                <Image
                    src={PLA}
                    width={40}
                    alt='PLA Materiál pro 3d tisk'
                    className='w-full'
                ></Image>
            </div>

            <div className='w-12 h-12 sm:w-14 sm:h-14 absolute sm:top-40 sm:left-[300px] right-[20px] top-32 opacity-90 hover:opacity-80 duration-200 transition-all hero-small-image'>
                <Image
                    src={Ornament1}
                    width={60}
                    alt='Zakázkový 3D tisk'
                    className='w-full'
                ></Image>
            </div>
        </div>
    )
}

export default HeroImage
