import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon, CircleCheck } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const CoursesPricing = () => {
    const courses = [
        {
            name: "Complete Tally Training",
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
            buttonText: "Enroll in Tally Course",
            isPopular: false,
        },
        {
            name: "Complete GST Practical Training",
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
            buttonText: "Enroll in GST Course",
            isPopular: true,
        },
        {
            name: "Complete Accounting & Taxation Program",
            price: "₹5999",
            originalPrice: null,
            description: "A full professional career program for serious learners designed to make you job-ready.",
            features: [
                "Everything in Course 1 & 2",
                "Income Tax Return Filing",
                "TCS Compliance",
                "TDS Compliance",
                "Excel for Accountants",
                "Real Office-Level Accounting Practice",
            ],
            buttonText: "Join Complete Program",
            isPopular: false,
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

                <div className="mt-12 sm:mt-16 max-w-(--breakpoint-xl) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-0">
                    {courses.map((course) => (
                        <div
                            key={course.name}
                            className={cn(
                                "bg-card relative border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl overflow-hidden",
                                {
                                    "border-2 border-primary py-12 rounded-xl! shadow-2xl": course.isPopular,
                                },
                            )}
                        >
                            {course.isPopular && (
                                <Badge className="absolute top-0 right-0 rounded-none px-5 py-1 uppercase rounded-bl-lg">
                                    Most Popular
                                </Badge>
                            )}
                            <h3 className="text-lg font-medium">{course.name}</h3>
                            <p className="mt-2 text-4xl font-semibold">{course.price}</p>
                            <p className="mt-4 text-sm text-muted-foreground">{course.description}</p>
                            <Separator className="my-6" />
                            <p className="text-lg font-medium">Features</p>
                            <ul className="space-y-2 mt-2">
                                {course.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={course.isPopular ? "default" : "outline"}
                                size="lg"
                                className="w-full mt-6"
                            >
                                {course.buttonText}
                                <ArrowUpRightIcon />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoursesPricing
