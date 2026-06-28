import { Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Project preview image. Falls back to a brand gradient placeholder when
 * no `src` is provided (used during development) — so swapping in real
 * screenshots later (public/projects/*.webp) requires no structural change.
 *
 * Layout-stable: the wrapper owns the aspect ratio, the image is lazy with
 * explicit intrinsic width/height + object-cover, and the placeholder fills
 * the identical box — so dropping in a real screenshot never shifts layout.
 *
 * @param {Object} props
 * @param {string} [props.src]
 * @param {string} props.alt
 * @param {string} [props.className]
 * @param {number} [props.width=1280]
 * @param {number} [props.height=800]
 */
export function ProjectImage({ src, alt, className, width = 1280, height = 800 }) {
    return (
        <div className={cn('relative overflow-hidden bg-card/40', className)}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
            ) : (
                <div className="flex size-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20">
                    <ImageIcon
                        className="size-10 text-muted-foreground/40"
                        aria-hidden="true"
                    />
                </div>
            )}
        </div>
    )
}
