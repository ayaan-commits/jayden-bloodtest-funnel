"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { scrollToProducts } from "@/lib/utils/scroll";
import { CALENDLY_CONFIG } from "@/lib/config";

const trustPoints = [
  "100+ Biomarkers Analyzed",
  "Available in USA, UK, AU & NZ",
  "Personal Consultation Included",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-8 sm:pt-16 sm:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop: 2-column grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Content (Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <DesktopHeadline />
            <SubHeadline />
            <TrustPoints />
            <CTAButtons />
            <TrustStats />
          </motion.div>

          {/* Right Column - Image (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center"
          >
            <HeroImage size="desktop" />
          </motion.div>
        </div>

        {/* Mobile: integrated layout */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:hidden">
          {/* Top row: headline + image side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            {/* Left: headline text */}
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15]"
              >
                <span className="block text-xs sm:text-base text-primary font-semibold mb-1.5 sm:mb-2">
                  Comprehensive Blood Test — 100+ Biomarkers
                </span>
                Your Doctor Says{" "}
                <span className="text-primary">You&apos;re Fine.</span>
                <br />
                Your Body Says{" "}
                <span className="text-primary">Otherwise.</span>
              </motion.h1>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-shrink-0"
            >
              <HeroImage size="mobile" />
            </motion.div>
          </motion.div>

          {/* Subheadline */}
          <SubHeadline />
          <TrustPoints />
          <CTAButtons />
          <TrustStats />
        </div>
      </div>
    </section>
  );
}

function DesktopHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]"
    >
      <span className="block text-xl text-primary font-semibold mb-3">
        Comprehensive Blood Test — 100+ Biomarkers
      </span>
      Your Doctor Says{" "}
      <span className="text-primary">You&apos;re Fine.</span>
      <br />
      Your Body Says{" "}
      <span className="text-primary">Otherwise.</span>
    </motion.h1>
  );
}

function SubHeadline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed"
    >
      Analyzed by a Certified Functional Medicine Practitioner.
      Optimal ranges, not just &quot;normal.&quot; Personal consultation included.
    </motion.p>
  );
}

function TrustPoints() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-3"
    >
      {trustPoints.map((point, index) => (
        <div key={index} className="flex items-center gap-1.5 sm:gap-2">
          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-xs sm:text-sm text-muted-foreground">{point}</span>
        </div>
      ))}
    </motion.div>
  );
}

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-3 pt-1"
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
        <Button
          size="lg"
          onClick={scrollToProducts}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold shadow-lg"
        >
          Get Your Blood Test
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
        <Button
          size="lg"
          variant="outline"
          onClick={() => window.open(CALENDLY_CONFIG.url, "_blank", "noopener,noreferrer")}
          className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 px-6 sm:px-8 py-3 text-sm sm:text-base"
        >
          <Phone className="mr-2 w-5 h-5" />
          Book Discovery Call
        </Button>
      </motion.div>
    </motion.div>
  );
}

function TrustStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="flex flex-wrap gap-4 sm:gap-6 pt-3 border-t border-border/50"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl font-bold text-primary">2,500+</span>
        <span className="text-xs sm:text-sm text-muted-foreground">Tests Delivered</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl font-bold text-primary">4.9/5</span>
        <span className="text-xs sm:text-sm text-muted-foreground">Client Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg sm:text-xl font-bold text-primary">4</span>
        <span className="text-xs sm:text-sm text-muted-foreground">Countries</span>
      </div>
    </motion.div>
  );
}

function HeroImage({ size }: { size: "mobile" | "desktop" }) {
  const containerClass = size === "mobile"
    ? "relative w-[130px] sm:w-[180px]"
    : "relative w-full max-w-sm";

  const badgeClass = size === "mobile"
    ? "absolute bottom-1.5 left-1.5 w-16 sm:w-20"
    : "absolute bottom-3 left-3 w-28 lg:w-32";

  return (
    <div className={containerClass}>
      <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl">
        <Image
          src="/images/jayden-hero.jpg"
          alt="Jayden Pileggi - Certified Functional Medicine Practitioner specializing in comprehensive blood testing with 100+ biomarkers in Perth, Australia"
          width={800}
          height={1200}
          className="w-full h-auto object-cover"
          sizes={size === "mobile"
            ? "(max-width: 640px) 130px, 180px"
            : "(max-width: 1024px) 260px, 400px"
          }
          quality={85}
          priority
        />

        {/* IFM Certification Badge Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={badgeClass}
        >
          <Image
            src="/images/ifm-certified-practitioner-transparent.png"
            alt="The Institute for Functional Medicine - Certified Practitioner"
            width={200}
            height={100}
            className="w-full h-auto brightness-125 contrast-125 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            sizes={size === "mobile" ? "64px" : "128px"}
            quality={90}
          />
        </motion.div>
      </div>
    </div>
  );
}
