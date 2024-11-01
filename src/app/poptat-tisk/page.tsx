import React from 'react'
import Button from '../_components/global/Button'
import ArrowUpRight from '../_icons/ArrowUpRight'

const Calculator = () => {
    return (
        <div className='mt-32'>
            <div className='flex flex-col lg:flex-row gap-10 w-full mt-10'>
                <section className='flex-1 text-center lg:text-left'>
                    <h2>Nemáte vlastní 3D model?</h2>
                    <p>Rádi ho pro vás vyhotovíme dle vašich představ</p>
                    <p>Stačí když vyplníte náš formulář</p>

                    <Button
                        text='Poptávkový formulář'
                        link=''
                        className='py-4 px-14 mt-4 justify-self-center lg:justify-self-start'
                        icon={<ArrowUpRight className='w-4'></ArrowUpRight>}
                    ></Button>
                    <div className='w-96 h-[1.5px] mx-auto lg:mx-0 bg-black/15 dark:bg-slate-400/10 mt-20'></div>
                    <h2 className='mt-20'>Jak spočítat cenu</h2>
                    <div className='w-full flex justify-center'>
                        <ul className=' text-left  pl-4 lg:w-full w-[400px]  list-disc mt-4'>
                            <li>
                                Vložte svůj model ve formátu STL, STP nebo OBJ
                            </li>
                            <li>Zadejte vámi požadované parametry</li>
                            <li>Minimální hodnota tisku je 200 Kč</li>
                            <li>
                                Pokud vám bude cena vyhovovat, dokončete svou
                                nezávaznou poptávku v dalším kroku
                            </li>
                            <li>Cena je pouze orientační!</li>
                        </ul>
                    </div>
                </section>
                <section className=' flex-1 flex flex-col gap-2 items-center'>
                    <h2>Vypočítat cenu tisku</h2>
                    <p className='text-center'>
                        Vložte svůj 3d model a spočítejte si vašeho tisku
                    </p>

                    <div className='w-full sm:w-[450px]'>
                        <div className='shadow-md bg-gray-100/50 dark:bg-gray-200/40 border-gray-400/50 dark:border-gray-800/50 border-2 rounded-2xl p-2 w-full'>
                            <iframe
                                src='https://3dobjectcalculator.netlify.app'
                                name='Calculator iframe'
                                className='w-full'
                                height='680px'
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Calculator
