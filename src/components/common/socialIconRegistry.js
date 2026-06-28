import { Mail, Globe } from 'lucide-react'
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa6'

/**
 * Maps a serializable `icon` key (stored in data/socials) to its component.
 * Keeps data files free of non-serializable references.
 */
export const SOCIAL_ICONS = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    mail: Mail,
    twitter: FaXTwitter,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
    website: Globe,
}
