import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/sections/hero"
import UpcomingCourses from "./-components/sections/upcoming-courses"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <Hero />
            <UpcomingCourses />
        </main>
    )
}
