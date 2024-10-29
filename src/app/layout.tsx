import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './_components/global/Navbar'
import Footer from './_components/global/Footer'
import ThemeSwitcher from './_components/global/ThemeSwitcher'
import { ThemeProvider } from 'next-themes'
import Background from './_components/global/Background'

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
        <html lang='cs' suppressHydrationWarning>
            <body
                className={`${roboto.variable} antialiased flex flex-col items-center min-h-screen justify-between bg-white dark:bg-black`}
            >
                <Background></Background>
                <ThemeProvider attribute='class'>
                    <ThemeSwitcher></ThemeSwitcher>
                    <Navbar></Navbar>
                    <main className='w-full max-w-[1230px] flex-1 px-2 z-10'>
                        {children}
                    </main>
                    <Footer></Footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
