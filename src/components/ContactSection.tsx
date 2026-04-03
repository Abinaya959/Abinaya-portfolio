import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Contact</h2>
        <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "7806962346", href: "tel:7806962346" },
              { icon: Mail, label: "Email", value: "rekhaabi1106@gmail.com", href: "mailto:rekhaabi1106@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tech-abinaya", href: "https://linkedin.com/in/tech-abinaya" },
              { icon: MapPin, label: "Location", value: "Madurai, India", href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form className="card-glass p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
