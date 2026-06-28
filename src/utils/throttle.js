/**
 * Create a throttled version of a function that invokes at most once
 * per `limit` ms. Useful for scroll / mousemove handlers.
 *
 * @template {(...args: any[]) => void} T
 * @param {T} fn - Function to throttle.
 * @param {number} [limit=100] - Minimum interval between calls in ms.
 * @returns {T}
 */
export function throttle(fn, limit = 100) {
    let inThrottle = false
    let lastArgs = null

    return function throttled(...args) {
        if (inThrottle) {
            lastArgs = args
            return
        }
        fn.apply(this, args)
        inThrottle = true
        setTimeout(() => {
            inThrottle = false
            if (lastArgs) {
                throttled.apply(this, lastArgs)
                lastArgs = null
            }
        }, limit)
    }
}
