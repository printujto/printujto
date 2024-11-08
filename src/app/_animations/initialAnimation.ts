import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const InitialAnimation = (path: string) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    if (path === '/') {
        //ONLY PHONE
        mm.add('(max-width: 767px)', () => {
            gsap.utils.toArray('.service-box').forEach((box) => {
                if (!box) return
                gsap.to(box, {
                    opacity: 1,
                    duration: 0.4,

                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: box as HTMLElement,
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none reset',
                    },
                })
            })
        })

        //ONLY PC
        mm.add('(min-width: 768px)', () => {
            //HERO
            gsap.fromTo(
                '#background_blur_1',
                {
                    top: -10,
                    left: -20,
                    opacity: 0.15,
                },
                {
                    top: 200,
                    left: 30,
                    opacity: 0.18,
                    duration: 10,
                    repeat: -1,
                    ease: 'power1.inOut',
                    yoyo: true,
                }
            )
            gsap.fromTo(
                '#background_blur_2',
                {
                    bottom: -50,
                    right: -20,
                    opacity: 0.16,
                },
                {
                    bottom: 200,
                    right: -120,
                    opacity: 0.13,
                    duration: 12,
                    repeat: -1,
                    ease: 'power1.inOut',
                    yoyo: true,
                }
            )
            // gsap.to('.hero-image-1', {
            //     scrollTrigger: {
            //         trigger: '#hero-image',
            //         start: 'top 20%',
            //         end: 'bottom 20%',
            //         scrub: 0.5,
            //     },
            //     rotate: -5,
            // })

            // gsap.to('.hero-image-2', {
            //     scrollTrigger: {
            //         trigger: '#hero-image',
            //         start: 'top 20%',
            //         end: 'bottom 20%',
            //         scrub: 0.5,
            //     },

            //     rotate: 10,
            // })

            // gsap.to('.hero-small-image', {
            //     scrollTrigger: {
            //         trigger: '#hero-image',
            //         start: 'top 20%',
            //         end: 'bottom 20%',
            //         scrub: 0.5,
            //     },
            //     stagger: 1,
            //     y: -50,
            // })

            //OUR WORKS
            gsap.fromTo(
                '.service-box',
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#nase-sluzby',
                        start: 'top 80%',
                        end: 'bottom 80%',
                        toggleActions: 'play none none reset',
                    },
                }
            )

            //PRINT PROCESS

            ScrollTrigger.create({
                trigger: '#print-process-line',
                start: 'start center',
                end: 'bottom center',

                onUpdate: (self) => {
                    const progress = self.progress * 100
                    gsap.to('#print-process-line-fill', {
                        ease: 'power1.in',
                        duration: 0.2,
                        height: progress + '%',
                    })
                },
            })
        })

        //Všechna zařízení
        gsap.utils.toArray('.print-process-box').forEach((box) => {
            if (!box) return

            gsap.to(box, {
                opacity: 1,
                duration: 0.4,

                ease: 'power1.out',
                scrollTrigger: {
                    trigger: box as HTMLElement,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none reset',
                },
            })
        })
        gsap.to('#heroImage3', {
            yoyo: true,
            repeat: -1,
            y: 25,
            duration: 3,
            ease: 'power1.inOut',
            opacity: 0.9,
            filter: 'brightness(1)',
        })
    }
}

export default InitialAnimation
