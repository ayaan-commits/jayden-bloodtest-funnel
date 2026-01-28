"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";
import { VIDEO_CONFIG } from "@/lib/config";

export function VideoSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch Jayden explain how comprehensive blood testing can transform
            your understanding of your health
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border/50 shadow-xl">
            {VIDEO_CONFIG.hasVideo && VIDEO_CONFIG.vimeoId ? (
              // Actual Vimeo Embed
              <iframe
                src={`https://player.vimeo.com/video/${VIDEO_CONFIG.vimeoId}?h=0&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={VIDEO_CONFIG.title}
              />
            ) : (
              // Placeholder - Remove this block when video is ready
              <VideoPlaceholder />
            )}
          </div>

          {/* Video Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-4"
          >
            3-minute overview of the comprehensive blood testing process
          </motion.p>
        </motion.div>

        {/* CTA Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground font-medium mb-4">
            Ready to Get Started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Your Blood Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Placeholder component - will be replaced with actual video
function VideoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10">
      {/* Play button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer"
        aria-label="Play video"
      >
        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" />
      </motion.button>

      {/* Placeholder text */}
      <div className="mt-4 sm:mt-6 text-center px-6">
        <p className="text-foreground font-semibold text-base sm:text-lg">
          Video Coming Soon
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm mt-2 max-w-sm mx-auto">
          Jayden will walk you through the blood testing process
        </p>
      </div>
    </div>
  );
}
