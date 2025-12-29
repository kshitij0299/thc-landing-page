import {
    Target,
    Users,
    Activity,
    MessageSquare,
    Zap,
    FileText,
    Globe,
    LucideIcon
} from "lucide-react";

interface Feature {
    title: string;
    icon: LucideIcon;
    description?: string;
}

const features: Feature[] = [
    {
        title: "Capture hiring intent instead of using generic templates",
        icon: Target
    },
    {
        title: "Align hiring managers and recruiters on what actually matters",
        icon: Users
    },
    {
        title: "Continuously verify signals as the funnel progresses",
        icon: Activity
    },
    {
        title: "Turn screening calls into signal-generation conversations",
        icon: MessageSquare
    },
    {
        title: "Recommend actions to improve offer-to-joining outcomes",
        icon: Zap
    },
    {
        title: "Generate structured interview reports anyone can understand",
        icon: FileText
    },
    {
        title: "Build on a global candidate graph for fast rediscovery",
        icon: Globe
    }
];

export function SolutionSection() {
    return (
        <section id="solution" className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        What IRS Changes
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        IRS turns hiring from a sequence of opinions into a <span className="text-primary font-semibold">structured decision system</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                group relative bg-background border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                                ${index === features.length - 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                            `}
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-medium leading-tight">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-2xl font-medium">
                        You don’t get more noise. <br />
                        <span className="text-primary">You get better decisions.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
