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
    SiReactrouter,
    SiFramer,
    SiShadcnui,
    SiRadixui,
    SiThreedotjs,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastapi,
    SiLaravel,
    SiSupabase,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiFirebase,
    SiPython,
    SiTensorflow,
    SiKeras,
    SiGooglecolab,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiFigma,
    SiVercel,
    SiXampp,
    SiAndroidstudio,
    SiCisco,
    SiKotlin,
    SiPhp,
    SiCplusplus,
    SiCodeigniter,
    SiAutocad,
    SiSketchup,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { Code2, Database, Video, Box, Network } from 'lucide-react'

/**
 * Tech key → { Icon, color }. Only the icons referenced here are bundled
 * (react-icons named imports are tree-shakeable). Black-on-light brand
 * logos use a light color so they read on the dark theme.
 */
export const TECH = {
    // Frontend
    react: { Icon: SiReact, color: '#61DAFB' },
    nextjs: { Icon: SiNextdotjs, color: '#FFFFFF' },
    typescript: { Icon: SiTypescript, color: '#3178C6' },
    javascript: { Icon: SiJavascript, color: '#F7DF1E' },
    tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
    html5: { Icon: SiHtml5, color: '#E34F26' },
    css3: { Icon: SiCss, color: '#1572B6' },
    redux: { Icon: SiRedux, color: '#764ABC' },
    vite: { Icon: SiVite, color: '#646CFF' },
    reactrouter: { Icon: SiReactrouter, color: '#CA4245' },
    framer: { Icon: SiFramer, color: '#0055FF' },
    shadcn: { Icon: SiShadcnui, color: '#FFFFFF' },
    radix: { Icon: SiRadixui, color: '#FFFFFF' },
    threejs: { Icon: SiThreedotjs, color: '#FFFFFF' },

    // Backend
    nodejs: { Icon: SiNodedotjs, color: '#5FA04E' },
    express: { Icon: SiExpress, color: '#FFFFFF' },
    nestjs: { Icon: SiNestjs, color: '#E0234E' },
    fastapi: { Icon: SiFastapi, color: '#009688' },
    laravel: { Icon: SiLaravel, color: '#FF2D20' },
    restapi: { Icon: Code2, color: '#06B6D4' },

    // Database / BaaS
    mongodb: { Icon: SiMongodb, color: '#47A248' },
    postgresql: { Icon: SiPostgresql, color: '#4169E1' },
    mysql: { Icon: SiMysql, color: '#4479A1' },
    prisma: { Icon: SiPrisma, color: '#5A67D8' },
    firebase: { Icon: SiFirebase, color: '#FFCA28' },
    supabase: { Icon: SiSupabase, color: '#3FCF8E' },
    oracle: { Icon: Database, color: '#F80000' },
    sql: { Icon: Database, color: '#4479A1' },

    // AI / ML
    python: { Icon: SiPython, color: '#3776AB' },
    tensorflow: { Icon: SiTensorflow, color: '#FF6F00' },
    keras: { Icon: SiKeras, color: '#D00000' },
    colab: { Icon: SiGooglecolab, color: '#F9AB00' },

    // Tools
    git: { Icon: SiGit, color: '#F05032' },
    github: { Icon: SiGithub, color: '#FFFFFF' },
    docker: { Icon: SiDocker, color: '#2496ED' },
    postman: { Icon: SiPostman, color: '#FF6C37' },
    figma: { Icon: SiFigma, color: '#F24E1E' },
    vercel: { Icon: SiVercel, color: '#FFFFFF' },
    vscode: { Icon: Code2, color: '#007ACC' },
    xampp: { Icon: SiXampp, color: '#FB7A24' },
    androidstudio: { Icon: SiAndroidstudio, color: '#3DDC84' },
    cisco: { Icon: SiCisco, color: '#1BA0D7' },

    // Languages
    java: { Icon: FaJava, color: '#F89820' },
    cpp: { Icon: SiCplusplus, color: '#00599C' },
    php: { Icon: SiPhp, color: '#777BB4' },
    kotlin: { Icon: SiKotlin, color: '#7F52FF' },
    codeigniter: { Icon: SiCodeigniter, color: '#EF4223' },

    // Networking / Design / Multimedia
    networking: { Icon: Network, color: '#06B6D4' },
    autocad: { Icon: SiAutocad, color: '#E51050' },
    sketchup: { Icon: SiSketchup, color: '#005F9E' },
    threed: { Icon: Box, color: '#8B5CF6' },
    video: { Icon: Video, color: '#EC4899' },
}

/**
 * Safe lookup with a neutral fallback so unknown/missing keys never break.
 * @param {string} key
 * @returns {{ Icon: import('react').ComponentType<any>, color: string }}
 */
export function getTech(key) {
    return TECH[key] ?? { Icon: Code2, color: '#94a3b8' }
}
