import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { usePageVisible, useMediaQuery } from '@/hooks'
import { getRenderProfile, isWebGLAvailable, isLowPowerDevice } from '@/utils'

// three.js + r3f load in their own chunk, only when 3D is actually enabled.
const HeroCanvas = lazy(() => import('@/components/three/HeroCanvas'))

/**
 * Progressive-enhancement 3D layer for the hero.
 *
 * Gating:
 *  - reduced-motion or no WebGL → renders nothing (CSS hero is the experience).
 *  - particle count + DPR adapt to device capability.
 *  - Floating Ring only on tablet+ (≥768px) and non-low-power devices,
 *    smaller below 1024px, and never on mobile.
 *  - rendering pauses when the hero is off-screen or the tab is hidden.
 */
export function Hero3D() {
    const reduced = useReducedMotion()
    const ref = useRef(null)
    const inView = useInView(ref)
    const pageVisible = usePageVisible()

    const isTabletUp = useMediaQuery('(min-width: 768px)')
    const isDesktopUp = useMediaQuery('(min-width: 1024px)')

    const [enabled, setEnabled] = useState(false)
    const [profile, setProfile] = useState({
        dpr: [1, 1.5],
        count: 1200,
        lowPower: true,
    })

    useEffect(() => {
        if (reduced || !isWebGLAvailable()) {
            setEnabled(false)
            return
        }
        const { dpr, quality } = getRenderProfile()
        const lowPower = isLowPowerDevice()
        setProfile({ dpr, count: quality === 'high' ? 3200 : 1000, lowPower })
        setEnabled(true)
    }, [reduced])

    if (!enabled) return null

    const active = inView && pageVisible
    const showRing = isTabletUp && !profile.lowPower
    const ringScale = isDesktopUp ? 1 : 0.86

    return (
        <div ref={ref} className="absolute inset-0">
            <Suspense fallback={null}>
                <HeroCanvas
                    dpr={profile.dpr}
                    count={profile.count}
                    frameloop={active ? 'always' : 'never'}
                    showRing={showRing}
                    ringScale={ringScale}
                />
            </Suspense>
        </div>
    )
}
