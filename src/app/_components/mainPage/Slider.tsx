'use client'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'

import Slide1 from '@/../public/SliderImages/Slide1.jpg'
import Slide2 from '@/../public/SliderImages/Slide2.jpg'
import Slide3 from '@/../public/SliderImages/Slide3.jpg'

const Slider = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'center',
        dragFree: true,
    })

    return (
        <div className='mt-6 overflow-hidden'>
            <div className='embla' ref={emblaRef}>
                <div className='embla__container flex'>
                    <div className='embla__slide min-w-[230px] sm:min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl shadow-lg'
                            src={Slide1}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>Longboard</h2>
                    </div>
                    <div className='embla__slide min-w-[230px] sm:min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl shadow-lg'
                            src={Slide2}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>Zub na VW</h2>
                    </div>
                    <div className='embla__slide min-w-[230px] sm:min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl shadow-lg'
                            src={Slide3}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>Cyklon</h2>
                    </div>
                    <div className='embla__slide min-w-[230px] sm:min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl shadow-lg'
                            src={Slide1}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>Longboard</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
