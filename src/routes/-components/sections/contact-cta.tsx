import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function ContactCTA() {
    return (
        <footer className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-6 max-w-(--breakpoint-2xl)">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Start Your Journey with QuixGrow
                            </h2>
                            <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
                            <p className="text-lg text-muted-foreground">
                                Don’t just learn accounting. Learn how to work like a professional accountant.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">Call Us</div>
                                    <div className="text-muted-foreground text-sm">+91 XXXXX XXXXX (Limited seats)</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-semibold">Email Us</div>
                                    <div className="text-muted-foreground text-sm">hello@quixgrow.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-muted-foreground">
                            <p>Get Free Career Counselling by filling out the form.</p>
                            <p className="mt-1 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Quick response guaranteed
                            </p>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold">Enquiry Form</h3>
                            <p className="text-muted-foreground text-sm">
                                We will contact you to recommend the right course.
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Phone
                                    </label>
                                    <Input id="phone" placeholder="+91..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message (Optional)
                                </label>
                                <Textarea id="message" placeholder="I am interested in..." className="min-h-[100px]" />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Submit Enquiry
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} QuixGrow. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
