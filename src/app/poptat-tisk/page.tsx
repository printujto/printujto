import React from 'react'

const Calculator = () => {
    return (
        <div className='mt-40'>
            <div className='bg-transparent dark:bg-transparent'>
                <iframe
                    src='https://3dobjectcalculator.netlify.app'
                    name='iframe test'
                    className='w-full'
                    scrolling='no'
                    height='800px'
                ></iframe>
            </div>
        </div>
    )
}

export default Calculator
