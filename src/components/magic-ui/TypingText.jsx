import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Magic UI style — Typing Animation (rotating words).
 *
 * Layout-stable: an invisible sizer reserves the width/height of the
 * longest word so the line never reflows or re-centers while typing.
 * Accessibility: the full list is exposed to screen readers; the animated
 * text is aria-hidden. Reduced-motion shows the first word statically.
 *
 * @param {Object} props
 * @param {string[]} props.words
 * @param {number} [props.typingSpeed=55]
 * @param {number} [props.deletingSpeed=30]
 * @param {number} [props.pause=1600]
 * @param {string} [props.className]   Applied to the visible typed text.
 */
export function TypingText({
    words = [],
    typingSpeed = 55,
    deletingSpeed = 30,
    pause = 1600,
    className,
}) {
    const reduced = useReducedMotion()
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    const longest = useMemo(
        () => words.reduce((a, b) => (b.length > a.length ? b : a), ''),
        [words],
    )

    useEffect(() => {
        if (reduced || words.length === 0) return
        const current = words[wordIndex % words.length]

        let timeout
        if (!deleting && text === current) {
            timeout = setTimeout(() => setDeleting(true), pause)
        } else if (deleting && text === '') {
            setDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
        } else {
            const next = deleting
                ? current.slice(0, text.length - 1)
                : current.slice(0, text.length + 1)
            timeout = setTimeout(
                () => setText(next),
                deleting ? deletingSpeed : typingSpeed,
            )
        }
        return () => clearTimeout(timeout)
    }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause, reduced])

    if (reduced) {
        return <span className={className}>{words[0]}</span>
    }

    return (
        <span className="relative inline-block whitespace-nowrap text-left align-bottom">
            {/* Sizer: reserves space for the longest word (+ caret). */}
            <span aria-hidden="true" className="invisible">
                {longest}
            </span>
            {/* Animated text overlaid in the reserved box. */}
            <span className="absolute inset-0">
                <span className="sr-only">{words.join(', ')}</span>
                <span aria-hidden="true" className={className}>
                    {text}
                </span>
                <span
                    aria-hidden="true"
                    className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-primary align-middle"
                />
            </span>
        </span>
    )
}
