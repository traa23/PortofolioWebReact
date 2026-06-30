/**
 * Statistics — real data. Keep numbers honest.
 *
 * @typedef {Object} Stat
 * @property {string} id
 * @property {string} label
 * @property {number} value
 * @property {string} [suffix]
 * @property {'projects'|'certificates'|'technologies'|'learning'} icon
 * @type {Stat[]}
 */
export const stats = [
    { id: 'projects', label: 'Projects Completed', value: 10, suffix: '+', icon: 'projects' },
    { id: 'certificates', label: 'Certificates', value: 4, suffix: '', icon: 'certificates' },
    { id: 'technologies', label: 'Technologies Learned', value: 25, suffix: '+', icon: 'technologies' },
    { id: 'learning', label: 'Learning Journey (Years)', value: 2, suffix: '+', icon: 'learning' },
]
