import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { services } from "../data/services";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: services[0].title, message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:malcomngobi@gmail.com?subject=${encodeURIComponent(
      "Enquiry: " + form.subject
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: "#f4f7f2" }}>
      <div className="container-x grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left column — outside the form box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-3 h-display text-4xl sm:text-5xl text-ink">
            <em className="text-primary">Contact Us</em> &amp; Get Us Involved.
          </h2>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            Whether you want a quick quote, a site visit or just an honest second opinion
            on a solar proposal — our engineers are one message away.
          </p>

          <div className="mt-8 space-y-5">
            <InfoRow icon={MapPin} title="Our Location">
              Westlands Office Park,<br />Nairobi, Kenya
            </InfoRow>
            <InfoRow icon={Clock} title="Working Hours">
              Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 4:00 PM<br />Sunday: Emergency only
            </InfoRow>
            <InfoRow icon={Mail} title="Email Us">
              <a href="mailto:malcomngobi@gmail.com" className="hover:text-primary">malcomngobi@gmail.com</a>
            </InfoRow>
            <InfoRow icon={Phone} title="Call Us">
              <a href="tel:+254796744640" className="hover:text-primary">+254 796 744 640</a>
            </InfoRow>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm text-ink/60 italic">Follow our journey:</span>
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-black/5 text-secondary hover:bg-secondary hover:text-white transition-colors"
                aria-label="Social link"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-7 sm:p-10 border border-black/5"
        >
          <h3 className="font-display text-2xl font-bold text-ink">Send us a message</h3>
          <p className="mt-1 text-sm text-ink/60">We typically respond within 2 working hours.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="John Doe"
              />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Service / Subject">
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="input"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="General enquiry">General enquiry</option>
                <option value="Partnership">Partnership / Supplier</option>
              </select>
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Your Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input resize-none"
                placeholder="Tell us about your project, location and timeline..."
              />
            </Field>
          </div>

          <button type="submit" className="mt-6 btn-primary w-full justify-center">
            Send Message <Send className="h-4 w-4" />
          </button>

          <p className="mt-4 text-xs text-ink/50 text-center italic">
            By sending, you agree we may contact you about your enquiry. We never share your details.
          </p>
        </motion.form>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(0,0,0,0.1);
          background: #f9faf7;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #0f1d18;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus {
          border-color: #57ab79;
          box-shadow: 0 0 0 4px rgba(87,171,121,0.15);
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function InfoRow({
  icon: Icon, title, children,
}: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="font-semibold text-ink">{title}</div>
        <div className="text-sm text-ink/65 mt-0.5 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">{label}</span>
      {children}
    </label>
  );
}
