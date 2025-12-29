import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ScreeningSection } from "@/components/landing/ScreeningSection";
import { InterviewSection } from "@/components/landing/InterviewSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { ComingSoonSection } from "@/components/landing/ComingSoonSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ScreeningSection />
      <InterviewSection />
      <AudienceSection />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}
