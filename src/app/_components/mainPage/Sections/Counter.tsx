import React from 'react'
import CounterDiv from '../CounterDiv'

const Counter = () => {
    return (
        <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 md:flex-row justify-around px-10 py-20'>
            <CounterDiv title={'47'} des={'Dokončené projekty'}></CounterDiv>
            <div className='sm:flex hidden justify-center'>
                <div className='w-[2px] h-full bg-black/15 dark:bg-slate-400/10'></div>
            </div>
            <CounterDiv title={'36'} des={'Spokojených zákazníků'}></CounterDiv>

            <div className=' hidden md:flex justify-center'>
                <div className='w-[2px] h-full bg-black/15 dark:bg-slate-400/10'></div>
            </div>

            <CounterDiv title={'94%'} des={'Míra spokojenosti'}></CounterDiv>
            <div className='sm:flex hidden justify-center'>
                <div className='w-[2px] h-full bg-black/15 dark:bg-slate-400/10'></div>
            </div>
            <CounterDiv title={'6'} des={'Let praxe'}></CounterDiv>
        </section>
    )
}

export default Counter
