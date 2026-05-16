import { motion } from "framer-motion";
import { Phone, PenTool, HardHat, Headphones } from "lucide-react";

const steps = [
  { icon: Phone, title: "1. Free Consultation", desc: "Call or message us. We discuss your needs, site, energy bills and goals." },
  { icon: PenTool, title: "2. Design & Quote", desc: "Engineers visit, model your loads and deliver a detailed system design and transparent quote." },
  { icon: HardHat, title: "3. Installation", desc: "Certified technicians install, commission and certify your system — typically in 1–5 days." },
  { icon: Headphones, title: "4. Lifetime Support", desc: "Remote monitoring, scheduled servicing and a real human on the phone when you need us." },
];

export default function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            From first call to <em className="text-primary">switch-on</em> — in four simple steps.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
          {steps.map((s, i) => {
            const I = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <I className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
