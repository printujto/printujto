import React from 'react'
import PrinterImage from '@/../public/HeroImages/3DPrinter.jpg'
import Image from 'next/image'
import Button from '../../global/Button'
import PeopleIcon from '@/app/_icons/PeopleIcon'

const AboutUs = () => {
    return (
        <section id='o-nas' className='pt-20'>
            <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-10'>
                <div className='sm:flex-1 flex-2 relative'>
                    <div className='sm:flex-1 flex-2 md:aspect-square aspect-video h-fit rounded-xl overflow-hidden flex sticky top-20'>
                        <Image
                            src={PrinterImage}
                            width={500}
                            alt={'3D tiskárna v akci'}
                            className='w-full rounded-xl object-cover'
                        ></Image>
                        <div className='md:hidden block absolute w-full h-full bg-black/40 top-0 left-0'></div>
                        <div className='absolute bottom-2 right-2 w-fit h-fit md:hidden'>
                            <Button
                                className='px-8 py-3 mt-2 '
                                text='Více o nás'
                                link='/o-nas'
                                icon={<PeopleIcon className='w-6'></PeopleIcon>}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 md:flex-2 flex flex-col justify-between'>
                    <div>
                        <h1 className=''>O nás</h1>
                        <h2 className='mt-4'>Naše začátky</h2>
                        <p className='sm:text-lg'>
                            Naše firma začala s jasnou vizí: poskytovat špičkové
                            zakázkové 3D tiskové služby zákazníkům s různorodými
                            potřebami, od malých kreativních projektů po
                            rozsáhlé průmyslové prototypy. Díky naší dlouholeté
                            zkušenosti v oblasti výroby a designu jsme schopni
                            pochopit nejen technické požadavky, ale také přání
                            našich zákazníků. Začali jsme s jednoduchým cílem -
                            proměnit nápady v realitu, a postupem času jsme si
                            vybudovali silnou pověst díky kvalitnímu tisku,
                            inovativním technologiím a pečlivému přístupu ke
                            každému projektu.
                        </p>
                    </div>

                    <Button
                        className='px-8 py-3 mt-2 place-self-end hidden md:flex'
                        text='Více o nás'
                        link='/o-nas'
                        icon={<PeopleIcon className='w-6'></PeopleIcon>}
                    ></Button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
