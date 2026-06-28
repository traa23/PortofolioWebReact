import { useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Magic UI style — Number Ticker.
 * Counts from 0 to `value` once, when `start` becomes true. Never resets
 * or re-runs.
 *
 * Layout-stable: `tabular-nums` keeps each digit equal width, and an
 * invisible sizer reserves the width of the final value so the box never
 * changes width while counting (even across digit-count changes).
 *
 * Accessibility: animated digits are aria-hidden; the final value is
 * exposed to screen readers. Reduced-motion shows the final value at once.
 *
 * @param {Object} props
 * @param {number} props.value
 * @param {string} [props.suffix='']
 * @param {boolean} [props.start=true]
 * @param {number} [props.duration=1.8]
 * @param {string} [props.className]
 */
export function NumberTicker({
    value,
    suffix = '',
    start = true,
    duration = 1.8,
    className,
}) {
    const reduced = useReducedMotion()
    const [display, setDisplay] = useState(0)
    const startedRef = useRef(false)

    const decimals = Number.isInteger(value) ? 0 : 1
    const format = (n) =>
        `${Number(n).toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        })}${suffix}`

    useEffect(() => {
        if (reduced) {
            setDisplay(value)
            return
        }
        if (!start || startedRef.current) return
        startedRef.current = true
        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setDisplay(v),
        })
        return () => controls.stop()
    }, [start, value, duration, reduced])

    return (
        <span className="relative inline-block tabular-nums">
            {/* Sizer reserves the final width → zero layout shift while counting. */}
            <span aria-hidden="true" className="invisible">
                {format(value)}
            </span>
            <span aria-hidden="true" className={cn('absolute inset-0', className)}>
                {format(display)}
            </span>
            <span className="sr-only">{format(value)}</span>
        </span>
    )
}
