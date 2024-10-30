import React from 'react'
import PrintProcessBox from '../PrintProcessBox'

const PrintProcess = () => {
    return (
        <section className='mt-32' id='print-process'>
            <h1 className='text-center'>Proces tisku</h1>

            <div className='mt-10'>
                <div className='flex justify-center relative'>
                    <div
                        id='print-process-line'
                        className='w-0.5 h-full bg-slate-400/30 absolute sm:block hidden'
                    >
                        <div
                            id='print-process-line-fill'
                            className='bg-white w-full '
                        ></div>
                    </div>
                    <div className='h-full flex flex-col gap-2'>
                        <PrintProcessBox
                            title='Příjetí poptávky'
                            text='Na začátku celého procesu je klíčové pochopení potřeb a požadavků našich zákazníků. Přijímáme vaše poptávky a detailní specifikace projektu prostřednictvím online formuláře nebo přímým kontaktem. Po důkladném prostudování požadavků se snažíme zajistit, že chápeme veškeré detaily, aby bylo možné zajistit co nejlepší výsledek. '
                            number='01.'
                            variant='right'
                        ></PrintProcessBox>
                        <PrintProcessBox
                            variant='left'
                            title='Cenová nabídka'
                            text='Po obdržení vašich specifikací připravíme podrobnou cenovou nabídku. Tato nabídka zahrnuje informace o použitých materiálech, technologii tisku a očekávané časové náročnosti. Naším cílem je zajistit transparentnost a poskytnout vám přesný odhad nákladů. Pokud máte nějaké zvláštní požadavky nebo specifikace, rádi je s vámi prodiskutujeme a přizpůsobíme nabídku vašim potřebám.'
                            number='02.'
                        ></PrintProcessBox>
                        <PrintProcessBox
                            title='Příprava modelu'
                            text='Jakmile je cenová nabídka odsouhlasena, přecházíme k přípravě 3D modelu. Pokud nemáte vlastní digitální model, naši odborníci vám jej navrhnou pomocí CAD softwaru. Tento krok zahrnuje modelování a optimalizaci návrhu tak, aby byl zajištěn bezproblémový tisk. Spolupracujeme s vámi na finálním vzhledu modelu a poskytujeme konzultace, které zajišťují, že výsledek bude odpovídat vašim očekáváním.'
                            number='03.'
                            variant='right'
                        ></PrintProcessBox>
                        <PrintProcessBox
                            variant='left'
                            title='3D tisk'
                            text='Jakmile je model připraven, zahájíme samotný 3D tisk. Používáme moderní 3D tiskárny, které zajišťují vysokou přesnost a kvalitu. V závislosti na zvoleném materiálu a typu projektu vybíráme nejvhodnější technologii tisku (např. FDM, SLA nebo SLS). Proces tisku trvá od několika hodin až po několik dní v závislosti na složitosti a velikosti projektu.'
                            number='04.'
                        ></PrintProcessBox>
                        <PrintProcessBox
                            title='Postprocessing'
                            text='Po dokončení tisku je produkt připraven k následnému zpracování. Tento krok zahrnuje odstranění podpůrných struktur, broušení a začištění povrchu, aby byl výsledek co nejkvalitnější a odpovídal vašim požadavkům. Postprocessing může také zahrnovat jemné doladění povrchových detailů, aby byl produkt nejen funkční, ale i vizuálně atraktivní. Každý krok postprocessingu je prováděn s pečlivostí, aby se zajistilo, že produkt splňuje všechny potřebné standardy kvality.'
                            number='05.'
                            variant='right'
                        ></PrintProcessBox>
                    </div>
                </div>
                <div className='flex  justify-center mt-2 sm:mt-0'>
                    <PrintProcessBox
                        title='Odesílání výrobu'
                        text='lorem iasdfkj lasdjf asldkflkasdj lfjasdlkjf lasdjf asdlk'
                        number='06.'
                        variant='end'
                    ></PrintProcessBox>
                </div>
            </div>
        </section>
    )
}

export default PrintProcess
