"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (!email || !email.includes("@")) {
            setStatus('error');
            setMessage("Please enter a valid email address.");
            return;
        }

        setStatus('loading');
        setMessage("");

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
            setStatus('error');
            setMessage("System configuration error. Please contact support.");
            console.error("Supabase credentials missing");
            return;
        }

        try {
            const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
                method: 'POST',
                headers: {
                    'apikey': supabaseKey,
                    'Authorization': `Bearer ${supabaseKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setMessage("You've been added to the waitlist!");
            } else if (response.status === 409) {
                setStatus('error');
                setMessage("This email is already on the waitlist.");
            } else {
                setStatus('error');
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus('error');
            setMessage("Network error. Please try again later.");
        }
    };

    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        Outcomes-first Hiring
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
                        Replace hiring intuition with <span className="text-primary">structured intent.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        IRS is an outcomes-first hiring platform that helps companies define what <span className="text-foreground font-medium">“good”</span> actually means — and then hires consistently against it.
                    </p>

                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        From job definition to final offer, IRS brings clarity, calibration, and verification into every hiring decision.
                    </p>

                    <div className="w-full max-w-md mt-4 flex flex-col gap-2">
                        <div id="email-input-section" className="flex flex-col sm:flex-row gap-4 w-full">
                            <Input
                                type="email"
                                placeholder="Enter your work email"
                                className="h-12 text-base"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit();
                                    }
                                }}
                            />
                            <Button
                                size="lg"
                                className="h-12 px-8 text-base font-medium min-w-[140px]"
                                onClick={handleSubmit}
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : status === 'success' ? (
                                    <>
                                        Joined
                                        <Check className="ml-2 h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        Join the waitlist
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                        {message && (
                            <p className={`text-sm text-left px-1 ${status === 'error' ? 'text-destructive' : 'text-green-600'}`}>
                                {message}
                            </p>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Limited early access available.
                    </p>

                </div>
            </div>

            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 dark:bg-sky-500/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
        </section>
    );
}
