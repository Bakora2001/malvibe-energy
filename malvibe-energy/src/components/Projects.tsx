import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import p1 from "../assets/proj2.jpeg";
import p2 from "../assets/proj3.jpeg";
import p3 from "../assets/proj4.jpeg";
import p4 from "../assets/proj5.jpeg";
import p5 from "../assets/proj6.jpeg";

const projects = [
  { img: p1, title: "60kW Hybrid System", place: "Nakuru Dairy Co-op", tag: "Commercial" },
  { img: p2, title: "Solar Water Heating", place: "Coastline Boutique Hotel", tag: "Hospitality" },
  { img: p3, title: "200kW Ground-mount", place: "Naivasha Farm", tag: "Agriculture" },
  { img: p4, title: "Off-grid Lodge", place: "Maasai Mara", tag: "Off-grid" },
  { img: p5, title: "Estate Solar Lighting", place: "Kitengela", tag: "Lighting" },
];

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % projects.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + projects.length) % projects.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Recent projects</span>
            <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
              Real installations. <em className="text-primary">Real impact.</em>
            </h2>
          </div>
          <a href="#contact" className="btn-secondary self-start">Start your project</a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl shadow-md text-left focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-90" />
              <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4" />
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block text-[10px] uppercase tracking-widest bg-primary/90 px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-white/80 italic">{p.place}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={projects[active].img}
                  alt={projects[active].title}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>
              <div className="mt-4 text-center text-white">
                <span className="inline-block text-[10px] uppercase tracking-widest bg-primary/90 px-2.5 py-1 rounded-full">
                  {projects[active].tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{projects[active].title}</h3>
                <p className="text-sm text-white/70 italic">{projects[active].place}</p>
                <p className="mt-2 text-xs text-white/50">{active + 1} / {projects.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
