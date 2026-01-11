import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <Badge variant="secondary" className="rounded-md py-1 border-border" asChild>
                        <Link to=".">
                            New Batch Starting Soon <ArrowUpRight className="ml-1 size-4" />
                        </Link>
                    </Badge>
                    <h1 className="mt-6 max-w-[20ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.2]! tracking-[-0.035em] bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Build a Strong Accounting Career with Real-World Practical Knowledge
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg text-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        Become a next-level accountant. We provide practical, job-oriented accounting and taxation
                        training focusing on real office work, not just theory.
                    </p>
                    <div className="mt-12 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <Button size="lg" className="rounded-md text-base">
                            Start Your Journey <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-md text-base shadow-none">
                            View Courses <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                    </div>
                </div>
                <div
                    className={cn(
                        "w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none",
                        "bg-[url('https://picsum.photos/id/3/1000/600')] bg-cover bg-center bg-no-repeat",
                    )}
                />
            </div>
        </div>
    )
}
