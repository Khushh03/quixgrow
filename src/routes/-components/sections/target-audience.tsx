import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function TargetAudience() {
    const audience = [
        "Students from Commerce or Non-Commerce backgrounds",
        "Freshers looking for a job",
        "Working Professionals upgrading skills",
        "Business Owners managing their own accounts",
    ]

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-(--breakpoint-xl)">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-accent/20">
                        {/* Placeholder for audience image - using a pattern or abstract shape for now if no image provided */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <Badge
                            variant="outline"
                            className="mb-4 text-sm py-1 px-4 border-primary/20 bg-primary/5 text-primary"
                        >
                            Who Can Join?
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            No Background Restriction – Everyone Can Learn
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            At QuixGrow, no specific educational background is required. We start from basic
                            fundamentals and gradually move towards advanced practical work.
                        </p>

                        <div className="space-y-4">
                            {audience.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                                >
                                    <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
