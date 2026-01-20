import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@tanstack/react-router"
import { Building2, Landmark, ShieldCheck, Zap, Briefcase, Globe } from "lucide-react"

const footerSections = [
    {
        title: "Home",
        links: [
            { title: "About", href: "/about" },
            { title: "Contact Us", href: "/contact" },
            { title: "Courses", href: "/courses" },
            { title: "", href: "#" },
        ],
    },
    {
        title: "Second",
        links: [
            { title: "E-books", href: "#" },
            { title: "Presentation", href: "#" },
            { title: "Dashboard", href: "#" },
            { title: "Management", href: "#" },
        ],
    },
]

const partners = [
    { name: "LOGIC+", icon: Building2 },
    { name: "DEVTECH", icon: Zap },
    { name: "TRUST", icon: ShieldCheck },
    { name: "LANDMARK", icon: Landmark },
    { name: "GLOBAL", icon: Globe },
    { name: "BIZCORP", icon: Briefcase },
]

const Footer = () => {
    return (
        <footer className="bg-white">
            {/* Newsletter Hero Section */}
            <div className="bg-[#121212] py-20 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg p-12 text-center shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Subscribe Our Newsletter</h2>
                    <form className="flex flex-col items-center gap-6">
                        <div className="flex flex-col md:flex-row w-full gap-4 max-w-2xl">
                            <Input
                                type="text"
                                placeholder="Your name"
                                className="h-12 bg-gray-50 border-none shadow-sm focus-visible:ring-1 focus-visible:ring-[#7a3ed6]"
                            />
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="h-12 bg-gray-50 border-none shadow-sm focus-visible:ring-1 focus-visible:ring-[#7a3ed6]"
                            />
                            <Button className="h-12 px-8 bg-[#7a3ed6] hover:bg-[#7a3ed6]/90 text-white rounded-full font-semibold">
                                Subscribe
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className="border-gray-300" />
                            <Label
                                htmlFor="terms"
                                className="text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Vidit maiestatis principes
                            </Label>
                        </div>
                    </form>
                </div>
            </div>

            {/* Partner Slider Section */}
            <div className="bg-[#0a0a0a] py-16 overflow-hidden border-y border-white/5">
                <div className="container mx-auto px-6 mb-12">
                    <div className="flex flex-col items-center">
                        <h3 className="text-gray-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8">
                            Our Partners
                        </h3>
                        <div className="h-px w-full max-w-4xl bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                </div>

                <div className="relative">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center">
                        {[...partners, ...partners].map((partner, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 text-white/30 hover:text-white/60 transition-colors group cursor-default"
                            >
                                <partner.icon className="h-8 w-8 grayscale group-hover:grayscale-0 transition-all" />
                                <span className="text-xl font-bold tracking-tighter uppercase">{partner.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth fade */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0a0a0a] to-transparent z-10" />
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
                    {/* Brand */}
                    <div className="flex flex-col gap-2">
                        {/* <span className="text-xs tracking-[0.3em] font-light text-gray-400 uppercase">
                            Professional
                        </span> */}
                        <h3 className="text-xl font-bold tracking-tighter">Quixgrow</h3>
                    </div>

                    {/* Links */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-6">
                            <h4 className="font-bold text-gray-900">{section.title}</h4>
                            <ul className="flex flex-col gap-4 text-gray-500">
                                {section.links.map((link) => (
                                    <li key={link.title}>
                                        <Link to={link.href} className="hover:text-gray-900 transition-colors">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Subscribe Widget */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-900">Subscribe</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="rounded-r-none h-11 bg-gray-50 border-none focus-visible:ring-1 focus-visible:ring-[#7a3ed6]"
                                />
                                <Button className="rounded-l-none h-11 bg-[#7a3ed6] hover:bg-[#7a3ed6]/90 text-white px-6">
                                    Send
                                </Button>
                            </div>
                            <p className="text-xs text-gray-400">No spam. Only releases, updates, and discounts</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#7a3ed6] py-3 text-center">
                <p className="text-sm text-white font-medium">
                    © {new Date().getFullYear()} sebastian, All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
