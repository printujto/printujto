import CalculatorIcon from '@/app/_icons/CalculatorIcon'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const Button = ({
    text,
    link,
    className,
    icon,
}: {
    text: string
    link: string
    className?: string
    icon: ReactElement
}) => {
    return (
        <Link href={link}>
            <button
                className={`text-white duration-200 bg-gradient-to-tr from-violet from-30% to-pink rounded-full px-6 py-2 font-bold shadow-lg items-center flex gap-2 ${className}`}
            >
                <div className=' text-nowrap'>{text}</div>
                {icon}
            </button>
        </Link>
    )
}

export default Button
