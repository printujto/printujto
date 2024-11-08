import Link from 'next/link'
import React, { ReactElement } from 'react'

const Button = ({
    text,
    link,
    className,
    icon,
    variant,
}: {
    text: string
    link: string
    className?: string
    icon: ReactElement
    variant?: string
}) => {
    if (variant === 'withoutBg')
        return (
            <Link href={link}>
                <button
                    className={`border dark:hover:border-gray-300/50 dark:border-gray-300/60 border-gray-700 hover:border-gray-900 group/button text-black dark:text-white duration-200 rounded-xl px-6 py-2 font-bold shadow-lg items-center flex gap-2 relative ${className}`}
                >
                    <div className='text-nowrap'>{text}</div>
                    <div className='px-1 group-hover/button:pl-2 group-hover/button:pr-0 duration-100 ease-in transition-all '>
                        {icon}
                    </div>

                    <div className='w-full h-full bg-white bg-opacity-0 absolute top-0 left-0 rounded-xl group-hover/button:bg-opacity-10'></div>
                </button>
            </Link>
        )

    return (
        <Link href={link}>
            <button
                className={`border hover:border-gray-300/50 border-gray-300/20 group/button text-white duration-200 bg-gradient-to-tr from-violet from-30% to-pink rounded-xl px-6 py-2 font-bold shadow-lg items-center flex gap-2 relative ${className}`}
            >
                <div className='text-nowrap'>{text}</div>
                <div className='px-1 group-hover/button:pl-2 group-hover/button:pr-0 duration-100 ease-in transition-all '>
                    {icon}
                </div>

                <div className='w-full h-full bg-white bg-opacity-0 absolute top-0 left-0 rounded-xl group-hover/button:bg-opacity-10'></div>
            </button>
        </Link>
    )
}

export default Button
