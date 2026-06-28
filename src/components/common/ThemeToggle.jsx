import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'
import { THEMES } from '@/constants/theme'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const ICONS = {
    [THEMES.LIGHT]: Sun,
    [THEMES.DARK]: Moon,
    [THEMES.SYSTEM]: Monitor,
}

const ORDER = [THEMES.DARK, THEMES.LIGHT, THEMES.SYSTEM]
const LABELS = {
    [THEMES.LIGHT]: 'Light',
    [THEMES.DARK]: 'Dark',
    [THEMES.SYSTEM]: 'System',
}

/**
 * Cycles through Dark → Light → System themes.
 */
export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const Icon = ICONS[theme] ?? Moon

    const cycle = () => {
        const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]
        setTheme(next)
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={cycle}
                    aria-label={`Switch theme (current: ${LABELS[theme]})`}
                >
                    <Icon className="size-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>Theme: {LABELS[theme]}</TooltipContent>
        </Tooltip>
    )
}
