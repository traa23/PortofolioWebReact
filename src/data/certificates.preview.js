/**
 * DEV-ONLY preview content for Certificates. Never bundled into production.
 * `logo: ''` shows the fallback award icon during development.
 * @type {import('./certificates').Certificate[]}
 */
export const certificatesPreview = [
    {
        id: 'meta-frontend',
        name: 'Meta Front-End Developer',
        issuer: 'Coursera',
        year: 2024,
        logo: '',
        verifyUrl: 'https://coursera.org',
    },
    {
        id: 'responsive-web',
        name: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        year: 2023,
        logo: '',
        verifyUrl: 'https://freecodecamp.org',
    },
    {
        id: 'ml-specialization',
        name: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI',
        year: 2025,
        logo: '',
        verifyUrl: 'https://coursera.org',
    },
    {
        id: 'js-algorithms',
        name: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        year: 2023,
        logo: '',
        verifyUrl: '',
    },
]
