import { siteConfig } from '@/config/site'
import { buildSeoMeta } from './seo-config'

/**
 * Per-page SEO. Relies on React 19 native metadata hoisting — any
 * <title>/<meta>/<link> rendered here is automatically moved to <head>.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.path]      Path for canonical/OG url.
 * @param {string} [props.image]
 * @param {object} [props.jsonLd]    Optional structured data object.
 * @param {boolean} [props.noIndex]
 */
export function Seo({ title, description, path, image, jsonLd, noIndex }) {
    const meta = buildSeoMeta({ title, description, path, image })

    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            <link rel="canonical" href={meta.url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:image" content={meta.image} />
            <meta property="og:locale" content={siteConfig.locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </>
    )
}
