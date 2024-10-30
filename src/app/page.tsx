import AboutUs from './_components/mainPage/Sections/AboutUs'
import Counter from './_components/mainPage/Sections/Counter'
import Hero from './_components/mainPage/Sections/Hero'
import OurServices from './_components/mainPage/Sections/OurServices'
import PrintProcess from './_components/mainPage/Sections/PrintProcess'
import WorksSlider from './_components/mainPage/Sections/WorksSlider'

export default function Home() {
    return (
        <div className='' id='home-page'>
            <Hero></Hero>
            <WorksSlider></WorksSlider>
            <OurServices></OurServices>
            <Counter></Counter>
            <AboutUs></AboutUs>
            <PrintProcess></PrintProcess>
        </div>
    )
}
