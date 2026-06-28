import { useEffect, useMemo, useState } from 'react'
import { CursorContext } from '@/contexts/cursor-context'
import { CursorFollower } from '@/components/common/CursorFollower'
import { isTouchDevice } from '@/utils/deviceDetection'
import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

const INTERACTIVE = 'a, button, [role="button"], [data-cursor="hover"]'

/**
 * Cursor System provider. Disabled on touch devices and when the user
 * prefers reduced motion. Uses event delegation to detect hovering over
 * interactive elements (no per-element listeners).
 *
 * @param {{ children: import('react').ReactNode }} props
 */
export function CursorProvider({ children }) {
    const [variant, setVariant] = useState('default')
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        setEnabled(!isTouchDevice() && !prefersReducedMotion())
    }, [])

    useEffect(() => {
        if (!enabled) return
        document.documentElement.classList.add('custom-cursor-active')

        const onOver = (e) => {
            if (e.target.closest?.(INTERACTIVE)) setVariant('hover')
        }
        const onOut = (e) => {
            // Only reset when truly leaving an interactive element (not when
            // moving between its own children), to avoid hover flicker.
            const from = e.target.closest?.(INTERACTIVE)
            const to = e.relatedTarget
            if (from && !(to && to.closest?.(INTERACTIVE) === from)) {
                setVariant('default')
            }
        }
        const onDown = () => setVariant('click')
        const onUp = (e) =>
            setVariant(e.target.closest?.(INTERACTIVE) ? 'hover' : 'default')

        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)
        document.addEventListener('mousedown', onDown)
        document.addEventListener('mouseup', onUp)

        return () => {
            document.documentElement.classList.remove('custom-cursor-active')
            document.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseout', onOut)
            document.removeEventListener('mousedown', onDown)
            document.removeEventListener('mouseup', onUp)
        }
    }, [enabled])

    const value = useMemo(
        () => ({ variant, setVariant, enabled }),
        [variant, enabled],
    )

    return (
        <CursorContext.Provider value={value}>
            {children}
            {enabled && <CursorFollower />}
        </CursorContext.Provider>
    )
}
