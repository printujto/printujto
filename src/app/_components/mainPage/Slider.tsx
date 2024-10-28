'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import Slide1 from '@/../public/Images/Slide1.jpg'
import Slide2 from '@/../public/Images/Slide2.jpg'
import Slide3 from '@/../public/Images/Slide3.jpg'

const Slider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' })
    return (
        <div className='mt-6 overflow-hidden'>
            <div className='embla' ref={emblaRef}>
                <div className='embla__container flex'>
                    <div className='embla__slide min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl'
                            src={Slide1}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>LOngboard</h2>
                    </div>
                    <div className='embla__slide min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl'
                            src={Slide2}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>LOngboard</h2>
                    </div>
                    <div className='embla__slide min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl'
                            src={Slide3}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>LOngboard</h2>
                    </div>
                    <div className='embla__slide min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl'
                            src={Slide3}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>LOngboard</h2>
                    </div>
                    <div className='embla__slide min-w-[280px] select-none px-4'>
                        <Image
                            className='rounded-xl'
                            src={Slide3}
                            width={280}
                            alt='image 1'
                        ></Image>
                        <h2 className='text-center mt-2'>LOngboard</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
