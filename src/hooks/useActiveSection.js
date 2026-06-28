import { useEffect, useState } from 'react'

/**
 * Detect which section is currently in view using IntersectionObserver
 * (efficient, no scroll listener). Returns the active section id.
 *
 * @param {string[]} sectionIds
 * @param {{ rootMargin?: string }} [options]
 * @returns {string}
 */
export function useActiveSection(sectionIds, options = {}) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean)
        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
                if (visible[0]) setActiveId(visible[0].target.id)
            },
            {
                rootMargin: options.rootMargin ?? '-45% 0px -45% 0px',
                threshold: [0, 0.25, 0.5, 1],
            },
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [sectionIds, options.rootMargin])

    return activeId
}
