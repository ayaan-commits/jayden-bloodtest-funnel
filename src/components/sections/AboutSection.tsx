"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Globe } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: GraduationCap,
    text: "Certified Functional Medicine Practitioner",
  },
  {
    icon: Award,
    text: "Functional Diagnostic Nutrition Practitioner",
  },
  {
    icon: Users,
    text: "Thousands of clients helped worldwide",
  },
  {
    icon: Globe,
    text: "Based in Perth, serving globally",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/jayden-about.jpg"
                alt="Jayden Pileggi on rowing machine - Functional Medicine Practitioner"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet <span className="text-primary">Jayden Pileggi</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Certified Functional Medicine Practitioner
            </p>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                After years of seeing patients fall through the cracks of conventional
                medicine — told they were "fine" when they clearly weren't — Jayden
                dedicated his career to functional medicine.
              </p>
              <p>
                His mission is simple: help people understand their bodies at a deeper
                level and give them the roadmap to actually feel their best, not just
                "not sick."
              </p>
              <p>
                Through comprehensive blood testing and personalized consultations,
                Jayden has helped thousands of clients around the world take control
                of their health and optimize their wellbeing.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{cred.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
