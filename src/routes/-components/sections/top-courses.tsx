import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const TopCourses = () => {
    const courses = [
        {
            title: "Complete Tally Training",
            price: "₹599",
            originalPrice: null,
            description: "Ideal for beginners who want to build a strong foundation in accounting software.",
            features: [
                "Accounting fundamentals",
                "Company creation, Groups & Ledgers",
                "All voucher entries",
                "Inventory Management & GST Setup",
                "Payroll & Cost Centres",
                "Balance Sheet & P&L Analysis",
            ],
            cta: "Enroll in Tally Course",
            popular: false,
        },
        {
            title: "Complete GST Practical Training",
            price: "₹1999",
            originalPrice: null,
            description: "Complete practical GST knowledge, exactly as required in offices and tax firms.",
            features: [
                "GST Basics, Law & Registration Process",
                "Complete GST Portal Navigation",
                "Return Filing (GSTR-1, GSTR-3B)",
                "Input Tax Credit (ITC) & Invoice Matching",
                "Late fees, notices & real-life client scenarios",
            ],
            cta: "Enroll in GST Course",
            popular: false,
        },
        {
            title: "Complete Accounting & Taxation Program",
            price: "₹5999",
            originalPrice: null,
            description: "A full professional career program for serious learners designed to make you job-ready.",
            features: [
                "Everything in Course 1 & 2",
                "Income Tax Return Filing",
                "TDS & TCS Compliance",
                "Excel for Accountants",
                "Real Office-Level Accounting Practice",
            ],
            cta: "Join Complete Program",
            popular: true,
        },
    ]

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-(--breakpoint-xl)">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Courses & Pricing</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the right path for your career. High-quality practical training at affordable prices.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {courses.map((course, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col h-full relative border-border ${course.popular ? "shadow-xl border-primary scale-105 z-10" : "shadow-sm hover:shadow-md transition-shadow"}`}
                        >
                            {course.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase font-bold tracking-wider">
                                        Best Value
                                    </Badge>
                                </div>
                            )}

                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                                <CardDescription className="text-sm mt-2 font-medium">
                                    {course.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{course.price}</span>
                                    {course.title.includes("Tally") && (
                                        <span className="text-muted-foreground text-sm ml-2">Only</span>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {course.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={`w-full ${course.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                                    variant={course.popular ? "default" : "outline"}
                                >
                                    {course.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopCourses
