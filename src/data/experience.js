/**
 * Experience — the developer-journey timeline. Structure only, no defaults.
 * Order entries chronologically (oldest → newest); the last one is usually
 * the current milestone.
 *
 * @typedef {Object} Milestone
 * @property {string}  id
 * @property {string}  year
 * @property {string}  title
 * @property {string}  [description]   Keep it to ~2 lines.
 * @property {Array<string | { name: string, icon?: string }>} [tech]
 * @property {string}  [achievement]
 * @property {boolean} [current]
 *
 * @type {Milestone[]}
 */
export const experience = []
