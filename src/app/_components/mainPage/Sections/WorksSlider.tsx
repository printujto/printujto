import React from 'react'
import Slider from '../Slider'
import Button from '../../global/Button'
import ArrowUpRight from '@/app/_icons/ArrowUpRight'

const WorksSlider = () => {
    return (
        <section>
            <h1 className='text-center'>Ukázka naší práce</h1>
            <Slider></Slider>
            <div className='flex justify-center mt-10'>
                <Button
                    text='Poptat 3D tisk'
                    link=''
                    className='py-4 px-12 mt-4'
                    icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                ></Button>
            </div>
        </section>
    )
}

export default WorksSlider
