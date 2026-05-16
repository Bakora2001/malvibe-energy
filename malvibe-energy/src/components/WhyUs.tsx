import { motion, useScroll } from "framer-motion";
import { CheckCircle2, ShieldCheck, Wallet, Wrench, Cpu, Users } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: ShieldCheck, title: "EPRA-Licensed Engineers", desc: "Class T1 & T3 certified — fully insured installations to Kenyan standards." },
  { icon: Cpu, title: "Tier-1 Components Only", desc: "Jinko, Canadian Solar, Victron, Deye, Pylontech — no grey-market parts, ever." },
  { icon: Wrench, title: "Lifetime Workmanship", desc: "2-year workmanship guarantee + scheduled maintenance contracts." },
  { icon: Wallet, title: "Flexible Financing", desc: "12–48 month payment plans through our SACCO and green-finance partners." },
  { icon: Users, title: "Local, Responsive Team", desc: "Kenyan engineers across 30+ counties. Real humans answer the phone." },
  { icon: CheckCircle2, title: "Performance Guaranteed", desc: "Remote monitoring + production guarantee. If your system underperforms, we fix it." },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="why" className="section-pad bg-surface1 overflow-hidden">
      <div className="container-x">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            Six reasons Kenyans <em className="text-secondary">trust Malvibe</em> with their power.
          </h2>
        </div>

        <div className="mt-16 relative max-w-5xl mx-auto flex flex-col gap-10 md:gap-16" ref={containerRef}>
          {/* Background Line */}
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-black/5 md:-translate-x-1/2" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary md:-translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {features.map((f, i) => {
            const I = f.icon;
            const isEven = i % 2 === 0;
            return (
              <div 
                key={f.title} 
                className={`relative flex items-center w-full pl-[80px] md:pl-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between`}
              >
                
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-[29px] md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-secondary md:-translate-x-1/2 z-10"
                />

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? (window.innerWidth >= 768 ? 50 : 20) : (window.innerWidth >= 768 ? -50 : 20), y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                  className="card p-6 md:p-8 flex flex-col sm:flex-row gap-5 md:w-[45%] w-full bg-white shadow-xl hover:shadow-2xl transition-all border border-black/5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary shadow-inner">
                    <I className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
