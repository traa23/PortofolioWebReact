import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiRedux,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastapi,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiFirebase,
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiOpenai,
    SiPandas,
    SiJupyter,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiFigma,
    SiVercel,
    SiCplusplus,
    SiPhp,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { Code2 } from 'lucide-react'

/**
 * Tech key → { Icon, color }. Only the icons referenced here are bundled
 * (react-icons named imports are tree-shakeable). Black-on-light brand
 * logos use a light color so they read on the dark theme.
 */
export const TECH = {
    react: { Icon: SiReact, color: '#61DAFB' },
    nextjs: { Icon: SiNextdotjs, color: '#FFFFFF' },
    typescript: { Icon: SiTypescript, color: '#3178C6' },
    javascript: { Icon: SiJavascript, color: '#F7DF1E' },
    tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
    html5: { Icon: SiHtml5, color: '#E34F26' },
    css3: { Icon: SiCss, color: '#1572B6' },
    redux: { Icon: SiRedux, color: '#764ABC' },
    vite: { Icon: SiVite, color: '#646CFF' },

    nodejs: { Icon: SiNodedotjs, color: '#5FA04E' },
    express: { Icon: SiExpress, color: '#FFFFFF' },
    nestjs: { Icon: SiNestjs, color: '#E0234E' },
    fastapi: { Icon: SiFastapi, color: '#009688' },

    mongodb: { Icon: SiMongodb, color: '#47A248' },
    postgresql: { Icon: SiPostgresql, color: '#4169E1' },
    mysql: { Icon: SiMysql, color: '#4479A1' },
    prisma: { Icon: SiPrisma, color: '#5A67D8' },
    firebase: { Icon: SiFirebase, color: '#FFCA28' },

    python: { Icon: SiPython, color: '#3776AB' },
    tensorflow: { Icon: SiTensorflow, color: '#FF6F00' },
    pytorch: { Icon: SiPytorch, color: '#EE4C2C' },
    openai: { Icon: SiOpenai, color: '#FFFFFF' },
    pandas: { Icon: SiPandas, color: '#A0A0FF' },
    jupyter: { Icon: SiJupyter, color: '#F37626' },

    git: { Icon: SiGit, color: '#F05032' },
    github: { Icon: SiGithub, color: '#FFFFFF' },
    docker: { Icon: SiDocker, color: '#2496ED' },
    postman: { Icon: SiPostman, color: '#FF6C37' },
    figma: { Icon: SiFigma, color: '#F24E1E' },
    vercel: { Icon: SiVercel, color: '#FFFFFF' },

    java: { Icon: FaJava, color: '#F89820' },
    cpp: { Icon: SiCplusplus, color: '#00599C' },
    php: { Icon: SiPhp, color: '#777BB4' },
}

/**
 * Safe lookup with a neutral fallback so unknown/missing keys never break.
 * @param {string} key
 * @returns {{ Icon: import('react').ComponentType<any>, color: string }}
 */
export function getTech(key) {
    return TECH[key] ?? { Icon: Code2, color: '#94a3b8' }
}
