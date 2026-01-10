import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, ArrowRightLeft, Clock } from "lucide-react"

const TopCourses = () => {
    const courses = [
        {
            title: "Learn GST",
            reviews: "0 (0 Reviews)",
            description: "Master the fundamentals of Goods and Services Tax (GST) with this comprehensive course.",
            currentPrice: "₹499",
            originalPrice: "₹999",
            duration: "Hours",
            level: "Beginner",
            imageColor: "bg-blue-50",
            imageContent: "GST",
        },
        {
            title: "Learn Accounting & GST",
            reviews: "0 (0 Reviews)",
            description: "Learn how to manage GST filing, TDS calculations, and compliance with tax regulations.",
            currentPrice: "₹5999",
            originalPrice: "",
            duration: "Hours",
            level: "Beginner",
            imageColor: "bg-blue-50",
            imageContent: "Accounting",
        },
        {
            title: "Excel Mastery: From Basics to Advanced Techniques",
            reviews: "0 (0 Reviews)",
            description: "Unlock the full potential of Excel with our comprehensive Excel Masterclass.",
            currentPrice: "₹699",
            originalPrice: "₹3999",
            duration: "Hours",
            level: "Beginner",
            imageColor: "bg-green-100",
            imageContent: "Excel",
        },
    ]

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Top courses</h2>
                        {/* Yellow underline effect */}
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </div>
                    <p className="mt-6 text-muted-foreground">
                        These are the most popular courses among learners worldwide
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <Card
                            key={index}
                            className="pt-0 overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 group bg-card"
                        >
                            {/* Image Section */}
                            <div
                                className={`relative aspect-[1.5] ${course.imageColor} flex items-center justify-center p-6`}
                            >
                                <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition-colors z-10">
                                    <Heart className="w-5 h-5" />
                                </button>

                                <span className="text-2xl font-bold text-slate-700 opacity-50">
                                    {course.imageContent}
                                </span>

                                {/* Beginner Badge */}
                                <div className="absolute bottom-4 right-0 bg-pink-100 text-pink-500 text-xs font-semibold px-3 py-1 rounded-l-full shadow-xs">
                                    {course.level}
                                </div>
                            </div>

                            {/* Content Section */}
                            <CardContent className="p-5">
                                <h3 className="font-bold text-lg text-card-foreground mb-2 line-clamp-2 min-h-[3.5rem]">
                                    {course.title}
                                </h3>

                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-gray-300 fill-gray-100" />
                                        <span className="text-xs text-muted-foreground">{course.reviews}</span>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 bg-indigo-500 hover:bg-indigo-600 text-white gap-1.5 rounded-md px-3 text-xs font-normal"
                                    >
                                        <ArrowRightLeft className="w-3.5 h-3.5" />
                                        Compare
                                    </Button>
                                </div>

                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl font-bold text-foreground">{course.currentPrice}</span>
                                        {course.originalPrice && (
                                            <span className="text-sm text-muted-foreground line-through decoration-slate-400">
                                                {course.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <Clock className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm">Hours</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopCourses
