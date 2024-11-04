import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Printuj to - Reklamační řád',
    description:
        'Profesionální a přesný 3D tisk, který promění vaše nápady v realitu. Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
    keywords: [
        '3D Tisk',
        'Zakázkový 3D tisk',
        '3D tisk na zakázku',
        'Reklamační řád',
    ],
    openGraph: {
        description: '3D tisk na zakázku.',
        images: ['@/../public/HeroImages/3dobj2.png'],
    },
}

const Reklamace = () => {
    return (
        <section className='mt-32'>
            <h1>Reklamační řád</h1>
            <h2 className='mt-10'>
                Úvodní ustanovení k reklamacím v zakázkovém 3D tisku
            </h2>
            <p>
                Tento reklamační řád upravuje práva a povinnosti prodávajícího a
                zákazníka při uplatňování reklamace na zboží vyrobené
                technologií 3D tisku.
            </p>
            <p>
                Reklamační řád je součástí obchodních podmínek a zákazník
                souhlasí s jeho zněním při každé objednávce.
            </p>
            <h2 className='mt-6'>Specifika zakázkového 3D tisku</h2>
            <p>
                Výrobky vyrobené technologií 3D tisku mohou vykazovat drobné
                odchylky v rozměrech, povrchové úpravě a barvě oproti původnímu
                digitálnímu modelu. Tyto odchylky jsou způsobeny technologií
                výroby a nejsou důvodem k reklamaci.
            </p>
            <p>
                Zákazník odpovídá za správnost a kvalitu poskytnutého 3D modelu.
                Prodávající neprovádí kontrolu modelu na vady či chyby v designu
                a nenese odpovědnost za případné problémy způsobené nesprávným
                nebo neúplným modelem.
            </p>
            <h2 className='mt-6'>Podmínky reklamace pro zakázkový 3D tisk</h2>
            <p>
                Zákazník má právo uplatnit reklamaci pouze v případě, že výrobek
                vykazuje zjevné výrobní vady, které byly způsobeny chybným
                postupem při tisku.
            </p>
            <p>
                Reklamaci je třeba uplatnit do 7 dnů od převzetí výrobku.
                Zákazník musí doložit vadný výrobek a popis vady.
            </p>
            <p>
                Prodávající si vyhrazuje právo prověřit reklamovaný výrobek a
                rozhodnout o oprávněnosti reklamace.
            </p>
            <h2 className='mt-6'>Případy, kdy nelze reklamaci uplatnit</h2>
            <p>Reklamace nelze uplatnit v následujících případech:</p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Pokud jsou vady způsobeny nesprávně připraveným 3D modelem,
                    který byl dodán zákazníkem.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Pokud jsou drobné odchylky v rozměrech, barvě či povrchové
                    úpravě v rámci tolerance technologie 3D tisku.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Pokud došlo k poškození výrobku nesprávným zacházením ze
                    strany zákazníka po převzetí.
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Pokud zákazník nedodržel pokyny pro použití či skladování
                    výrobku.
                </li>
            </ul>
            <h2 className='mt-6'>Řešení reklamace při zakázkovém 3D tisku</h2>
            <p>
                Pokud je reklamace uznána jako oprávněná, má zákazník právo na
                bezplatnou opravu výrobku, případně na opětovný tisk nového
                výrobku.
            </p>
            <p>
                Pokud není možné výrobek opravit nebo znovu vytisknout, může
                zákazník požadovat vrácení peněz.
            </p>
            <h2 className='mt-6'>
                Závěrečná ustanovení o reklamacích pro zakázkový 3D tisk
            </h2>
            <p>
                Tento reklamační řád je platný od 1.11.2024 a může být kdykoli
                změněn. O změnách bude zákazník informován prostřednictvím
                webových stránek.
            </p>
            <p>
                Přečtěte si více o našich{' '}
                <Link className='text-pink' href='/obchodni-podminky'>
                    Obchodník podmínách
                </Link>
                .
            </p>
            <p>
                Externí odkaz: spotřebitelů naleznete na{' '}
                <Link
                    target='_blank'
                    className='text-pink'
                    href='https://www.coi.cz/'
                >
                    webu České obchodní inspekce
                </Link>
                .
            </p>
        </section>
    )
}

export default Reklamace
