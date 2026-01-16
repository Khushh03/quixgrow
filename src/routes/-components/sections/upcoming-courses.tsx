import { Card, CardContent, CardHeader } from "@/components/ui/card"

const UpcomingCourses = () => {
    return (
        <div className="py-20">
            <div className="max-w-(--breakpoint-2xl) mx-auto px-6 xl:px-8">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* left side content */}
                    <div className="lg:col-span-1">
                        <span className="text-pink-500 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
                            Upcoming
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-[25ch] mb-6">
                            Upcoming courses
                        </h2>
                        <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Discover a world of learning opportunities through our upcoming courses, where industry
                            experts and thought leaders will guide you in acquiring new expertise, expanding your
                            horizons, and reaching your full potential.
                        </p>
                    </div>
                    {/* right side content */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                        {[0, 1].map((i) => (
                            <Card key={i} className="shadow-lg border-none">
                                <CardHeader className="p-4">
                                    <div className="aspect-[1.6] bg-muted rounded-md w-full flex items-center justify-center text-muted-foreground text-sm font-medium">
                                        400 x 250
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 pb-6 pt-0">
                                    <h3 className="text-xl font-bold text-foreground">Full Stack Web Development</h3>
                                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                        Full Stack Development using MongoDB, Express, React, and Node.js layout.
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingCourses
