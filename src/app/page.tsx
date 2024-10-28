import Hero from './_components/mainPage/Sections/Hero'
import WorksSlider from './_components/mainPage/Sections/WorksSlider'

export default function Home() {
    return (
        <div className=''>
            <Hero></Hero>
            <WorksSlider></WorksSlider>
            <section className='h-screen bg-blue-600' id='sluzby'></section>
        </div>
    )
}
