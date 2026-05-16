import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-surface2">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            End-to-end <span className="italic text-secondary">solar &amp; electrical</span> services.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            One team. One accountable contract. From the first energy audit to the
            last bolt — and ongoing maintenance for the next 25 years.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const I = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card p-6 group relative overflow-hidden"
              >
                <span className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <I className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.short}</p>
                <p className="mt-3 text-xs text-ink/55 italic line-clamp-3">{s.long}</p>
                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all"
                >
                  Get a quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
