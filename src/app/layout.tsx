import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './_components/global/Navbar'
import Footer from './_components/global/Footer'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-roboto',
})

export const metadata: Metadata = {
    title: 'Printuj to',
    description: 'Zakázkový 3D tisk',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${roboto.variable} antialiased flex flex-col items-center min-h-screen justify-between`}
            >
                <Navbar></Navbar>
                <main className='w-full max-w-[1230px] flex-1 px-2'>
                    {children}
                </main>
                <Footer></Footer>
            </body>
        </html>
    )
}
