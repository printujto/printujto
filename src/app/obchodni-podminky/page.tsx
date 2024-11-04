import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Printuj to - Obchodní podmínky',
    description:
        'Profesionální a přesný 3D tisk, který promění vaše nápady v realitu. Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
    keywords: [
        '3D Tisk',
        'Zakázkový 3D tisk',
        '3D tisk na zakázku',
        'Obchodní podmínky',
    ],
    openGraph: {
        description: '3D tisk na zakázku.',
        images: ['@/../public/HeroImages/3dobj2.png'],
    },
}

const ObchodniPodminky = () => {
    return (
        <section className='mt-32'>
            <h1>Obchodní podmínky</h1>
            <ul className='mt-2'>
                <li className='font-bold'>Jan Středula</li>
                <li>
                    <span className='font-bold'>IČO:</span> 02269252
                </li>
                <li>
                    <span className='font-bold'>Adresa:</span> A. Dvořáka 201,
                    Podbořany 4410
                </li>
                <li>
                    <span className='font-bold'>Tel:</span>{' '}
                    <Link className='text-pink' href='tel:+420 774 577 446'>
                        +420 774 577 446
                    </Link>
                </li>
                <li>
                    <span className='font-bold'>Email:</span>{' '}
                    <Link className='text-pink' href='mailto:info@printujto.cz'>
                        info@printujto.cz
                    </Link>
                </li>
            </ul>
            <h2 className='mt-6'>Úvodní ustanovení k zakázkovému 3D tisku</h2>
            <p>
                Tyto obchodní podmínky (dále jen „Podmínky“) upravují práva a
                povinnosti mezi Jan Středula (dále jen „Prodávající“) a
                zákazníky (dále jen „Zákazník“) při poskytování služeb
                zakázkového 3D tisku.
            </p>
            <p>
                Tyto Podmínky se vztahují na všechny zakázky zadané
                prostřednictvím online formuláře na webu, e-mailem nebo
                telefonicky. Použitím těchto služeb Zákazník souhlasí s těmito
                Podmínkami a zavazuje se je dodržovat.
            </p>
            <p>
                Interní odkaz: Kontaktujte nás pro více informací o zakázkovém
                3D tisku.
            </p>
            <h2 className='mt-6'>Objednávka a uzavření smlouvy</h2>
            <p>
                Zákazník může podat poptávku prostřednictvím online formuláře,
                e-mailem nebo telefonicky. Při odeslání poptávky prostřednictvím
                formuláře může Zákazník nahrát 3D model, který chce vytisknout.
            </p>
            <p>
                Na základě poptávky prodávající vypracuje cenovou nabídku.
                Předložení cenové nabídky se nepovažuje za uzavření smlouvy.
            </p>
            <p>
                K uzavření smlouvy dochází okamžikem, kdy Zákazník schválí
                cenovou nabídku a Prodávající potvrdí přijetí této nabídky.
            </p>
            <p>
                Prodávající si vyhrazuje právo odmítnout zakázky, které nelze z
                technických, právních nebo kapacitních důvodů realizovat.
            </p>
            <h2 className='mt-6'>
                Zodpovědnost za obsah a licence nahraných modelů
            </h2>
            <p>
                Zákazník odpovídá za to, že všechny modely, které poskytne k
                tisku, jsou v souladu s platnými právními předpisy, zejména
                autorskými právy, patenty a dalšími licenčními omezeními.
            </p>
            <p>
                Prodávající nekontroluje status práv k modelům a nenese
                odpovědnost za jakékoliv porušení práv třetích stran.
            </p>
            <p>
                Zákazník prohlašuje, že modely předané k tisku jsou buď jeho
                vlastní tvorbou, nebo má k nim příslušná oprávnění k využití pro
                účely zakázkového tisku.
            </p>
            <p>
                Jakýkoliv právní spor vzniklý v souvislosti s porušením
                autorských práv nebo jiných práv k duševnímu vlastnictví je
                zcela na odpovědnosti Zákazníka. V případě, že dojde k právnímu
                sporu, Zákazník se zavazuje pokrýt veškeré právní náklady a
                odškodnění.
            </p>
            <p>
                Externí odkaz: Více informací o autorských právech naleznete na
                webu{' '}
                <Link
                    className='text-pink'
                    target='_blank'
                    href='https://upv.gov.cz/'
                >
                    Úřadu průmyslového vlastnictví
                </Link>
                .
            </p>
            <h2 className='mt-6'>Bezpečnost dat a ochrana souborů</h2>
            <p>
                Prodávající chrání soubory nahrané Zákazníkem pomocí
                zabezpečených metod přenosu dat a šifrování.
            </p>
            <p>
                Prodávající uchovává soubory pouze po dobu nezbytnou k realizaci
                zakázky, pokud Zákazník neurčí jinak.
            </p>
            <p>
                Po dokončení zakázky budou soubory bezpečně smazány, pokud
                Zákazník nepožádá o jejich další uchování pro budoucí použití.
            </p>
            <h2 className='mt-6'>Limitace odpovědnosti a zřeknutí se záruk</h2>
            <p>
                Prodávající nenese odpovědnost za jakékoliv následné škody
                způsobené použitím tištěných produktů, včetně, ale nikoliv
                výhradně, škod na majetku, zranění osob nebo jiných nepřímých
                ztrát.
            </p>
            <p>
                Veškeré produkty jsou dodávány v souladu se specifikacemi
                poskytnutými Zákazníkem. Prodávající se zříká jakékoliv záruky
                na vhodnost tištěných produktů pro konkrétní účel.
            </p>
            <p>
                Prodávající neodpovídá za nesprávné použití tištěných produktů,
                nesprávné montážní postupy nebo jiné činnosti, které
                neodpovídají účelu, pro který byly výrobky vyrobeny.
            </p>
            <p>
                Zákazník je povinen předem zajistit, že model splňuje všechny
                technické požadavky na tisk. Prodávající nenese odpovědnost za
                chyby způsobené nesprávnou specifikací modelu.
            </p>
            <h2 className='mt-6'>Zakázané předměty</h2>
            <p>
                Prodávající si vyhrazuje právo odmítnout tisk jakýchkoli
                předmětů, které jsou v rozporu se zákony, etickými standardy
                nebo politikou společnosti. To zahrnuje mimo jiné tisk zbraní,
                nelegálního obsahu nebo jinak nevhodných modelů.
            </p>
            <h2 className='mt-6'>Platba a záloha</h2>
            <p>
                Cena zakázky je stanovena individuálně na základě parametrů
                objednávky (materiál, složitost, velikost, požadované množství).
            </p>
            <p>
                Zákazník je povinen uhradit cenu zakázky předem, pokud není
                dohodnuto jinak. V případě složitějších zakázek může Prodávající
                požadovat zálohu před zahájením výroby.
            </p>
            <p>
                Zákazníkovi bude cena sdělena před zahájením výroby, a to formou
                cenové nabídky.
            </p>
            <h2 className='mt-6'>Dodací podmínky pro zakázkový 3D tisk</h2>
            <p>
                Doba dodání je závislá na složitosti zakázky a aktuální
                vytíženosti výrobních kapacit. Přesný termín bude upřesněn při
                potvrzení objednávky.
            </p>
            <p>
                Prodávající nenese odpovědnost za zpoždění způsobené třetími
                stranami, zejména dopravními společnostmi.
            </p>
            <h2 className='mt-6'>Ochrana osobních údajů</h2>
            <p>
                Prodávající se zavazuje zpracovávat a chránit osobní údaje
                Zákazníka v souladu s platnými právními předpisy o ochraně
                osobních údajů.
            </p>
            <p>
                Osobní údaje Zákazníka budou použity výhradně pro účely
                realizace zakázky a nebudou poskytnuty třetím stranám bez
                předchozího souhlasu Zákazníka.
            </p>
            <h2 className='mt-6'>Závěrečná ustanovení</h2>
            <p>Tyto obchodní podmínky jsou platné od 1.11.2024.</p>
            <p>
                Prodávající si vyhrazuje právo na změny obchodních podmínek. O
                změnách bude Zákazník informován prostřednictvím webových
                stránek Prodávajícího.
            </p>
        </section>
    )
}

export default ObchodniPodminky
