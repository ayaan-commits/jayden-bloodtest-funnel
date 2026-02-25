"use client";

import { Check, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRODUCT_CONFIG } from "@/lib/config";
import { useInView } from "@/lib/hooks/useInView";

const commonFeatures = [
  "100+ biomarkers analyzed",
  "80+ page personalized report",
  "Optimal range comparisons",
  "1-on-1 consultation with Jayden",
  "Priority action plan",
  "Supplement recommendations",
  "Follow-up support",
];

const products = [
  {
    id: "male",
    title: "Male Blood Test",
    subtitle: "Comprehensive Men's Health Panel",
    description:
      "Includes testosterone, PSA, and male-specific hormone markers alongside the full biomarker panel.",
    hormonePanel: "Gender-Specific Comprehensive Hormone Panel",
    ctaText: "Order Male Test",
    ctaLink: PRODUCT_CONFIG.maleTestUrl,
  },
  {
    id: "female",
    title: "Female Blood Test",
    subtitle: "Comprehensive Women's Health Panel",
    description:
      "Includes estrogen, progesterone, and female-specific hormone markers alongside the full biomarker panel.",
    hormonePanel: "Gender-Specific Comprehensive Hormone Panel",
    ctaText: "Order Female Test",
    ctaLink: PRODUCT_CONFIG.femaleTestUrl,
  },
];

export function ProductOptions() {
  const { ref, isInView } = useInView();

  return (
    <section id="products" className="snap-section py-10 sm:py-12 lg:py-16 bg-card scroll-mt-16">
      <div ref={ref} className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Choose Your <span className="text-primary">Test</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the comprehensive blood test designed specifically for your biology
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${isInView ? `animate-fade-in-up delay-${(index + 1) * 100}` : "opacity-0"}`}
            >
              <Card className="h-full border-2 border-border/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Gender-specific hormone panel */}
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {product.hormonePanel}
                      </span>
                    </div>
                  </div>

                  {/* Common Features */}
                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-foreground">
                      Includes:
                    </p>
                    {commonFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Guarantee Badge */}
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg mb-6">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      30-Day Money-Back Guarantee
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    asChild
                  >
                    <a href={product.ctaLink} target="_blank" rel="noopener noreferrer">
                      {product.ctaText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={`text-center text-sm text-muted-foreground mt-8 ${isInView ? "animate-fade-in delay-400" : "opacity-0"}`}
        >
          Both tests include all core biomarkers plus gender-specific panels.
          <br />
          Results delivered in 3-4 weeks with personal consultation included.
        </p>
      </div>
    </section>
  );
}
