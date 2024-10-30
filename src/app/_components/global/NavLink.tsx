import Link from 'next/link'

const NavLink = ({
    url,
    text,
    handleClick,
    active,
}: {
    url: string
    text: string
    handleClick: () => void
    active: boolean
}) => {
    return (
        <Link onClick={handleClick} href={url} className='py-2 px-2'>
            <li
                className={`text-xl sm:text-base lg:text-md font-medium ${
                    active
                        ? 'text-violet dark:text-slate-400 hover:text-violet-hover dark:hover:text-violet-hover'
                        : 'text-black dark:text-white hover:text-violet-hover dark:hover:text-violet-hover'
                } duration-200 text-nowrap`}
            >
                {text}
            </li>
        </Link>
    )
}

export default NavLink
