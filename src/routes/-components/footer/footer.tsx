import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"
import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react"

const footerSections = [
    {
        title: "Top categories",
        links: [
            {
                title: "Excel M",
                href: "#",
            },
        ],
    },
    {
        title: "Useful links",
        links: [
            {
                title: "Become an Instructor",
                href: "#",
            },
            {
                title: "Blog",
                href: "#",
            },
            {
                title: "All courses",
                href: "#",
            },
            {
                title: "Sign up",
                href: "#",
            },
        ],
    },
    {
        title: "Help",
        links: [
            {
                title: "Contact us",
                href: "#",
            },
            {
                title: "About us",
                href: "#",
            },
            {
                title: "Privacy policy",
                href: "#",
            },
            {
                title: "Terms and condition",
                href: "#",
            },
            {
                title: "Faq",
                href: "#",
            },
            {
                title: "Refund policy",
                href: "#",
            },
        ],
    },
]

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="max-w-(--breakpoint-2xl) mx-auto">
                <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
                    <div className="col-span-full xl:col-span-2">
                        {/* Logo */}
                        <Logo />

                        <p className="mt-4 text-muted-foreground">
                            Design amazing digital experiences that create more happy in the world.
                        </p>
                    </div>

                    {footerSections.map(({ title, links }) => (
                        <div key={title}>
                            <h6 className="font-medium">{title}</h6>
                            <ul className="mt-6 space-y-4">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link to={href} className="text-muted-foreground hover:text-foreground">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Subscribe Newsletter */}
                    <div className="col-span-2">
                        <h6 className="font-medium">Stay up to date</h6>
                        <form className="mt-6 flex items-center gap-2">
                            <Input type="email" placeholder="Enter your email" className="grow max-w-64" />
                            <Button>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <Separator />
                <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link to="." target="_blank">
                            Shadcn UI Blocks
                        </Link>
                        . All rights reserved.
                    </span>

                    <div className="flex items-center gap-5 text-muted-foreground">
                        <Link to="." target="_blank">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link to="." target="_blank">
                            <DribbbleIcon className="h-5 w-5" />
                        </Link>
                        <Link to="." target="_blank">
                            <TwitchIcon className="h-5 w-5" />
                        </Link>
                        <Link to="." target="_blank">
                            <GithubIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
