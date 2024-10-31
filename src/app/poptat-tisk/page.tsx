import React from 'react'

const Calculator = () => {
    return (
        <div className='mt-40'>
            <div className='flex justify-center'>
                <div className='shadow-md bg-gray-100/50 dark:bg-gray-200/40 border-gray-400/50 dark:border-gray-800/50 border-2 rounded-2xl p-2 w-[450px] h-fit'>
                    <iframe
                        src='https://3dobjectcalculator.netlify.app'
                        name='Calculator iframe'
                        className='w-full'
                        height='700px'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Calculator
