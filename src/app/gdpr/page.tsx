import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Printuj to - Zpracování osobních údajů',
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

const Gdpr = () => {
    return (
        <section className='mt-32'>
            <h1>Zpracování osobních údajů</h1>
            <h2 className='mt-10'>
                Úvodní ustanovení k zpracování osobních údajů pro zakázkový 3D
                tisk
            </h2>
            <p>
                Toto prohlášení o ochraně osobních údajů (dále jen „Prohlášení“)
                upravuje způsob, jakým Printujto (dále jen „Správce“) zpracovává
                osobní údaje uživatelů webových stránek a zákazníků zakázkového
                3D tisku.
            </p>
            <p>
                Správce zpracovává osobní údaje v souladu s Nařízením Evropského
                parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
                souvislosti se zpracováním osobních údajů (GDPR).
            </p>
            <p>
                Interní odkaz: Přečtěte si více o našich obchodních podmínkách.
            </p>
            <h2 className='mt-6'>
                Rozsah zpracovávaných údajů pro zakázkový 3D tisk
            </h2>
            <p>Správce zpracovává následující osobní údaje zákazníků:</p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Jméno a příjmení,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    E-mailovou adresu,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Telefonní číslo,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Adresu (pro doručení zboží),
                </li>
                <li className='text-gray-700 dark:text-gray-400'>IP adresu,</li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Údaje o objednávkách a platbách.
                </li>
            </ul>
            <h2 className='mt-6'>
                Úvodní ustanovení k zpracování osobních údajů pro zakázkový 3D
                tisk
            </h2>
            <p>Osobní údaje jsou zpracovávány za účelem:</p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Realizace objednávek a doručení zboží/služeb,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Vedení zákaznického účtu,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Odesílání obchodních sdělení (pokud k tomu dal zákazník
                    souhlas),
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Zajištění podpory zákazníkům,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Dodržení zákonných povinností.
                </li>
            </ul>
            <p className='mt-20'>
                Externí odkaz: Více informací o právech subjektů údajů naleznete
                na webu Úřadu pro ochranu osobních údajů.{' '}
                <Link
                    target='_blank'
                    className='text-pink'
                    href='https://uoou.gov.cz/'
                >
                    webu Úřadu pro ochranu osobních údajů
                </Link>
                .
            </p>
            <h2 className='mt-6'>Právní základ zpracování osobních údajů</h2>
            <p>
                Osobní údaje jsou zpracovávány na základě těchto právních
                titulů:
            </p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Plnění smlouvy (zpracování je nezbytné pro uzavření a plnění
                    kupní smlouvy),
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Souhlas se zpracováním osobních údajů (např. pro
                    marketingové účely),
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Plnění právních povinností (např. uchovávání údajů o
                    fakturách a platbách).
                </li>
            </ul>
            <h2 className='mt-6'>Doba uchování osobních údajů</h2>
            <p>
                Osobní údaje jsou uchovávány pouze po dobu nezbytnou pro účely,
                pro které jsou zpracovávány. Po uplynutí této doby jsou údaje
                bezpečně vymazány nebo anonymizovány.
            </p>
            <h2 className='mt-6'>Práva subjektů údajů dle GDPR</h2>
            <p>Zákazníci mají v souladu s GDPR následující práva:</p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo na přístup k osobním údajům,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo na opravu nepřesných údajů,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo na výmaz osobních údajů („právo být zapomenut“),
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo na omezení zpracování,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo na přenositelnost údajů,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Právo vznést námitku proti zpracování osobních údajů.
                </li>
            </ul>
            <h2 className='mt-6'>
                Ochrana osobních údajů při zakázkovém 3D tisku
            </h2>
            <p>
                Správce zajišťuje technická a organizační opatření k ochraně
                osobních údajů před zneužitím, neoprávněným přístupem nebo
                ztrátou.
            </p>
            <p>
                Veškeré zpracovávané údaje jsou uloženy na zabezpečených
                serverech.
            </p>
            <h2 className='mt-6'>Předávání osobních údajů třetím stranám</h2>
            <p>
                Osobní údaje mohou být předávány třetím stranám pouze v
                následujících případech:
            </p>
            <ul className='list-disc text pl-5 mt-2'>
                <li className='text-gray-700 dark:text-gray-400'>
                    Přepravní společnosti pro doručení objednaného zboží,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    Poskytovatelům platebních služeb,
                </li>
                <li className='text-gray-700 dark:text-gray-400'>
                    V souladu s právními předpisy (např. finanční úřad).
                </li>
            </ul>
            <h2 className='mt-6'>
                Závěrečná ustanovení o zpracování osobních údajů
            </h2>
            <p>
                Toto Prohlášení je platné od 1.11.2024 a může být kdykoli
                aktualizováno. O případných změnách budou zákazníci informováni
                prostřednictvím webových stránek.
            </p>
        </section>
    )
}

export default Gdpr
