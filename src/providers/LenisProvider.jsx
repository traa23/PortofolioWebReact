import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

/**
 * Wraps the app in Lenis smooth scrolling.
 * - Disabled automatically when the user prefers reduced motion.
 * - Exposes the instance on `window.__lenis` for `scrollToSection`.
 *
 * @param {{ children: import('react').ReactNode }} props
 */
export function LenisProvider({ children }) {
    const lenisRef = useRef(null)
    const reduced = prefersReducedMotion()

    useEffect(() => {
        const lenis = lenisRef.current?.lenis
        if (!lenis) return
        window.__lenis = lenis
        return () => {
            if (window.__lenis === lenis) delete window.__lenis
        }
    }, [])

    const options = {
        lerp: 0.1,
        smoothWheel: !reduced,
        duration: 1.1,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
    }

    return (
        <ReactLenis ref={lenisRef} root options={options}>
            {children}
        </ReactLenis>
    )
}
