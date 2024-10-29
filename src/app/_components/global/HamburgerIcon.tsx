import { useState } from 'react'

const HamburgerIcon = ({
    handleClick,
    isOpened,
}: {
    handleClick: () => void
    isOpened: boolean
}) => {
    const [isClicked, setIsClicked] = useState(false)

    if (isOpened)
        return (
            <button
                onMouseDown={() => setIsClicked(true)}
                onMouseUp={() => setIsClicked(false)}
                onClick={handleClick}
                className={`w-12 h-10  flex sm:hidden duration-100 transition-all ${
                    isClicked ? 'p-3' : 'p-2'
                }`}
            >
                <div className=' w-full h-full flex flex-col justify-center'>
                    <div className='w-full h-0.5 bg-black dark:bg-white rotate-45'></div>
                    <div className='w-full h-0.5 bg-black dark:bg-white -rotate-45'></div>
                </div>
            </button>
        )

    return (
        <button
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onClick={handleClick}
            className={`w-12 h-10 flex sm:hidden duration-100 transition-all ${
                isClicked ? 'p-3' : 'p-2'
            }`}
        >
            <div className=' w-full h-full flex flex-col justify-between'>
                <div className='w-full h-0.5 bg-black dark:bg-white'></div>
                <div className='w-4/5 h-0.5 bg-black dark:bg-white'></div>
                <div className='w-full h-0.5 bg-black dark:bg-white'></div>
            </div>
        </button>
    )
}

export default HamburgerIcon
