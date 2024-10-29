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
        <div className='w-full h-full relative'>
            {/* Big images */}
            <div className='aspect-square sm:w-56 sm:h-56 w-44 h-44 rounded-3xl rotate-12 absolute top-2 left-12  bg-slate-500/50 dark:bg-pink/40 shadow-lg'></div>
            <div className=' aspect-square sm:w-56 sm:h-56 w-44 h-44 rounded-3xl overflow-hidden rotate-12 absolute top-0 left-10'>
                <Image
                    src={Printer3D}
                    width={250}
                    alt='3D Tiskárna detailní pohled'
                ></Image>
            </div>

            <div className='aspect-square sm:w-56 sm:h-56 w-44 h-44  rounded-3xl -rotate-12 absolute -bottom-4 right-4 border border-slate-500/50 dark:border-pink/40 shadow-lg'></div>
            <div className='aspect-square sm:w-56 sm:h-56 w-44 h-44 rounded-3xl overflow-hidden -rotate-12 absolute bottom-0 right-10'>
                <Image
                    src={SkullPrint3D}
                    width={250}
                    alt='3D Tisk lebky'
                ></Image>
            </div>

            {/* Details images */}

            <Image
                src={ABS}
                width={50}
                alt='ABS Materiál pro 3d tisk'
                className='absolute top-0 right-0 rotate-6 opacity-80 hover:opacity-70 duration-200 transition-all'
            ></Image>
            <Image
                src={PET}
                width={40}
                alt='PET Materiál pro 3d tisk'
                className='absolute top-24 -rotate-12 right-12 opacity-60 hover:opacity-70 duration-200 transition-all'
            ></Image>
            <Image
                src={ASA}
                width={55}
                alt='ASA Materiál pro 3d tisk'
                className='absolute rotate-6 bottom-16 right-72 opacity-90 hover:opacity-80 duration-200 transition-all'
            ></Image>
            <Image
                src={PLA}
                width={40}
                alt='PLA Materiál pro 3d tisk'
                className='absolute rotate-3 bottom-32 left-0 opacity-60 hover:opacity-70 duration-200 transition-all'
            ></Image>

            <Image
                src={Ornament1}
                id='ornament1'
                width={60}
                alt='Zakázkový 3D tisk'
                className='absolute top-40 left-[300px] opacity-90 hover:opacity-80 duration-200 transition-all'
            ></Image>
        </div>
    )
}

export default HeroImage
