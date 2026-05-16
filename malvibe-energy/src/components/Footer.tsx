import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      {/* Layered wavy top divider */}
      <div className="absolute left-0 right-0 -top-[1px] leading-[0] pointer-events-none -translate-y-full">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full h-[90px] sm:h-[140px] lg:h-[180px] block"
          aria-hidden="true"
        >
          <path
            d="M0,120 C180,40 360,200 540,120 C720,40 900,200 1080,120 C1260,40 1380,140 1440,100 L1440,180 L0,180 Z"
            fill="#57ab79"
            fillOpacity="0.25"
          />
          <path
            d="M0,140 C200,60 380,200 600,130 C820,60 1000,200 1220,130 C1340,90 1400,150 1440,130 L1440,180 L0,180 Z"
            fill="#104f9f"
            fillOpacity="0.35"
          />
          <path
            d="M0,150 C180,90 360,200 540,140 C720,80 900,200 1080,140 C1260,80 1380,170 1440,150 L1440,180 L0,180 Z"
            fill="#0f1d18"
          />
        </svg>
      </div>

      <div className="relative container-x px-4 sm:px-6 lg:px-12 pt-24 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Sun className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-lg">
                Malvibe<span className="text-primary"> Technologies</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/65 italic">
              "Eco-friendly Energy for a greener tomorrow."
            </p>
            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              EPRA-licensed solar &amp; electrical contractor delivering clean,
              certified energy systems across Kenya.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                  aria-label="Social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {[
                ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
                ["Projects", "#projects"], ["Why Us", "#why"], ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg">Our Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="hover:text-primary transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Westlands Office Park, Nairobi, Kenya</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="tel:+254796744640" className="hover:text-primary">+254 796 744 640</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="mailto:malcomngobi@gmail.com" className="hover:text-primary break-all">malcomngobi@gmail.com</a></li>
            </ul>
            <a href="#contact" className="btn-primary mt-5 text-sm py-2.5 px-5">Request a quote</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Malvibe Technologies. All rights reserved.</p>
          <p className="italic">Designed with care for <span className="text-primary">greener</span> Kenya</p>
        </div>
      </div>
    </footer>
  );
}
