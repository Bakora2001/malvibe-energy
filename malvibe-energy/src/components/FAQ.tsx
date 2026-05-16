import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-surface2">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            Frequently asked, <em className="text-primary">honestly answered</em>.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Going solar is a big decision. Here are the things our clients ask most often.
            Don't see your question? <a href="#contact" className="text-secondary font-semibold underline">Just ask us</a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl bg-white border border-black/5 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-ink/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
