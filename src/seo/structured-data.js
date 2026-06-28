import { siteConfig } from '@/config/site'

/**
 * JSON-LD for the person (rich results / knowledge panel foundation).
 * @param {{ sameAs?: string[] }} [opts]
 */
export function personSchema(opts = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.author.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        jobTitle: 'Frontend & Full Stack Developer',
        sameAs: opts.sameAs ?? [],
    }
}

/** JSON-LD describing the website itself. */
export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
    }
}
