import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
    Award,
    Briefcase,
    Calculator,
    ClipboardCheck,
    Cloud,
    Headset,
    MonitorPlay,
    MousePointer2,
    Search,
    Sparkles,
} from "lucide-react"

export default function WhyChooseUs() {
    const features = [
        {
            icon: MonitorPlay,
            title: "Blended Learning Module",
            description:
                "The blended learning module combines text-based materials with interactive video content, providing a comprehensive learning experience.",
            color: "blue",
        },
        {
            icon: MousePointer2,
            title: "Interactive Learning Materials",
            description:
                "Interactive learning materials include a variety of resources such as explainer videos, tutorial videos, quizzes, and infographics, ensuring an engaging and effective learning journey.",
            color: "purple",
        },
        {
            icon: ClipboardCheck,
            title: "Grading and Assessment",
            description:
                "Grading and assessment consists of various question types including multiple choice questions (MCQs), true or false, match the following, and image-based questions.",
            color: "green",
        },
        {
            icon: Award,
            title: "Verifiable Certificates",
            description:
                "The course is designed in accordance with industry-preferred curriculum standards, known as competency frameworks. Upon completion, learners receive a digital certificates verified by Tally.",
            color: "orange",
        },
        {
            icon: Cloud,
            title: "Tally Prime on Cloud",
            description:
                "TallyPrime on Cloud provides learners access to the licensed version of Tally, offering practical insights and enhancing their skills in handling real-world business scenarios.",
            color: "sky",
        },
        {
            icon: Calculator,
            title: "GST Compliance through Simulation",
            description:
                "This practical and interactive training tool replicates GST processes and calculations, including GST returns, generating e-Way bills, and e-Invoicing.",
            color: "red",
        },
        {
            icon: Briefcase,
            title: "Online Internship",
            description:
                "Tally’s online internship offers learners practical, hands-on experiences aligned with the National Education Policy (NEP), emphasising experiential learning.",
            color: "indigo",
        },
        {
            icon: Search,
            title: "Access to Tally Job Portal",
            description:
                "Tally Job Portal offers a seamless interface that connects Tally-certified learners with employers, streamlining the hiring process and boosting career prospects.",
            color: "emerald",
        },
        {
            icon: Sparkles,
            title: "Tally Tutor (AI Assistant)",
            description:
                "Tally Tutor is an AI-powered learning assistant that instantly answers course-related queries, links learners to relevant chapters, and explains real-world Tally examples.",
            color: "violet",
        },
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
                <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
                    <Badge
                        variant="outline"
                        className="mb-4 text-sm py-1 px-4 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm"
                    >
                        Success Framework
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Why Choose Us?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Experience a new standard of excellence with our industry-first learning ecosystem designed for
                        your professional success.
                    </p>
                    <div className="h-1.5 w-20 bg-linear-to-r from-primary to-purple-600 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            <Card className="relative h-full border-border/40 bg-background/60 backdrop-blur-xl hover:bg-background/80 transition-all duration-300 overflow-hidden rounded-2xl">
                                <CardHeader className="pb-4">
                                    <div className="mb-6 relative">
                                        <div
                                            className={cn(
                                                "h-14 w-14 rounded-xl flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                                `bg-${feature.color}-500/10 text-${feature.color}-600 dark:text-${feature.color}-400`,
                                            )}
                                        >
                                            <feature.icon className="h-7 w-7" />
                                        </div>
                                        {/* Subtle pattern background for icon */}
                                        <div className="absolute -top-2 -left-2 h-10 w-10 bg-primary/5 rounded-full -z-10 blur-xl" />
                                    </div>
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1 group-hover:border-primary/50 transition-colors">
                                        {feature.description}
                                    </p>
                                </CardContent>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-700" />
                            </Card>
                        </div>
                    ))}

                    <div className="md:col-span-2 lg:col-span-1 group relative">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-500/30 to-orange-600/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                        <Card className="relative h-full border-yellow-500/20 bg-linear-to-br from-yellow-500/[0.08] to-orange-500/[0.08] backdrop-blur-xl overflow-hidden rounded-2xl">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="h-3 w-3 rounded-full bg-yellow-500 animate-ping" />
                            </div>
                            <CardHeader className="pb-4">
                                <div className="h-14 w-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                                    <Headset className="h-7 w-7" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-yellow-800 dark:text-yellow-400">
                                    Lifetime Support Advantage
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80 text-base leading-relaxed mb-6 font-medium">
                                    Our commitment doesn't end with a certificate. Whether you're in your first job or
                                    transitioning to a new role, our experts are just a call away.
                                </p>
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-900 dark:text-yellow-200/90 text-sm font-semibold">
                                    "This long-term support is what truly sets QuixGrow apart from every other
                                    provider."
                                </div>
                            </CardContent>

                            {/* Decorative Sparkle elements */}
                            <Sparkles className="absolute -bottom-4 -right-4 h-24 w-24 text-yellow-500/10 rotate-12" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
