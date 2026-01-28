"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { scrollToProducts, scrollToDiscoveryCall } from "@/lib/utils/scroll";

const trustPoints = [
  "100+ Biomarkers Analyzed",
  "Home Test Kit Delivery",
  "Personal Consultation Included",
];

const countries = ["USA", "UK", "Australia", "New Zealand"];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="w-fit px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5"
              >
                <span className="text-primary">Certified Functional Medicine Practitioner</span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
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
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Comprehensive Blood Testing with 100+ Biomarkers — Delivered to
              Your Home, Analyzed by a Certified Functional Medicine
              Practitioner
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6"
            >
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get Your Blood Test
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToDiscoveryCall}
                  className="border-primary/30 hover:bg-primary/5 px-8 py-6 text-base hover:border-primary/50 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Book Discovery Call
                </Button>
              </motion.div>
            </motion.div>

            {/* Countries */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-6 border-t border-border/50"
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
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/images/jayden-hero.jpg"
                  alt="Jayden Pileggi - Functional Medicine Practitioner"
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={95}
                  priority
                />

                {/* Certification Badge Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-3 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          Certified Practitioner
                        </p>
                        <p className="text-xs text-muted-foreground">
                          The Institute for Functional Medicine
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
