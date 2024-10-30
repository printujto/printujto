import Link from 'next/link'

const NavLink = ({
    url,
    text,
    handleClick,
}: {
    url: string
    text: string
    handleClick: () => void
}) => {
    return (
        <Link onClick={handleClick} href={url} className='py-2 px-1'>
            <li className='text-xl sm:text-base lg:text-md font-medium text-black dark:text-white hover:text-violet-hover dark:hover:text-violet-hover duration-200 text-nowrap'>
                {text}
            </li>
        </Link>
    )
}

export default NavLink
