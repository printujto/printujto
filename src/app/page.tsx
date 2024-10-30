import AboutUs from './_components/mainPage/Sections/AboutUs'
import Contact from './_components/mainPage/Sections/Contact'
import Counter from './_components/mainPage/Sections/Counter'
import Hero from './_components/mainPage/Sections/Hero'
import OurServices from './_components/mainPage/Sections/OurServices'
import PrintProcess from './_components/mainPage/Sections/PrintProcess'
import QaA from './_components/mainPage/Sections/QaA'
import WorksSlider from './_components/mainPage/Sections/WorksSlider'

export default function Home() {
    return (
        <div className='flex flex-col gap-32' id='home-page'>
            <Hero></Hero>
            <WorksSlider></WorksSlider>
            <OurServices></OurServices>
            <Counter></Counter>
            <AboutUs></AboutUs>
            <PrintProcess></PrintProcess>
            <QaA></QaA>
            <Contact></Contact>
        </div>
    )
}
