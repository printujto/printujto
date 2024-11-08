import React from 'react'
import ServiceBox from '../ServiceBox'

const cards = [
    {
        mt: 4,
        title: '3D tisk',
        text: 'Nabízíme rychlý a kvalitní 3D tisk s využitím široké škály materiálů. Naše služby jsou ideální pro prototypování, tvorbu jedinečných návrhů a výrobu náhradních dílů. Díky moderním technologiím a odbornému přístupu zaručujeme precizní výsledky a maximální spolehlivost. S námi získáte přesně to, co potřebujete, v nejvyšší možné kvalitě.',
    },
    {
        mt: 0,
        title: 'Prototypování',
        text: 'Poskytujeme rychlé prototypování a CAD modelování pro proměnu vašich nápadů ve skutečnost. Vytváříme detailní návrhy a fyzické prototypy, které umožňují testování a zdokonalování před zahájením výroby. Naše služby vám pomohou efektivně ověřit funkčnost a design vašich projektů, urychlit uvedení na trh a minimalizovat náklady spojené s vývojem.',
    },
    {
        mt: 6,
        title: '3D skenování',
        text: 'Specializujeme se na přesné 3D skenování pro digitalizaci fyzických objektů. Naše kvalitní skenovací služby umožňují další úpravy, archivaci nebo výrobu kopií originálních předmětů. Díky pokročilým technologiím zaručujeme vysokou přesnost a detailnost, což usnadňuje následné zpracování a integraci digitálních modelů do vašich projektů.',
    },
    {
        mt: 2,
        title: 'Poradenství a optimalizace návrhů',
        text: 'Nabízíme odborné poradenství a optimalizaci vašich 3D návrhů včetně výběru vhodných materiálů. Naši specialisté zajistí, aby váš projekt byl esteticky atraktivní, funkční a efektivní pro tisk. S našimi zkušenostmi a individuálním přístupem maximalizujete kvalitu výsledného produktu a minimalizujete výrobní náklady, čímž urychlíte uvedení projektu na trh.',
    },
]

const OurServices = () => {
    return (
        <section id='nase-sluzby' className='pt-20'>
            <h1 className='text-center '>Naše služby</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full row-span-4 col-span-4 mt-10'>
                {cards.map((card, i) => (
                    <React.Fragment key={i}>
                        <ServiceBox
                            number={`0${i + 1}.`}
                            title={card.title}
                            text={card.text}
                        ></ServiceBox>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default OurServices
