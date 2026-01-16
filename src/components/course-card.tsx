import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Course } from "@/data/courses"

interface CourseCardProps {
    course: Course
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
                <div className="relative aspect-video">
                    <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                    <Badge className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 text-foreground backdrop-blur-sm">
                        {course.category}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-bold text-xl line-clamp-2 mb-2">{course.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{course.description}</p>
                    </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase font-semibold">Price</span>
                        <span className="font-bold text-lg text-primary">{course.price}</span>
                    </div>
                    <Button variant="outline" size="sm">
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
