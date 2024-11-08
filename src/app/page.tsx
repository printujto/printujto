import AboutUs from './_components/mainPage/Sections/AboutUs'
import DemandForm from './_components/mainPage/Sections/DemandForm'
import Counter from './_components/mainPage/Sections/Counter'
import OurServices from './_components/mainPage/Sections/OurServices'
import PrintProcess from './_components/mainPage/Sections/PrintProcess'
import QaA from './_components/mainPage/Sections/QaA'
import WorksSlider from './_components/mainPage/Sections/WorksSlider'
import Hero from './_components/mainPage/Sections/Hero'

export default function Home() {
    return (
        <div className='flex flex-col gap-20' id='home-page'>
            <Hero></Hero>
            <OurServices></OurServices>
            <WorksSlider></WorksSlider>
            <Counter></Counter>
            <AboutUs></AboutUs>
            <PrintProcess></PrintProcess>
            <QaA></QaA>
            <DemandForm></DemandForm>
        </div>
    )
}
