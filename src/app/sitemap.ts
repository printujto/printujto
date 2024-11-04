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
        {
            url: 'https://printujto.eu/doprava-a-platba',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/doprava-a-platba',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.eu/gdpr',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/gdpr',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.eu/obchodni-podminky',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/obchodni-podminky',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.eu/reklamace',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/reklamace',
            lastModified: new Date(),
            priority: 0.1,
        },
    ]
}
