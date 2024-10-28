import React from 'react'
import Button from '../../global/Button'
import ArrowUpRight from '@/app/_icons/ArrowUpRight'

const Hero = () => {
    return (
        <section className='h-screen flex items-center'>
            <div className='flex-2'>
                <h1 className='text-6xl'>Zakázkový 3D tisk</h1>
                <p className='text-xl mt-3 w-2/3'>
                    Profesionální a přesný 3D tisk, který promění vaše nápady v
                    realitu. Poskytujeme kvalitní tisk s různými materiály pro
                    rychlé prototypování, náhradní díly a kreativní projekty.
                </p>

                <Button
                    text='Poptat 3D tisk'
                    link=''
                    className='py-3 px-8 mt-2'
                    icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                ></Button>
            </div>
            <div className='flex-1'></div>
        </section>
    )
}

export default Hero
