"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Video, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_CONFIG } from "@/lib/config";
import Image from "next/image";

const benefits = [
  "Discuss your health concerns one-on-one",
  "Learn if the blood test is right for you",
  "Get personalized recommendations",
  "Ask any questions you have",
];

export function DiscoveryCall() {
  const handleBookCall = () => {
    if (CALENDLY_CONFIG.url) {
      window.open(CALENDLY_CONFIG.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="discovery-call" className="py-16 lg:py-20 bg-primary/5 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-xl">
            <div className="grid md:grid-cols-5">
              {/* Left - Image */}
              <div className="relative md:col-span-2 h-64 md:h-auto">
                <Image
                  src="/images/jayden-discovery.jpg"
                  alt="Jayden Pileggi kettlebell training - Functional Medicine Practitioner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={95}
                  priority
                />
                {/* Gradient overlay for text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />

                {/* Mobile badge */}
                <div className="absolute bottom-4 left-4 md:hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary text-sm font-medium shadow-lg">
                    <Phone className="w-4 h-4" />
                    Not Sure Yet?
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="md:col-span-3 p-8 lg:p-10">
                {/* Desktop badge */}
                <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Phone className="w-4 h-4" />
                  Not Sure Yet?
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Book a Discovery Call
                </h3>

                <p className="text-muted-foreground mb-6">
                  Speak directly with Jayden to discuss your health goals and
                  see if comprehensive blood testing is right for you.
                </p>

                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </motion.li>
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

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={handleBookCall}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Book Your Free Call
                  </Button>
                </motion.div>

                {!CALENDLY_CONFIG.url && (
                  <p className="text-xs text-muted-foreground/70 mt-3">
                    Update CALENDLY_CONFIG.url in src/lib/config.ts
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
