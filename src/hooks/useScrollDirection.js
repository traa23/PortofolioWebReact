import { useEffect, useState } from 'react'
import { throttle } from '@/utils/throttle'

/**
 * Track vertical scroll direction and whether the page has scrolled past
 * a threshold. Powers navbar hide/show + glassmorphism.
 *
 * @param {number} [threshold=8] - Min delta (px) before changing direction.
 * @returns {{ direction: 'up' | 'down', scrolled: boolean, atTop: boolean }}
 */
export function useScrollDirection(threshold = 8) {
    const [state, setState] = useState({
        direction: 'up',
        scrolled: false,
        atTop: true,
    })

    useEffect(() => {
        let lastY = window.scrollY

        const update = () => {
            const y = window.scrollY
            const diff = y - lastY
            const scrolled = y > 24
            const atTop = y <= 4

            setState((prev) => {
                const direction =
                    Math.abs(diff) >= threshold
                        ? diff > 0
                            ? 'down'
                            : 'up'
                        : prev.direction
                // Avoid re-render when nothing meaningful changed.
                if (
                    prev.direction === direction &&
                    prev.scrolled === scrolled &&
                    prev.atTop === atTop
                ) {
                    if (Math.abs(diff) >= threshold) lastY = y
                    return prev
                }
                if (Math.abs(diff) >= threshold) lastY = y
                return { direction, scrolled, atTop }
            })
        }

        const onScroll = throttle(update, 100)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [threshold])

    return state
}
