/**
 * Personal profile — consumed by the Hero (and About) sections.
 *
 * @typedef {Object} Profile
 * @property {string}   greeting
 * @property {string}   name         Shown large in the hero.
 * @property {string[]} roles        Rotated by the typing animation.
 * @property {string}   description
 * @property {string}   availability
 * @property {string}   location
 * @property {string}   photo
 */

/** @type {Profile} */
export const profile = {
    greeting: "Hi, I'm",
    name: 'Anugrah Putra Fajar',
    roles: [
        'Frontend Developer',
        'Information Systems Student',
        'AI Enthusiast',
    ],
    description:
        'Mahasiswa Sistem Informasi dengan minat besar pada Frontend Development, UI/UX Design, dan Artificial Intelligence — terbiasa membangun aplikasi web modern yang cepat, responsif, dan mudah digunakan dengan React, Tailwind CSS, serta berbagai teknologi pendukung lainnya.',
    availability: 'Open to opportunities',
    location: 'Pekanbaru, Indonesia',
    photo: '/ISOPutra3D.png',
}
