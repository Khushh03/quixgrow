import { cn } from "@/lib/utils"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn("text-2xl font-bold text-primary", props.className)}>
            QuixGrow
        </div>
    )
}
