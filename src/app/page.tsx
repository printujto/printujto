import Hero from './_components/mainPage/Sections/Hero'
import OurServices from './_components/mainPage/Sections/OurServices'
import WorksSlider from './_components/mainPage/Sections/WorksSlider'

export default function Home() {
    return (
        <div className=''>
            <Hero></Hero>
            <WorksSlider></WorksSlider>
            <OurServices></OurServices>
            <section
                className='h-screen bg-blue-600 dark:bg-red-400 mt-20'
                id='sluzby'
            ></section>
        </div>
    )
}
