import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Briefcase, Coins, Headset, Layers } from "lucide-react"

export default function WhyChooseUs() {
    const features = [
        {
            icon: Briefcase,
            title: "Practical Job-Based Training",
            description: "Learn exactly what is required in the industry.",
        },
        {
            icon: Layers,
            title: "Structured Learning",
            description: "Clear, lesson-by-lesson format.",
        },
        {
            icon: Coins,
            title: "Affordable Fees",
            description: "Quality education that fits your budget.",
        },
        {
            icon: BookOpen,
            title: "Real Exposure",
            description: "Experience real office and client work scenarios.",
        },
        {
            icon: Headset,
            title: "Personal Guidance",
            description: "Dedicated doubt support.",
        },
    ]

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-(--breakpoint-xl)">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge
                        variant="outline"
                        className="mb-4 text-sm py-1 px-4 border-primary/20 bg-primary/5 text-primary"
                    >
                        Why Choose QuixGrow?
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Makes Us Different</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="border-border/50 bg-background/50 hover:bg-background transition-colors"
                        >
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}

                    <Card className="md:col-span-2 lg:col-span-1 border-yellow-500/30 bg-yellow-500/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3">
                            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
                        </div>
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400">
                                <Headset className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl text-yellow-700 dark:text-yellow-400">
                                Special Support Advantage
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground/90 text-sm leading-relaxed">
                                Even after completing the course and joining a job, if you face difficulties in real
                                work, our team will continue to support you until you are comfortable and confident.
                                <span className="block mt-2 font-medium text-yellow-700 dark:text-yellow-400">
                                    This long-term support is what truly sets QuixGrow apart.
                                </span>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
