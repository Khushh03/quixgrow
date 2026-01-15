import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const Route = createFileRoute("/contact")({
    component: ContactPage,
})

function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <div className="h-1.5 w-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions about our courses or need career guidance? Our team is here to help you grow.
                        Reach out to us through any of the channels below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
                                    <p className="text-muted-foreground text-sm">Mon-Sat, 9AM-7PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-muted-foreground text-sm">hello@quixgrow.com</p>
                                    <p className="text-muted-foreground text-xs mt-1">Expected response: 24h</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Our Office</h3>
                                    <p className="text-muted-foreground text-sm">Main Training Center,</p>
                                    <p className="text-muted-foreground text-sm">Sector 18, Noida, UP</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" /> Support Hours
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span> <span>9:00 - 19:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span> <span>10:00 - 16:00</span>
                                </li>
                                <li className="flex justify-between font-semibold text-primary">
                                    <span>Sunday</span> <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold">Send us a Message</h2>
                                <p className="text-muted-foreground mt-2">
                                    Fill out the form below and one of our career experts will get back to you shortly.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold">
                                            Full Name
                                        </label>
                                        <Input id="name" placeholder="John Doe" className="h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold">
                                            Phone Number
                                        </label>
                                        <Input id="phone" placeholder="+91 XXXXX XXXXX" className="h-12" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold">
                                        Email Address
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold">
                                        Subject
                                    </label>
                                    <Input id="subject" placeholder="Course Enquiry" className="h-12" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        className="min-h-[150px] resize-none"
                                    />
                                </div>

                                <Button type="submit" className="w-full h-14 text-lg font-bold" size="lg">
                                    Send Message
                                </Button>

                                <p className="text-center text-xs text-muted-foreground">
                                    By clicking send, you agree to our privacy policy. We'll never share your data.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
