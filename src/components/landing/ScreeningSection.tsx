import { Phone, CheckSquare, BarChart3 } from "lucide-react";

export function ScreeningSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Screening That Actually Adds Value
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            IRS upgrades screening calls from discovery to <span className="text-primary font-semibold">decision-making</span>.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Tailor-made screening questions</h3>
                                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-1">
                                        <li>Fill missing inputs</li>
                                        <li>Verify risky skills</li>
                                        <li>Improve decision confidence</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <BarChart3 className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Signal over noise</h3>
                                    <p className="text-muted-foreground mt-1">
                                        Every screening call increases signal quality — not just time spent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        {/* Abstract visual for screening process */}
                        <div className="bg-card border rounded-2xl p-6 md:p-10 shadow-xl max-w-md mx-auto">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b pb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Screening Call</p>
                                        <p className="text-xs text-muted-foreground">Generating signal...</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-3 bg-muted/50 rounded-lg text-sm">
                                        <p className="font-medium mb-1">Recommended Question:</p>
                                        <p className="text-muted-foreground">"Tell me about a time you had to define 'good' for a vague requirement..."</p>
                                    </div>
                                    <div className="p-3 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-lg text-sm">
                                        <p className="font-medium text-green-700 dark:text-green-300 mb-1">Signal Captured:</p>
                                        <p className="text-green-600 dark:text-green-400">strong clarity on outcome definition</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
