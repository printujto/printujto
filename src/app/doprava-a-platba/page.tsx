import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Printuj to - Doprava a platba',
    description:
        'Profesionální a přesný 3D tisk, který promění vaše nápady v realitu. Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
    keywords: ['3D Tisk', 'Zakázkový 3D tisk', '3D tisk na zakázku'],
    openGraph: {
        description: '3D tisk na zakázku.',
        images: ['@/../public/HeroImages/3dobj2.png'],
    },
}

const DopravaAPlatba = () => {
    return (
        <section className='mt-32'>
            <h1>Doprava a platba</h1>
            <h2 className='mt-10'>Doprava a platba 3D tisk</h2>
            <p>
                Pro vaše projekty zakázkového 3D tisku nabízíme různé možnosti
                dopravy a plateb, abychom zajistili co nejlepší pohodlí a
                kvalitu služeb.
            </p>
            <h2 className='mt-6'>Možnosti dopravy pro zakázkový 3D tisk</h2>
            <p>Nabízíme následující způsoby doručení vašich objednávek:</p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    <span className='font-semibold'>Zásilkovna</span> – doručení
                    na výdejní místo Zásilkovny dle vašeho výběru.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    <span className='font-semibold'>Česká pošta</span> –
                    doručení na vaši adresu.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    <span className='font-semibold'>PPL</span> – doručení přímo
                    na vaši adresu kurýrem.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    <span className='font-semibold'>Osobní oběr</span> – možnost
                    vyzvednutí zboží na adrese: A. Dvořáka 201, Podbořany 44101.
                </li>
            </ul>
            <p>
                Více informací o možnostech dopravy můžete najít na stránkách
                <Link
                    target='_blank'
                    className='text-pink'
                    href='https://www.zasilkovna.cz/'
                >
                    Zásilkovny
                </Link>
                nebo
                <Link
                    target='_blank'
                    className='text-pink'
                    href='https://www.ceskaposta.cz/index'
                >
                    České pošty
                </Link>
                .
            </p>
            <h2 className='mt-6'>Platební metody pro zakázkový 3D tisk</h2>
            <p>
                Platba za objednávky musí být provedena předem. Nabízíme
                následující způsoby platby:
            </p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    <span className='font-semibold'>Platba převodem</span> – po
                    dokončení objednávky obdržíte platební instrukce na váš
                    e-mail.
                </li>
            </ul>
            <p>
                Více informací o bezpečnosti plateb převodem naleznete na
                <Link
                    target='_blank'
                    className='text-pink'
                    href='https://www.cnb.cz/cs/'
                >
                    webu ČNB
                </Link>
                .
            </p>
            <h2 className='mt-6'>Doba doručení pro zakázkový 3D tisk</h2>
            <p>
                Doba doručení závisí na složitosti a velikosti objednávky. O
                přesném termínu doručení vás budeme informovat po potvrzení
                objednávky.
            </p>
            <h2 className='mt-6'>Obrázek k zakázkovému 3D tisku</h2>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    <Link
                        target='_blank'
                        className='text-pink'
                        href='/#formular'
                    >
                        Kontaktujte nás
                    </Link>{' '}
                    pro více informací o zakázkovém 3D tisku.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    <Link
                        target='_blank'
                        className='text-pink'
                        href='/#portfolio'
                    >
                        Prohlédněte si naše portfolio
                    </Link>{' '}
                    pro inspiraci pro váš projekt.
                </li>
            </ul>
            <h2 className='mt-6'>Kontakt</h2>
            <p>
                V případě jakýchkoli dotazů ohledně dopravy nebo plateb nás
                můžete kontaktovat na e-mailu: info@printujto.cz nebo na
                telefonním čísle:{' '}
                <Link
                    target='_blank'
                    className='text-pink'
                    href='tel:+420774577446'
                >
                    +420 774 577 446
                </Link>{' '}
                .
            </p>
        </section>
    )
}

export default DopravaAPlatba
