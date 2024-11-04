import Link from 'next/link'
import React from 'react'

const DemandForm = () => {
    return (
        <section
            id='formular'
            className=' flex flex-col gap-4 items-center pt-20'
        >
            <h1 className='text-center'>Poptat zakázku</h1>

            <p className=' w-full sm:w-2/3'>
                Zašlete nám váš požadavek a my vás zpětně kontaktujeme s
                cenouvou nabídkou. Pokud již máte svůj 3D model, můžete zakázku
                poptat přes náš{' '}
                <Link href={'/poptat-tisk'}>
                    Kalkulátor a získat aktuální cenu.
                </Link>
            </p>

            <div className='w-full max-w-xl'>
                <div className=' shadow-md bg-gray-100/50 dark:bg-gray-200/40 border-gray-400/50 dark:border-gray-800/50 border-2 rounded-2xl p-2'>
                    <iframe
                        src='https://3dobjectcalculator.netlify.app/poptavka'
                        name='Demand form'
                        className='w-full h-[630px] sm:h-[610px]'
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default DemandForm
