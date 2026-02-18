"use client";

import { Phone, Clock, Video, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_CONFIG } from "@/lib/config";
import Image from "next/image";
import { useInView } from "@/lib/hooks/useInView";

const benefits = [
  "Discuss your health concerns one-on-one with Jayden",
  "Get a personalized assessment of your health goals",
  "Receive tailored recommendations for your situation",
  "Walk away with a clear action plan",
];

export function DiscoveryCall() {
  const { ref, isInView } = useInView();

  const handleBookCall = () => {
    if (CALENDLY_CONFIG.url) {
      window.open(CALENDLY_CONFIG.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="discovery-call" className="snap-section py-8 lg:py-12 bg-primary/5 scroll-mt-16">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-5xl mx-auto ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-xl">
            <div className="grid md:grid-cols-5">
              {/* Left - Image */}
              <div className="relative md:col-span-2 h-64 md:h-auto">
                <Image
                  src="/images/jayden-discovery.jpg"
                  alt="Jayden Pileggi kettlebell training - Book a discovery call for comprehensive blood testing consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />

                <div className="absolute bottom-4 left-4 md:hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary text-sm font-medium shadow-lg">
                    <Phone className="w-4 h-4" />
                    Looking for More Guidance?
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="md:col-span-3 p-8 lg:p-10">
                <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Phone className="w-4 h-4" />
                  Looking for More Guidance?
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Book a Discovery Call with Jayden Pileggi
                </h2>

                <p className="text-muted-foreground mb-6">
                  Get dedicated one-on-one time with Jayden to dive deep into
                  your health goals and create a personalized plan tailored to you.
                </p>

                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${isInView ? `animate-fade-in delay-${(index + 1) * 100}` : "opacity-0"}`}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Call info badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground">
                    <Video className="w-4 h-4 text-primary" />
                    30-min video call
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Flexible scheduling
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 text-primary" />
                    All time zones
                  </div>
                </div>

                <p className="text-xs text-primary font-medium mb-3">
                  Limited consultation slots available each week
                </p>

                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    💡 Proceed with a blood test and your $150 call fee will be deducted from the total cost
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={handleBookCall}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Book Your Call
                </Button>

                {!CALENDLY_CONFIG.url && (
                  <p className="text-xs text-muted-foreground/70 mt-3">
                    Update CALENDLY_CONFIG.url in src/lib/config.ts
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
