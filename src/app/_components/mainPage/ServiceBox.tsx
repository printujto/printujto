import React from 'react'

const ServiceBox = ({
    number,
    title,
    text,
    mt,
}: {
    number: string
    title: string
    text: string
    mt: string
}) => {
    return (
        // TODO:nefunguje mt pouze na lg
        <div
            className={`${mt} md:h-fit h-full rounded-3xl bg-gray-100/50 dark:bg-black/20 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2 p-4 shadow-lg hover:shadow-md cursor-pointer duration-200 transition-all`}
        >
            <h2 className='text-5xl font-extrabold bg-gradient-to-tr from-violet from to-pink bg-clip-text text-transparent dark:text-transparent'>
                {number}
            </h2>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default ServiceBox
