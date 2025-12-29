import { X, Search, FileX, MessageSquareWarning, ArrowRightFromLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
    {
        icon: FileX,
        title: "Vague Job Descriptions",
        description: "Generic templates that don't define what success looks like."
    },
    {
        icon: Search,
        title: "Undefined \"Culture Fit\"",
        description: "Subjective decisions based on \"vibes\" rather than verification."
    },
    {
        icon: MessageSquareWarning,
        title: "Shallow Screening",
        description: "Conversations that feel like checklists and miss real signals."
    },
    {
        icon: X,
        title: "Scattered Feedback",
        description: "Notes live in random places, making consensus impossible."
    },
    {
        icon: ArrowRightFromLine,
        title: "Broken Offers",
        description: "Offers get accepted but don't convert into joinings."
    },
];

export function ProblemSection() {
    return (
        <section id="problem" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        The Problem
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Most hiring teams don’t hire badly. They hire <span className="text-foreground font-semibold">vaguely</span>.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <Card key={index} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                            <CardHeader className="space-y-1">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                                    <problem.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                                </div>
                                <CardTitle className="text-lg">{problem.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    {problem.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}

                </div>

                <div className="mt-16 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                        The result: slow cycles, mis-hires, and broken offer-to-joining ratios.
                    </p>
                </div>

            </div>
        </section>
    );
}
