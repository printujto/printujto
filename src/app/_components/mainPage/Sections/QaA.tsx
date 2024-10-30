import ChevronDownIcon from '@/app/_icons/ChevronDownIcon'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import React from 'react'

const qaa = [
    {
        q: 'Jak dlouho trvá 3D tisk mého produktu?',
        a: 'Doba tisku závisí na složitosti a velikosti projektu. Může se pohybovat od několika hodin až po několik dní. Po odsouhlasení návrhu vám poskytneme přesný časový odhad.',
    },
    {
        q: 'Jaké materiály nabízíte pro 3D tisk?',
        a: 'Nabízíme různé materiály, včetně PLA, ABS, ASA, PETG, PC, TPU resinu, a dalších. Výběr materiálu závisí na požadavcích na pevnost, flexibilitu nebo povrchovou úpravu.',
    },
    {
        q: 'Mohu dodat vlastní 3D model?',
        a: 'Ano, můžete nám dodat vlastní 3D model ve formátu STL nebo OBJ. Pokud potřebujete pomoc s úpravou nebo optimalizací modelu, naši odborníci jsou připraveni pomoci.',
    },
    {
        q: 'Co když nemám vlastní 3D model?',
        a: 'Pokud nemáte vlastní model, naši odborníci vám pomohou s jeho vytvořením pomocí CAD softwaru. Spolupracujeme s vámi na každém kroku, aby výsledek odpovídal vašim představám.',
    },
    {
        q: 'Jaké jsou možnosti doručení?',
        a: 'Doba tisku závisí na složitosti a velikosti projektu. Může se pohybovat od několika hodin až po několik dní. Po odsouhlasení návrhu vám poskytneme přesný časový odhad..',
    },
    {
        q: 'Jak probíhá platba za zakázku?',
        a: 'Platbu je možné provést předem prostřednictvím bankovního převodu nebo online platební brány. Podrobnosti platby vám poskytneme po odsouhlasení cenové nabídky.',
    },
]

const QaA = () => {
    return (
        <section className='pt-20' id='qaa'>
            <h1 className='text-center'>Nejčastější dotazy</h1>
            <div className='w-full pt-10 '>
                <div className='mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5 border-2 border-slate-400/30 shadow-md'>
                    {qaa.map((item, i) => (
                        <Disclosure key={i} as='div' className='p-4 sm:p-6'>
                            <DisclosureButton className='group flex w-full items-center justify-between'>
                                <span className='text-sm/6 font-medium text-left dark:text-white text-black group-data-[hover]:text-black/80 dark:group-data-[hover]:text-white/80'>
                                    {item.q}
                                </span>
                                <ChevronDownIcon className='size-5 stroke-black group-data-[hover]:stroke-black/80 dark:stroke-white dark:group-data-[hover]:stroke-white/80  duration-200 transition-all group-data-[open]:rotate-180' />
                            </DisclosureButton>
                            <DisclosurePanel className='mt-2 text-sm/5 text-black/70 dark:text-white/50'>
                                {item.a}
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QaA
