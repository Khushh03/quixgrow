import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet"
import { ArrowUpRight } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="h-16 bg-background border-b fixed w-full top-0 z-50">
            <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Logo />
                    <NavMenu className="hidden md:block" />
                </div>

                <div className="flex items-center gap-3">
                    <Button>
                        Get Started <ArrowUpRight />
                    </Button>
                    <div className="md:hidden">
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
