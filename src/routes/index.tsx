import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/sections/hero"
import About from "./-components/sections/about"
import Trainer from "./-components/sections/trainer"
import WhyChooseUs from "./-components/sections/why-choose-us"
import TargetAudience from "./-components/sections/target-audience"
import ContactCTA from "./-components/sections/contact-cta"
import CoursesPricing from "./-components/sections/courses-pricing"
import UpcomingCourses from "./-components/sections/upcoming-courses"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1">
            <Hero />
            <UpcomingCourses />
            <About />
            <Trainer />
            <WhyChooseUs />
            <TargetAudience />
            <CoursesPricing />
            <ContactCTA />
        </main>
    )
}
