import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/faqs";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
    }, 6000); // changes every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="section-pad bg-secondary text-white relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fff_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#57ab79_0%,transparent_40%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container-x">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <span className="eyebrow !text-primary-200">Client stories</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl">
            Trusted by homes &amp; businesses <em className="text-primary-200">across Kenya</em>.
          </h2>
        </div>

        <div className="mt-12 relative min-h-[380px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={startIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <Quote className="h-8 w-8 text-primary-200 mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <p className="text-white/90 leading-relaxed italic text-lg font-light">"{t.quote}"</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">{t.role}</div>
                    </div>
                    <div className="flex gap-1 shrink-0 ml-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary-200 text-primary-200" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx * 3)}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === idx * 3 ? "w-8 bg-primary-200" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
