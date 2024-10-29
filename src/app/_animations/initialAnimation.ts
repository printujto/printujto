import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const InitialAnimation = (path: string) => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    if (path === '/') {
        mm.add('(min-width: 768px)', () => {
            console.log('initializing')
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
            gsap.to('.hero-image-1', {
                scrollTrigger: {
                    trigger: '#hero-image',
                    start: 'top 20%',
                    end: 'bottom 20%',
                    scrub: 0.5,
                },
                rotate: -5,
            })

            gsap.to('.hero-image-2', {
                scrollTrigger: {
                    trigger: '#hero-image',
                    start: 'top 20%',
                    end: 'bottom 20%',
                    scrub: 0.5,
                },

                rotate: 10,
            })

            gsap.to('.hero-small-image', {
                scrollTrigger: {
                    trigger: '#hero-image',
                    start: 'top 20%',
                    end: 'bottom 20%',
                    scrub: -1,
                },

                y: -50,
            })
        })
    }
}

export default InitialAnimation
