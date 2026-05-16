import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sun } from "lucide-react";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import { stats } from "../data/faqs";

const slides = [hero2, hero3, hero4, hero5, hero6];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Crossfading background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: '2%', scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: '-2%' }}
            transition={{ opacity: { duration: 1.2 }, x: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }}
            className="absolute inset-0"
          >
            <img
              src={slides[index]}
              alt="Solar installation by Malvibe Technologies"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-secondary-900/40 to-primary-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_0%,rgba(0,0,0,0.25)_70%)]" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-primary" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-x h-full px-4 sm:px-6 lg:px-12 flex flex-col justify-center text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary-200">
            <Sun className="h-3.5 w-3.5" /> EPRA C1 Solar Contractor &middot; T3 Licensed Engineers
          </span> */}

          <h1 className="mt-6 h-display text-5xl sm:text-6xl lg:text-7xl text-white">
            Powering Kenya with{" "}
            <span className="italic gradient-text">Clean, Reliable Energy</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl italic font-display">
            "Eco-friendly Energy for a greener tomorrow."
          </p>

          <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl">
            Solar PV, solar water heating, electrical installations and backup power —
            engineered, installed and serviced by certified Kenyan engineers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get a Free Site Assessment <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">Explore Services</a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/15 max-w-3xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 px-5 py-5">
              <div className="font-display text-3xl sm:text-4xl text-primary-200">{s.value}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
