/**
 * Development Preview resolver.
 *
 * In DEV: fills blank fields of the real data with preview content so the
 * layout can be evaluated realistically — while any field you actually
 * fill in `data/*.js` takes precedence.
 *
 * In PRODUCTION (`vite build`): returns the real data untouched, so
 * preview content can NEVER leak into a production build.
 *
 * Opt out in dev with `VITE_PREVIEW=false`.
 */

const PREVIEW_ON =
    import.meta.env.DEV && import.meta.env.VITE_PREVIEW !== 'false'

function isBlank(value) {
    return (
        value == null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
    )
}

function merge(real, preview) {
    if (Array.isArray(preview)) {
        return isBlank(real) ? preview : real
    }
    if (preview && typeof preview === 'object') {
        const out = {}
        for (const key of Object.keys(preview)) {
            out[key] = merge(real?.[key], preview[key])
        }
        // Preserve any keys present only on the real object.
        if (real && typeof real === 'object') {
            for (const key of Object.keys(real)) {
                if (!(key in out)) out[key] = real[key]
            }
        }
        return out
    }
    return isBlank(real) ? preview : real
}

/**
 * @template T
 * @param {T} real
 * @param {T} preview
 * @returns {T}
 */
export function withPreview(real, preview) {
    return PREVIEW_ON ? merge(real, preview) : real
}

/** Whether preview content is currently active (dev indicator, etc.). */
export const isPreviewActive = PREVIEW_ON
