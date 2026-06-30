/** Navigation + layout sizing constants. */

/** In-page navigation links (single-page experience). */
export const NAV_LINKS = Object.freeze([
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
])

/** Section ids observed for active-link highlighting. */
export const SECTION_IDS = NAV_LINKS.map((link) => link.id)

/** Fixed navbar height (px) — used for scroll offset & spacing. */
export const NAVBAR_HEIGHT = 72

/** Offset applied when scrolling to a section (negative = above target). */
export const SCROLL_OFFSET = -(NAVBAR_HEIGHT + 16)

/** Resume / CV link (external — opens in a new tab). */
export const RESUME_URL = 'https://canva.link/qrtzjntb3zb77vd'
