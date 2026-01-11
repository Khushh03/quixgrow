import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-(--breakpoint-2xl) w-full mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 px-4 lg:px-8 pt-12 lg:pt-0">
                <div className="my-auto pt-12">
                    <Badge
                        variant="secondary"
                        className="bg-linear-to-r from-primary/90 to-primary/20 text-primary-foreground py-1 px-3 border-0 text-lg font-semibold"
                    >
                        New Batch Starting Soon
                    </Badge>
                    <h1 className="mt-6 max-w-[28ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.2]! tracking-[-0.035em] bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Build a Strong Accounting Career with Real-World Practical Knowledge
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg text-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        Become a next-level accountant. We provide practical, job-oriented accounting and taxation
                        training focusing on real office work, not just theory.
                    </p>

                    <div className="mt-10 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <Button size="lg" className="rounded-md text-base h-12 max-w-xs w-full">
                            Start Your Journey <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                    </div>
                </div>
                <div
                    className={cn(
                        "w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none",
                        "bg-[url('https://picsum.photos/id/3/1000/600')] bg-cover bg-center bg-no-repeat",
                    )}
                >
                    {/* <ul className="mt-6 relative space-y-3 max-w-[60ch] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        {[
                            {
                                title: "Job-oriented training based on real office workflows",
                                position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                            },
                            {
                                title: "Affordable course fees with lifetime support",
                                position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                            },
                            {
                                title: "Taught by Ankit Raj — 7+ years in accounting & taxation",
                                position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                            },
                        ].map((item, index) => (
                            <li key={index} className={cn("flex items-start gap-2", item.position)}>
                                <CheckCircle className="text-primary mt-0.5 shrink-0 size-4" />
                                <span className="text-muted-foreground/90 text-xs">{item.title}</span>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </div>
    )
}
