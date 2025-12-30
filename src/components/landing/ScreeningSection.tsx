import { Phone, CheckSquare, BarChart3 } from "lucide-react";

export function ScreeningSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 text-center">

                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Screening That Actually Adds Value
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        IRS upgrades screening calls from discovery to <span className="text-primary font-semibold">decision-making</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckSquare className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Tailor-made screening questions</h3>
                        <div className="text-muted-foreground">
                            <ul className="space-y-1">
                                <li>Fill missing inputs</li>
                                <li>Verify risky skills</li>
                                <li>Improve decision confidence</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Signal over noise</h3>
                        <p className="text-muted-foreground">
                            Every screening call increases signal quality — not just time spent.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
