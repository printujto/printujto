import React from 'react'
import Image from 'next/image'
import DavidHafernik from '@/../public/OurTeamImages/DavidHafernik.jpg'
import TomasHrbek from '@/../public/OurTeamImages/TomasHrbek.jpg'
import JanStredula from '@/../public/OurTeamImages/JanStředula.jpg'

const OurTeam = () => {
    return (
        <section>
            <h1 className='text-center'>Náš tým</h1>
            <div className='flex flex-wrap sm:flex-nowrap justify-center gap-14 md:gap-20 mt-10'>
                <div className='sm:mt-6 md:mt-10'>
                    <div className='w-32 h-32 md:w-40 md:h-40 p-2 rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2'>
                        <Image
                            src={TomasHrbek}
                            width={140}
                            alt='David Haferník'
                            className='rounded-2xl'
                        ></Image>
                    </div>

                    <h2 className='text-xl opacity-80 mt-2 text-center'>
                        Tomáš Hrbek
                    </h2>
                    <p className='text-center'>3D tisk, Objednávky</p>
                </div>

                <div>
                    <div className='w-32 h-32 md:w-40 md:h-40 p-2 rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2'>
                        <Image
                            src={JanStredula}
                            width={140}
                            alt='Jan Středula'
                            className='rounded-2xl'
                        ></Image>
                    </div>

                    <h2 className='text-xl opacity-80 mt-2 text-center'>
                        Jan Středula
                    </h2>
                    <p className='text-center'>3D tisk, 3D skenování</p>
                </div>

                <div className='sm:mt-6 md:mt-10'>
                    <div className='w-32 h-32 md:w-40 md:h-40 p-2 rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2'>
                        <Image
                            src={DavidHafernik}
                            width={140}
                            alt='David Haferník'
                            className='rounded-2xl'
                        ></Image>
                    </div>

                    <h2 className='text-xl opacity-80 mt-2 text-center'>
                        David Haferník
                    </h2>
                    <p className='text-center'>CAD, Prototyping</p>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
