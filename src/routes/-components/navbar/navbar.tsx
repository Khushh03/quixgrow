import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet"
import { ArrowUpRight } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

const Navbar = () => {
    return (
        <nav className="h-16 bg-background border-b fixed w-full top-0 z-50">
            <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Logo />
                    <NavMenu className="hidden md:block" />
                </div>

                <div className="flex items-center gap-3">
                    <Button asChild>
                        <a href={`http://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
                            Get Started <ArrowUpRight />
                        </a>
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
