import React from 'react'

const CounterDiv = ({ title, des }: { title: string; des: string }) => {
    return (
        <div className='text-center'>
            <h1 className='md:text-7xl sm:text-6xl text-5xl dark:opacity-75'>
                {title}
            </h1>
            <p className='mt-4 lg:text-nowrap text-sm sm:text-base'>{des}</p>
        </div>
    )
}

export default CounterDiv
