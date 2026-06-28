import { siteConfig } from '@/config/site'

/**
 * Resolve a page title using the site title template.
 * @param {string} [title]
 * @returns {string}
 */
export function resolveTitle(title) {
    if (!title) return siteConfig.title
    return siteConfig.titleTemplate.replace('%s', title)
}

/**
 * Build the default Open Graph / Twitter metadata for a page.
 * @param {{ title?: string, description?: string, path?: string, image?: string }} [opts]
 */
export function buildSeoMeta(opts = {}) {
    const title = resolveTitle(opts.title)
    const description = opts.description ?? siteConfig.description
    const url = `${siteConfig.url}${opts.path ?? ''}`
    const image = opts.image ?? siteConfig.ogImage
    const absoluteImage = image.startsWith('http')
        ? image
        : `${siteConfig.url}${image}`

    return { title, description, url, image: absoluteImage }
}
