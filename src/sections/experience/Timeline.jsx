import { useRef } from 'react'
import { useInView } from 'motion/react'
import { TimelineConnector } from './TimelineConnector'
import { TimelineItem } from './TimelineItem'

/**
 * Ordered, semantic timeline. A single in-view trigger drives the reveal
 * sequence (rail grows → nodes pop → cards slide in), once.
 *
 * @param {{ items: import('@/data/experience').Milestone[] }} props
 */
export function Timeline({ items }) {
    const ref = useRef(null)
    const active = useInView(ref, { once: true, margin: '-100px' })

    return (
        <ol ref={ref} className="relative space-y-10 md:space-y-14">
            <TimelineConnector active={active} />
            {items.map((item, index) => (
                <TimelineItem
                    key={item.id ?? index}
                    item={item}
                    index={index}
                    active={active}
                />
            ))}
        </ol>
    )
}
