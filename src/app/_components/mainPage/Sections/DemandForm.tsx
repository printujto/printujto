import Link from 'next/link'
import React from 'react'

const DemandForm = () => {
    return (
        <section
            id='formular'
            className=' flex flex-col gap-4 items-center pt-20'
        >
            <h1 className='text-center'>Máte zájem o naše služby?</h1>

            <div className='w-full max-w-xl'>
                <p>
                    Vyplňte prosím následující formulář a my vás co nejdříve kontaktujeme s cenovou nabídkou.
                </p>
                <p className='w-full sm:w-2/3'>
                    Do zprávy můžete uvést podrobnosti o vašem projektu. Pokud máte k dispozici fotografie nebo technickou dokumentaci (ve formátech JPG, JPEG, PNG, GIF nebo PDF), můžete je přiložit pomocí funkce nahrávání souborů.
                </p>
                <p className='w-full sm:w-2/3'>
                    Pokud již máte svůj 3D model (STL), můžete jej nahrát prostřednictvím našeho{' '}
                    <Link href={'/poptat-tisk'}>
                        Kalkulátoru
                    </Link>{' '}
                    a získat okamžitou cenovou nabídku.
                </p>
            </div>

            <div className='w-full max-w-xl'>
                <div className=' shadow-md bg-gray-100/50 dark:bg-gray-200/40 border-gray-400/50 dark:border-gray-800/50 border-2 rounded-2xl p-2'>
                    <iframe
                        src='https://3dcalc.netlify.app/poptavka'
                        name='Poptat 3d tisk'
                        title='Poptávkový formulář'
                        className='w-full h-[630px] sm:h-[610px]'
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default DemandForm
