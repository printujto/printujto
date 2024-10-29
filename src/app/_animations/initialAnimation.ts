import gsap from 'gsap'

const InitialAnimation = () => {
    let mm = gsap.matchMedia()

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
    })
}

export default InitialAnimation

// - bottom - 16 - right - 16
