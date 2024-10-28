import Link from 'next/link'

const NavLink = ({ url, text }: { url: string; text: string }) => {
    return (
        <Link href={url} className='py-2 px-1'>
            <li className=' text-md lg:text-lg font-medium text-black hover:text-violet-hover duration-200 text-nowrap'>
                {text}
            </li>
        </Link>
    )
}

export default NavLink
