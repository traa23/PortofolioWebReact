/**
 * Personal profile — edit these values freely.
 * Consumed by the Hero (and later About) sections.
 *
 * @typedef {Object} Profile
 * @property {string}   greeting
 * @property {string}   name
 * @property {string[]} roles        Rotated by the typing animation.
 * @property {string}   description  Keep it to ~2 lines.
 * @property {string}   availability Short status shown in the hero badge.
 * @property {string}   location
 * @property {string}   photo        Path under /public.
 */

/** @type {Profile} */
export const profile = {
    greeting: "Hi, I'm",
    name: 'Anugrah Putra Fajar',
    roles: [
        'Frontend Developer',
        'Full Stack Developer',
        'AI Enthusiast',
        'Aspiring Software Engineer',
    ],
    description:
        'Information Systems student crafting premium, performant web experiences — turning ideas into clean, scalable interfaces with React and modern web technology.',
    availability: 'Open to opportunities',
    location: 'Indonesia',
    photo: '/ISOPutra3D.png',
}
