import { useEffect, useState } from 'react'

/**
 * True while the browser tab is visible. Used to pause 3D rendering when
 * the user switches away (saves GPU/CPU/battery).
 * @returns {boolean}
 */
export function usePageVisible() {
    const [visible, setVisible] = useState(
        typeof document === 'undefined' ? true : !document.hidden,
    )

    useEffect(() => {
        const onChange = () => setVisible(!document.hidden)
        document.addEventListener('visibilitychange', onChange)
        return () => document.removeEventListener('visibilitychange', onChange)
    }, [])

    return visible
}
