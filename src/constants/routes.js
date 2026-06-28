/**
 * Central route table. Adding a new page = add an entry here + a lazy
 * page component + a <Route> in AppRoutes — no architectural changes.
 */
export const ROUTES = Object.freeze({
    HOME: '/',
    PROJECTS: '/projects',
    PROJECT_DETAIL: '/project/:slug',
    BLOG: '/blog',
    BLOG_POST: '/blog/:slug',
    GALLERY: '/gallery',
    CERTIFICATES: '/certificates',
    CONTACT: '/contact',
    PRIVACY: '/privacy',
    NOT_FOUND: '*',
})

/**
 * Build a concrete path from a parameterized route.
 * @param {string} route - e.g. ROUTES.PROJECT_DETAIL
 * @param {Record<string, string|number>} params
 * @returns {string}
 */
export function buildPath(route, params = {}) {
    return Object.entries(params).reduce(
        (path, [key, value]) => path.replace(`:${key}`, String(value)),
        route,
    )
}
