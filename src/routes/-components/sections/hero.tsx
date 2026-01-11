import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRight, SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden relative z-10">
            {/* Radial Gradient Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
                }}
            />
            {/* Bottom Fade Grid Background */}
            <div
                className="absolute inset-0 -z-10 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                        `,
                    backgroundSize: "20px 30px",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                }}
            />

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

                    <InputGroup className="mt-8 h-13 max-w-lg bg-background">
                        <InputGroupInput name="query" placeholder="What do you want to learn?" />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <Button size="lg" className="rounded-md text-base">
                                <SearchIcon className="h-5! w-5!" />
                                Search
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div
                    // className={cn(
                    //     "w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none",
                    //     "bg-[url('https://picsum.photos/id/3/1000/600')] bg-cover bg-center bg-no-repeat",
                    // )}
                    className="flex place-items-center  "
                >
                    <img src="https://quixgrow.com/uploads/system/home-1.png" alt="hero-image" />
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
