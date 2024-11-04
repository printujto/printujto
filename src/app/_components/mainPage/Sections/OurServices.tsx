import React from 'react'
import ServiceBox from '../ServiceBox'

const cards = [
    {
        mt: 4,
        title: '3D tisk',
        text: 'Poskytujeme rychlý a kvalitní 3D tisk s různými materiály. Vhodné pro prototypování, jedinečné návrhy a náhradní díly. Naše moderní technologie zajistí precizní výsledky a spolehlivost.',
    },
    {
        mt: 0,
        title: 'Prototypování',
        text: 'Nabízíme rychlé prototypování a modelování v CADu pro proměnu vašich nápadů ve skutečnost. Vytváříme detailní návrhy a fyzické prototypy, které umožní testování a zdokonalování před zahájením výroby.',
    },
    {
        mt: 6,
        title: '3D skenování',
        text: 'Přesné 3D skenování umožňuje digitalizaci fyzických objektů. Nabízíme kvalitní skenování pro další úpravy, archivaci nebo výrobu kopií originálních předmětů.',
    },
    {
        mt: 2,
        title: 'Poradenství a optimalizace návrhů',
        text: 'Pomůžeme vám s optimalizací vašich 3D návrhů a výběrem vhodných materiálů. Naše odborné poradenství zajistí, že váš projekt bude nejen estetický, ale také funkční a efektivní pro tisk.',
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
