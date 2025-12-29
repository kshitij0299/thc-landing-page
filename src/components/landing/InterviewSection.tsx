import { FileText, Users, Network } from "lucide-react";

export function InterviewSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 text-center">

                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Interviews With Real Output
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        No more decoding feedback threads.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Structured Reports</h3>
                        <p className="text-muted-foreground">
                            Generate structured interview reports instead of scattered notes.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Clear Visibility</h3>
                        <p className="text-muted-foreground">
                            See clear strengths, risks, and unresolved gaps.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border shadow-sm text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Network className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Instant Understanding</h3>
                        <p className="text-muted-foreground">
                            Anyone on the hiring panel can understand a candidate in minutes.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
