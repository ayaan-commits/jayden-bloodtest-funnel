import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";

// Lazy load below-fold sections for performance
const SolutionSection = dynamic(
  () =>
    import("@/components/sections/SolutionSection").then(
      (m) => m.SolutionSection
    ),
  { ssr: true }
);
const HowItWorks = dynamic(
  () =>
    import("@/components/sections/HowItWorks").then((m) => m.HowItWorks),
  { ssr: true }
);
const Biomarkers = dynamic(
  () =>
    import("@/components/sections/Biomarkers").then((m) => m.Biomarkers),
  { ssr: true }
);
const SampleReport = dynamic(
  () =>
    import("@/components/sections/SampleReport").then((m) => m.SampleReport),
  { ssr: true }
);
const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);
const CaseStudies = dynamic(
  () =>
    import("@/components/sections/CaseStudies").then((m) => m.CaseStudies),
  { ssr: true }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { ssr: true }
);
const HealthQuiz = dynamic(
  () =>
    import("@/components/sections/HealthQuiz").then((m) => m.HealthQuiz),
  { ssr: true }
);
const ProductOptions = dynamic(
  () =>
    import("@/components/sections/ProductOptions").then(
      (m) => m.ProductOptions
    ),
  { ssr: true }
);
const DiscoveryCall = dynamic(
  () =>
    import("@/components/sections/DiscoveryCall").then(
      (m) => m.DiscoveryCall
    ),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
  { ssr: true }
);
const ExitIntentPopup = dynamic(
  () =>
    import("@/components/ExitIntentPopup").then((m) => m.ExitIntentPopup),
  { ssr: true }
);

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <StickyCTA />
      <Hero />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Biomarkers />
      <SampleReport />
      <AboutSection />
      <CaseStudies />
      <Testimonials />
      <HealthQuiz />
      <ProductOptions />
      <DiscoveryCall />
      <FAQ />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}
