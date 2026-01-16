import { createFileRoute, Link } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AccordionItem } from "@/components/ui/custom-accordion"
import { Check, Globe, Play, Smartphone, Medal, Share2 } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/courses/$course_id")({
    component: CoursePage,
})

function CoursePage() {
    const [openSections, setOpenSections] = useState<number[]>([0, 1])

    const toggleSection = (index: number) => {
        setOpenSections((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Hero Section */}
            <div className="bg-[#1c1d1f] text-white py-12">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="lg:w-2/3 space-y-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                            <span>{">"}</span>
                            {/* Fallback to text if /courses route doesn't exist yet, or keep Link if it does */}
                            <span className="cursor-pointer hover:text-white">Courses</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Ultimate Job-Ready AI-Powered Data Analytics Course
                        </h1>

                        <p className="text-lg text-gray-200">
                            This is a to-the-point, CodeWithHarry style AI-Powered Data Analytics course! This
                            all-in-one Ultimate Job-Ready AI-Powered Data Analytics Course is designed for beginners and
                            intermediate learners who want to master modern data analytics, leverage AI tools, and
                            become industry-ready with hands-on practical projects.
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                            <Badge className="bg-[#eceb98] text-black hover:bg-[#eceb98]/90 text-xs font-bold px-2 py-1 rounded-sm">
                                Hot & New
                            </Badge>
                        </div>

                        <div className="text-sm text-gray-300 mt-2">
                            Created by <span className="text-[#a435f0] underline cursor-pointer">CodeWithHarry</span>
                        </div>

                        <div className="text-sm text-gray-300 flex items-center gap-4 mt-2">
                            <span>Last updated 1/14/2026</span>
                            <span className="flex items-center gap-1">
                                <Globe className="h-3 w-3" /> Hindi
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content (Left Column) */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* What you'll learn */}
                        <div className="border border-border p-6 rounded-sm">
                            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                {[
                                    "Understand the complete Data Analytics workflow from data collection to insight generation",
                                    "Analyze and clean real-world datasets using Python, Pandas, and NumPy",
                                    "Query, manage, and transform databases with SQL like a professional analyst",
                                    "Build dashboards and interactive reports using Power BI & Tableau",
                                    "Leverage AI-powered tools to automate analysis, generate insights, and boost productivity",
                                    "Work with Excel for advanced reporting, automation, and analysis",
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 shrink-0 mt-0.5 text-foreground" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Content */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Course content</h2>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                                <span>11 sections • 50 lectures • 11h 11m total length</span>
                                <button className="text-primary font-bold hover:underline">Expand all sections</button>
                            </div>

                            <div className="border border-border/50 rounded-sm">
                                {[
                                    { title: "Introduction to Data Analytics", lectures: 6, duration: "42min" },
                                    { title: "Basic Excel for Data Analytics", lectures: 23, duration: "288min" },
                                    { title: "Basic Python (AI-powered)", lectures: 30, duration: "342min" },
                                    { title: "SQL for Data Analytics", lectures: 0, duration: "0min" },
                                    { title: "Advanced Python", lectures: 0, duration: "0min" },
                                    {
                                        title: "AI Tools for Data Analysts - Make Coders Jealous",
                                        lectures: 0,
                                        duration: "0min",
                                    },
                                ].map((section, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={section.title}
                                        isOpen={openSections.includes(idx)}
                                        onToggle={() => toggleSection(idx)}
                                        lectureCount={section.lectures}
                                        duration={section.duration}
                                    >
                                        <div className="space-y-3 py-2">
                                            {Array.from({ length: Math.max(1, Math.min(3, section.lectures)) }).map(
                                                (_, i) => (
                                                    <div key={i} className="flex justify-between items-center text-sm">
                                                        <div className="flex items-center gap-3">
                                                            <Play className="h-3 w-3 text-muted-foreground" />
                                                            <span className="underline text-primary/80 cursor-pointer">
                                                                Introduction to {section.title}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs">05:20</span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </AccordionItem>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>No prior experience in data analytics is needed</li>
                                <li>Basic computer skills and internet access</li>
                                <li>Willingness to learn and solve real-world problems</li>
                                <li>Curiosity and consistency; that's all you really need!</li>
                                <li>Stable internet connection for accessing course content</li>
                                <li>
                                    Basic familiarity with using the terminal/command line (helpful but not required)
                                </li>
                            </ul>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <div className="text-sm text-muted-foreground space-y-4">
                                <p>
                                    This is a to-the-point, CodeWithHarry style AI-Powered Data Analytics course! This
                                    all-in-one Ultimate Job-Ready AI-Powered Data Analytics Course is designed for
                                    beginners and intermediate learners who want to master modern data analytics,
                                    leverage AI tools, and become industry-ready with hands-on practical projects.
                                </p>
                                <p>We will cover everything from the basics to advanced topics...</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right Column) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-20 bg-background border border-border/50 shadow-lg rounded-sm overflow-hidden">
                            {/* Placeholder for Video/Image */}
                            <div className="aspect-video bg-black relative flex items-center justify-center p-1">
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center relative rounded-sm overflow-hidden">
                                    {/* In a real app, this would be an img or video player */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    <Play className="h-12 w-12 text-white fill-white relative z-10" />
                                    <div className="absolute bottom-4 left-0 right-0 text-center font-bold text-white z-10">
                                        Preview this course
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold">₹2599</span>
                                    <span className="text-muted-foreground line-through decoration-1 text-sm mb-1">
                                        ₹3899
                                    </span>
                                </div>

                                <Button className="w-full font-bold text-md py-6 rounded-sm">
                                    Click here to Login and Buy
                                </Button>

                                <div className="text-center text-xs text-muted-foreground">
                                    Login to purchase this course
                                </div>

                                <div className="mt-4 space-y-3">
                                    <h4 className="font-bold text-sm">This course includes:</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-3">
                                            <Play className="h-4 w-4" /> <span>50 lectures</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Globe className="h-4 w-4" /> <span>11hr 11min</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Smartphone className="h-4 w-4" />{" "}
                                            <span>Access on mobile and desktop (2 Years)</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Medal className="h-4 w-4" /> <span>Certificate of completion</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between gap-2 pt-4 border-t mt-4 border-border/50">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs font-bold border-black/20 dark:border-white/20"
                                    >
                                        Share <Share2 className="h-3 w-3 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
