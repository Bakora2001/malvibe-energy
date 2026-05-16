import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "../data/services";
import logoMalvibe from "../assets/logo-malvibe-new.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src={logoMalvibe} alt="Malvibe Energy" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.label} className="relative group">
                <a
                  href={l.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                    scrolled ? "text-ink hover:text-primary" : "text-white hover:text-primary-200"
                  }`}
                >
                  {l.label} <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-[520px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.slug}
                          href="#services"
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface1 transition-colors group/item"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block font-semibold text-sm text-ink">{s.title}</span>
                            <span className="block text-xs text-ink/60 line-clamp-1">{s.short}</span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                  scrolled ? "text-ink hover:text-primary" : "text-white hover:text-primary-200"
                }`}
              >
                {l.label}
              </a>
            )
          )}
          <a href="#contact" className="ml-3 btn-primary py-2.5 px-5 text-sm">
            Get a Free Quote
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-black/5 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileServices((v) => !v)}
                  className="w-full flex items-center justify-between py-3 font-medium text-ink"
                >
                  {l.label} <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                </button>
                {mobileServices && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {services.map((s) => (
                      <a
                        key={s.slug}
                        href="#services"
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm text-ink/70 hover:text-primary"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-medium text-ink hover:text-primary"
              >
                {l.label}
              </a>
            )
          )}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-3">
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
