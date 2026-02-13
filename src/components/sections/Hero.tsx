"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { scrollToProducts, scrollToDiscoveryCall } from "@/lib/utils/scroll";

function IFMFlowerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Center petal - teal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#4BA8A8" opacity="0.9" transform="rotate(0 50 50)" />
      {/* Top-right petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#3A9B8F" opacity="0.85" transform="rotate(45 50 50)" />
      {/* Right petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#2D8E82" opacity="0.8" transform="rotate(90 50 50)" />
      {/* Bottom-right petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#5BB5A0" opacity="0.75" transform="rotate(135 50 50)" />
      {/* Bottom petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#6DC4B0" opacity="0.8" transform="rotate(180 50 50)" />
      {/* Bottom-left petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#7ED0BC" opacity="0.75" transform="rotate(225 50 50)" />
      {/* Left petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#5AAFA5" opacity="0.8" transform="rotate(270 50 50)" />
      {/* Top-left petal */}
      <ellipse cx="50" cy="38" rx="12" ry="20" fill="#48A29A" opacity="0.85" transform="rotate(315 50 50)" />
      {/* Center dot */}
      <circle cx="50" cy="50" r="6" fill="#3A8F85" />
    </svg>
  );
}

const trustPoints = [
  "100+ Biomarkers Analyzed",
  "Available Worldwide",
  "Personal Consultation Included",
];

const countries = ["USA", "UK", "Australia", "New Zealand"];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[90vh] flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            {/* Badge - hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:block"
            >
              <Badge
                variant="outline"
                className="w-fit px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5"
              >
                <span className="text-primary">Certified Functional Medicine Practitioner</span>
              </Badge>
            </motion.div>

            {/* Headline - SEO keyword-rich H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.2]"
            >
              <span className="block text-base sm:text-lg lg:text-xl text-primary font-semibold mb-2 sm:mb-3">
                Comprehensive Blood Test — 100+ Biomarkers
              </span>
              Your Doctor Says{" "}
              <span className="text-primary">You&apos;re Fine.</span>
              <br />
              Your Body Says{" "}
              <span className="text-primary">Otherwise.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Analyzed by a Certified Functional Medicine Practitioner.
              Optimal ranges, not just &quot;normal.&quot; Personal consultation included.
            </motion.p>

            {/* Trust Points - simplified on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-4"
            >
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-lg"
                >
                  Get Your Blood Test
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToDiscoveryCall}
                  className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Book Discovery Call
                </Button>
              </motion.div>
            </motion.div>

            {/* Countries - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden sm:block pt-6 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Available worldwide:
              </p>
              <div className="flex flex-wrap gap-3">
                {countries.map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 sm:gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-primary">2,500+</span>
                <span className="text-xs text-muted-foreground">Tests Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-primary">4.9/5</span>
                <span className="text-xs text-muted-foreground">Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-primary">15+</span>
                <span className="text-xs text-muted-foreground">Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-xs lg:max-w-md">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <Image
                  src="/images/jayden-hero.jpg"
                  alt="Jayden Pileggi - Certified Functional Medicine Practitioner specializing in comprehensive blood testing with 100+ biomarkers in Perth, Australia"
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 320px, 400px"
                  quality={85}
                  priority
                />

                {/* IFM Certification Badge Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4"
                >
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                        <IFMFlowerIcon className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs sm:text-sm text-foreground">
                          Certified Practitioner
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                          The Institute for Functional Medicine&reg;
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
