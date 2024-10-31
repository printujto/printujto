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
    active?: boolean
}) => {
    return (
        <Link
            onClick={handleClick}
            href={url}
            className='py-2 px-3 relative group/navLink'
        >
            {/* <div
                className={`${
                    active ? 'opacity-100' : 'opacity-0'
                } bg-violet-hover w-1 h-1 absolute top-2 left-0  group-hover/navLink:opacity-100 duration-200 transition-all`}
            ></div> */}
            <li
                className={` text-xl sm:text-base lg:text-md font-medium ${
                    active
                        ? 'text-violet dark:text-slate-400 group-hover/navLink:text-violet-group-hover/navLink dark:group-hover/navLink:text-violet-group-hover/navLink'
                        : 'text-black dark:text-white group-hover/navLink:text-violet-group-hover/navLink dark:group-hover/navLink:text-violet-hover'
                } duration-200 text-nowrap`}
            >
                {text}
            </li>
        </Link>
    )
}

export default NavLink
