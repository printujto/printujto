import React from 'react'

import OurStart from '../_components/aboutus/OurStart'
import OurValues from '../_components/aboutus/OurValues'
import OurTech from '../_components/aboutus/OurTech'
import OurTeam from '../_components/aboutus/OurTeam'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Printuj to - O nás',
    description:
        'Profesionální a přesný 3D tisk, který promění vaše nápady v realitu. Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
    keywords: ['3D Tisk', 'Zakázkový 3D tisk', '3D tisk na zakázku'],
    openGraph: {
        images: ['@/../public/HeroImages/3dobj2.png'],
    },
}

const page = () => {
    return (
        <div className='flex flex-col gap-10 md:gap-32 mt-32'>
            <OurTeam></OurTeam>
            <OurStart></OurStart>
            <OurValues></OurValues>
            <OurTech></OurTech>
        </div>
    )
}

export default page
