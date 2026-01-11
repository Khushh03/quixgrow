import { Badge } from "@/components/ui/badge"

export default function About() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
                <div className="flex flex-col items-center text-center space-y-8">
                    <Badge variant="outline" className="text-sm py-1 px-4 border-primary/20 bg-primary/5 text-primary">
                        About QuixGrow
                    </Badge>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-[25ch]">
                        Practical Accounting & Taxation Training Platform
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-[65ch] leading-relaxed">
                        If you want to work confidently in real job environments, QuixGrow is the right platform for
                        you. We bridge the gap between textbook theory and actual office work.
                    </p>

                    <div className="mt-8 p-8 bg-card rounded-2xl shadow-sm border border-border/50 max-w-3xl w-full">
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-2xl font-medium text-foreground/90">
                            To make students{" "}
                            <span className="text-primary font-bold">confident, skilled, and job-ready.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
