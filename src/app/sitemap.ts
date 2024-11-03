import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://printujto.eu',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://printujto.cz',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://printujto.eu/o-nas',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://printujto.cz/o-nas',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://printujto.eu/poptat-tisk',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://printujto.cz/poptat-tisk',
            lastModified: new Date(),
            priority: 0.9,
        },
    ]
}
