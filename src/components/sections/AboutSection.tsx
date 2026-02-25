"use client";

import { Award, GraduationCap, Users, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { useInView } from "@/lib/hooks/useInView";

const credentials = [
  {
    icon: GraduationCap,
    text: "Certified Functional Medicine Practitioner",
    color: "from-primary to-primary/70",
  },
  {
    icon: Award,
    text: "Certified Blood Analysis Specialist",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    text: "Thousands of clients helped across 4 countries",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    text: "Serving clients in USA, UK, AU & NZ",
    color: "from-blue-500 to-cyan-500",
  },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="snap-section py-10 sm:py-12 lg:py-16 bg-card scroll-mt-16 overflow-hidden">
      <div ref={ref} className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div
            className={`relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Floating decorative elements (CSS animations for performance) */}
            <div
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -z-10 hidden sm:block animate-float-slow"
            />
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl -z-10 hidden sm:block animate-float-slow-reverse"
            />

            {/* Main image container */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image
                  src="/images/jayden-about.jpg"
                  alt="Jayden Pileggi performing functional fitness on rowing machine - Perth-based Certified Functional Medicine Practitioner with 2500+ comprehensive blood tests analyzed"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>

              {/* Experience badge */}
              <div
                className={`absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 ${isInView ? "animate-fade-in delay-500" : "opacity-0"}`}
              >
                <div className="bg-card border border-border/50 rounded-xl p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-foreground">2500+</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Clients Helped</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`${isInView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            {/* Section badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              About Jayden
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Meet <span className="text-primary">Jayden Pileggi</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Certified Functional Medicine Practitioner
            </p>

            {/* Story paragraphs */}
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              <p>
                After years of seeing patients fall through the cracks of conventional
                medicine — told they were &quot;fine&quot; when they clearly weren&apos;t — Jayden
                dedicated his career to functional medicine.
              </p>
              <p>
                His mission is simple: help people understand their bodies at a deeper
                level and give them the roadmap to actually feel their best, not just
                &quot;not sick.&quot;
              </p>
              <p>
                Through comprehensive blood testing and personalized consultations,
                Jayden has helped thousands of clients around the world take control
                of their health and optimize their wellbeing through his functional medicine
                business{" "}
                <a
                  href="https://www.jaydenpileggifunctionalmedicine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium transition-colors"
                >
                  www.jaydenpileggifunctionalmedicine.com
                </a>
                {" "}— another way to access his support and services.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-muted/50 hover:bg-muted hover:translate-x-1 hover:scale-[1.02] transition-all cursor-default group ${isInView ? `animate-fade-in delay-${Math.min((index + 3) * 100, 500)}` : "opacity-0"}`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${cred.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-[10deg] transition-transform`}
                  >
                    <cred.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground font-medium">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
