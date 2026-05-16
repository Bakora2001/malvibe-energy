import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Award } from "lucide-react";
import about from "../assets/about.jpeg";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img src={about} alt="Solar engineers at work" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-primary text-white rounded-2xl p-5 shadow-xl max-w-[220px]">
            <div className="font-display text-4xl">5+</div>
            <div className="text-sm opacity-90 italic">Years lighting up Kenya, sustainably.</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden sm:flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-white shadow-xl">
            <Leaf className="h-10 w-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">About Malvibe Technologies</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            A Kenyan team obsessed with{" "}
            <span className="italic text-primary">clean, reliable</span> power.
          </h2>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed">
            Malvibe Technologies is an EPRA-licensed solar &amp; electrical
            contractor based in Nairobi, serving residential, commercial and industrial
            clients across all 47 counties. We design, install and maintain renewable
            energy systems that pay for themselves — and a planet that keeps giving.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            From a 2-panel rural homestead to a multi-megawatt commercial array, our
            engineers deliver solutions that are <em>safe, certified and built to last</em>.
            Every project starts with a free site assessment and ends with a system you
            can monitor on your phone.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, label: "EPRA C1 Contractor", sub: "T3 Licensed Engineers" },
              { icon: Award, label: "Tier-1 Panels", sub: "25-yr warranty" },
              { icon: Leaf, label: "7.5 MW", sub: "Clean power deployed" },
            ].map((b) => {
              const I = b.icon;
              return (
                <div key={b.label} className="card p-4 text-center">
                  <I className="h-7 w-7 mx-auto text-primary" />
                  <div className="mt-2 font-semibold text-ink">{b.label}</div>
                  <div className="text-xs text-ink/60">{b.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 font-semibold text-ink hover:bg-surface1 transition-colors">
              Talk to an engineer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
