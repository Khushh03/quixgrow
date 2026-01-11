import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Trainer() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-3xl -rotate-3 scale-[0.95] z-0" />

                        <Card className="p-0 relative overflow-hidden border-border z-10 bg-card/50 backdrop-blur-xs">
                            <CardContent className="p-0">
                                <div className="aspect-4/3 bg-muted relative">
                                    {/* Placeholder for trainer image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
                                        <Avatar className="h-48 lg:h-64 w-48 lg:w-64 rounded-2xl">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="Ankit Raj" />
                                            <AvatarFallback className="rounded-2xl text-4xl">AR</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-xs">
                                        <div className="font-bold text-lg">Ankit Raj</div>
                                        <div className="text-sm text-muted-foreground">
                                            7+ Years Exp. in Accounting & Taxation
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <Badge
                                variant="outline"
                                className="mb-4 text-sm py-1 px-4 border-primary/20 bg-primary/5 text-primary"
                            >
                                Meet Your Trainer
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Learn from an Experienced Industry Professional
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I don’t just explain concepts—I teach how accounting work is actually done in offices,
                                firms, and real job situations.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Accounting firms",
                                "Tax consultancies",
                                "Corporate offices",
                                "Business accounting roles",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-foreground/80">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="relative p-6 bg-secondary/30 rounded-xl border-l-4 border-primary">
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                            <p className="text-xl font-medium italic text-foreground/90 relative z-10">
                                "My teaching approach is 100% practical."
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground font-medium">— Ankit Raj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
