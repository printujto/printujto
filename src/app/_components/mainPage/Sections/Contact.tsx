import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section
            id='contact'
            className='pt-20 flex flex-col gap-4 items-center'
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

            <iframe
                loading='lazy'
                src='https://3dobjectcalculator.netlify.app'
                name='iframe test'
                className='w-full'
                scrolling='no'
                height='800px'
            ></iframe>
        </section>
    )
}

export default Contact
