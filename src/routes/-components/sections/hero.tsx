import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight, CirclePlay } from "lucide-react"

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <Badge variant="secondary" className="rounded-md py-1 border-border" asChild>
                        <Link to=".">
                            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
                        </Link>
                    </Badge>
                    <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
                        The Future of Learning is Coming Soon
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg text-foreground/80">
                        Experience the next generation of AI-powered education technology. Personalized learning paths,
                        intelligent tutoring, and revolutionary insights that adapt to your unique learning style.
                    </p>
                    <div className="mt-12 flex items-center gap-4">
                        <Button size="lg" className="rounded-md text-base">
                            Get Started <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-md text-base shadow-none">
                            <CirclePlay className="h-5! w-5!" /> Watch Demo
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
