const PrintProcessBox = ({
    number,
    title,
    text,
    variant,
}: {
    number: string
    title: string
    text: string
    variant: string
}) => {
    if (variant === 'end')
        return (
            <div className=' w-full sm:w-[450px] h-fit flex flex-col gap-2 items-center'>
                <div className=' p-2 rounded-full border-2 border-slate-400/20 hidden sm:block'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-tr from-violet from-30% to-pink'></div>
                </div>
                <div
                    className={`print-process-box opacity-25 lg:h-fit h-full w-full rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2 p-4 shadow-lg hover:shadow-md cursor-pointer duration-200 transition-all`}
                >
                    <h2 className='text-5xl font-extrabold bg-gradient-to-tr from-violet from to-pink bg-clip-text text-transparent dark:text-transparent'>
                        {number}
                    </h2>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        )

    if (variant === 'right')
        return (
            <div className='w-full sm:w-1/2 sm:translate-x-[calc(100%-1rem)] h-fit flex flex-row gap-2 items-center'>
                <div className=' p-2 rounded-full border-2 border-slate-400/20 hidden sm:block'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-tr from-violet from-30% to-pink'></div>
                </div>
                <div
                    className={`print-process-box opacity-25 lg:h-fit h-full rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2 p-4 shadow-lg hover:shadow-md cursor-pointer duration-200 transition-all`}
                >
                    <h2 className='text-5xl font-extrabold bg-gradient-to-tr from-violet from to-pink bg-clip-text text-transparent dark:text-transparent'>
                        {number}
                    </h2>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        )

    return (
        <div className='w-full sm:w-1/2 sm:-translate-x-[-1rem] h-fit flex  gap-2 items-center'>
            <div
                className={`print-process-box opacity-25 lg:h-fit h-full rounded-3xl bg-gray-100/50 dark:bg-black/20 dark:hover:bg-black/30 hover:bg-white/50 border-gray-200/50 dark:border-gray-700/50 border-2 p-4 shadow-lg hover:shadow-md cursor-pointer duration-200 transition-all`}
            >
                <h2 className='text-5xl font-extrabold bg-gradient-to-tr from-violet from to-pink bg-clip-text text-transparent dark:text-transparent'>
                    {number}
                </h2>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className='p-2 rounded-full border-2 border-slate-400/20 hidden sm:block'>
                <div className='w-3 h-3 rounded-full bg-gradient-to-tr from-violet from-30% to-pink'></div>
            </div>
        </div>
    )
}

export default PrintProcessBox
