import React from 'react'
import Image from 'next/image'
import PrinterImage from '@/../public/HeroImages/3DPrinter.jpg'

const OurValues = () => {
    return (
        <section>
            <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                <div className='flex-1 md:flex-2 flex flex-col justify-between'>
                    <div>
                        <h2 className='mt-4'>Naše hodnoty</h2>
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
                </div>
                <div className='sm:flex-1 flex-2 md:aspect-square aspect-video h-fit rounded-xl overflow-hidden flex relative'>
                    <Image
                        src={PrinterImage}
                        width={500}
                        alt={'3D tiskárna v akci'}
                        className='w-full rounded-xl object-cover'
                    ></Image>
                    <div className='md:hidden block absolute w-full h-full bg-black/40 top-0 left-0'></div>
                </div>
            </div>
        </section>
    )
}

export default OurValues
