import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/sections/hero"
import About from "./-components/sections/about"
import Trainer from "./-components/sections/trainer"
import WhyChooseUs from "./-components/sections/why-choose-us"
import TargetAudience from "./-components/sections/target-audience"
import TopCourses from "./-components/sections/top-courses"
import ContactCTA from "./-components/sections/contact-cta"

// UpcomingCourses is replaced/removed based on new flow, or kept if needed.
// User request implied a complete restructure. I'll stick to the sections provided.

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <Hero />
            <About />
            <Trainer />
            <WhyChooseUs />
            <TargetAudience />
            <TopCourses />
            <ContactCTA />
        </main>
    )
}
