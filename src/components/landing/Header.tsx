"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    const scrollToEmail = () => {
        const emailSection = document.getElementById('email-input-section');
        if (emailSection) {
            emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="relative w-48 h-12">
                        <img
                            src="/thc-landing-page/DARK_HR.png"
                            alt="The Hiring Company Logo"
                            className="w-full h-full object-contain object-left"
                        />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#problem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        The Problem
                    </Link>
                    <Link href="#solution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Solution
                    </Link>
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </Link>
                </nav>

                <Button size="sm" onClick={scrollToEmail}>Join Waitlist</Button>
            </div>
        </header>
    );
}
