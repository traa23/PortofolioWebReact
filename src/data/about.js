/**
 * About section content. Fill these in — structure only, no defaults.
 * UI labels (e.g. "Education", "Currently") live in the components;
 * only personal values belong here.
 *
 * @typedef {Object} About
 * @property {string}   headline      Short H2 headline (your narrative hook).
 * @property {string[]} paragraphs    1–2 short narrative paragraphs.
 * @property {string}   philosophy    1–2 sentence working principle.
 * @property {Object}   facts
 * @property {string}   facts.education
 * @property {string}   facts.basedIn
 * @property {string}   facts.specialization
 * @property {string}   facts.currentGoal
 * @property {string[]} interests     Max 4 (extra are ignored).
 * @property {Object}   currently
 * @property {string}   currently.building
 * @property {string}   currently.learning
 * @property {string}   currently.exploring
 */

/** @type {About} */
export const about = {
    headline: '',
    paragraphs: [],
    philosophy: '',
    facts: {
        education: '',
        basedIn: '',
        specialization: '',
        currentGoal: '',
    },
    interests: [],
    currently: {
        building: '',
        learning: '',
        exploring: '',
    },
}
