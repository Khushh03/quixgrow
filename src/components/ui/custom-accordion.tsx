import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onToggle?: () => void
    duration?: string
    lectureCount?: number
}

const AccordionItem = ({ title, children, isOpen, onToggle, duration, lectureCount }: AccordionItemProps) => {
    return (
        <div className="border-b border-border/50 last:border-0">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-4 text-sm font-medium hover:underline text-left"
            >
                <div className="flex items-center gap-2">
                    <ChevronDown
                        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                    />
                    {title}
                </div>

                {(lectureCount || duration) && (
                    <span className="text-muted-foreground text-xs font-normal">
                        {lectureCount ? `${lectureCount} lectures` : ""}
                        {lectureCount && duration ? " • " : ""}
                        {duration}
                    </span>
                )}
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all text-sm",
                    isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0",
                )}
            >
                <div className="pl-6 text-muted-foreground">{children}</div>
            </div>
        </div>
    )
}

export { AccordionItem }
