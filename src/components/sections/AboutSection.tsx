"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: GraduationCap,
    text: "Certified Functional Medicine Practitioner",
    color: "from-primary to-primary/70",
  },
  {
    icon: Award,
    text: "Functional Diagnostic Nutrition Practitioner",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    text: "Thousands of clients helped worldwide",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    text: "Based in Perth, serving globally",
    color: "from-blue-500 to-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 bg-card scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -z-10 hidden sm:block"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl -z-10 hidden sm:block"
            />

            {/* Main image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image
                  src="/images/jayden-about.jpg"
                  alt="Jayden Pileggi on rowing machine - Functional Medicine Practitioner"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6"
              >
                <div className="bg-card border border-border/50 rounded-xl p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-foreground">2500+</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Clients Helped</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                About Jayden
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
            >
              Meet <span className="text-primary">Jayden Pileggi</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6"
            >
              Certified Functional Medicine Practitioner
            </motion.p>

            {/* Story paragraphs with staggered animation */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
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
                of their health and optimize their wellbeing.
              </p>
            </motion.div>

            {/* Credentials with enhanced animations */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + 0.1 * index, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-default group"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${cred.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <cred.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                  <span className="text-xs sm:text-sm text-foreground font-medium">{cred.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
