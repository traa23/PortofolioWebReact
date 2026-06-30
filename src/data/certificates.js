/**
 * Certificates — real data.
 * Put issuer logos in public/certificates/ and set `logo` (empty shows a
 * fallback award icon). Add `verifyUrl` to show a Verify button.
 *
 * @typedef {Object} Certificate
 * @property {string} id
 * @property {string} name
 * @property {string} issuer
 * @property {string|number} [year]
 * @property {string} [logo]
 * @property {string} [verifyUrl]
 * @type {Certificate[]}
 */
export const certificates = [
    {
        id: 'csirt-seminar',
        name: 'Seminar CSIRT — "Cyber Security Starts With You"',
        issuer: 'Politeknik Caltex Riau · CSIRT',
        year: 2025,
        logo: '',
    },
    {
        id: 'algoritma-pemrograman',
        name: 'Course Completion — Algoritma Pemrograman',
        issuer: 'Politeknik Caltex Riau',
        year: 2025,
        logo: '',
    },
    {
        id: 'imk',
        name: 'Course Completion — Interaksi Manusia & Komputer',
        issuer: 'Politeknik Caltex Riau',
        year: 2025,
        logo: '',
    },
    {
        id: 'pbo',
        name: 'Course Completion — Pemrograman Berorientasi Objek',
        issuer: 'Politeknik Caltex Riau',
        year: 2025,
        logo: '',
    },
]
