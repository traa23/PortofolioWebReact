/**
 * Create a debounced version of a function that delays invocation until
 * `wait` ms have elapsed since the last call.
 *
 * @template {(...args: any[]) => void} T
 * @param {T} fn - Function to debounce.
 * @param {number} [wait=200] - Delay in milliseconds.
 * @returns {T & { cancel: () => void }}
 */
export function debounce(fn, wait = 200) {
    let timeout

    function debounced(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), wait)
    }

    debounced.cancel = () => clearTimeout(timeout)
    return debounced
}
