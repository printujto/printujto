import React from 'react'

import OurStart from '../_components/aboutus/OurStart'
import OurValues from '../_components/aboutus/OurValues'
import OurTech from '../_components/aboutus/OurTech'
import OurTeam from '../_components/aboutus/OurTeam'

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
