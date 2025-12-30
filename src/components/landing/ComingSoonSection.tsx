"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ComingSoonSection() {
    const scrollToEmail = () => {
        const emailSection = document.getElementById('email-input-section');
        if (emailSection) {
            emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        Coming Soon
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        We’re opening early access to a limited set of design partners.
                    </h2>

                    <p className="text-xl text-muted-foreground">
                        If you’re serious about fixing hiring quality and offer drop-offs, you should be part of this.
                    </p>

                    <div className="pt-4">
                        <Button size="lg" className="h-12 px-8 text-base font-medium" onClick={scrollToEmail}>
                            Join the waitlist
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
