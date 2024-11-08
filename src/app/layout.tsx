import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './_components/global/Navbar'
import Footer from './_components/global/Footer'
import ThemeSwitcher from './_components/global/ThemeSwitcher'
import { ThemeProvider } from 'next-themes'
import Background from './_components/global/Background'
import Head from 'next/head'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-roboto',
})

export const metadata: Metadata = {
    title: 'Printuj to - Zakázkový 3D tisk',
    description:
        'Zakázkový 3D tisk, který promění vaše kreativní nápady v realitu. Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
    keywords: ['3D Tisk', 'Zakázkový 3D tisk', '3D tisk na zakázku'],
    openGraph: {
        description: '3D tisk na zakázku.',
        images: [
            'https://printujto.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPrintujto_logo_dark.dd321c22.png&w=384&q=75',
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs' suppressHydrationWarning>
            <Head>
                <link rel='icon' type='image/x-icon' href='./favicon.ico' />
            </Head>
            <body
                className={`${roboto.variable} antialiased flex flex-col items-center min-h-screen justify-between bg-white dark:bg-black`}
            >
                <Background></Background>
                <ThemeProvider attribute='class'>
                    <ThemeSwitcher></ThemeSwitcher>
                    <Navbar></Navbar>
                    <main className='w-full max-w-[1230px] flex-1 px-2 z-10 '>
                        {children}
                    </main>
                    <Footer></Footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
