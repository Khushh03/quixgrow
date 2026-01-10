import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/sections/hero"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <Hero />
        </main>
    )
}
