import { BarChart3, Brain, LayoutDashboard, Globe, PenTool } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analysis", desc: "Transform raw data into actionable insights with thorough analysis" },
  { icon: Brain, title: "ML Model Development", desc: "Build and deploy machine learning models for real-world problems" },
  { icon: LayoutDashboard, title: "Dashboard Creation", desc: "Interactive dashboards for data visualization and monitoring" },
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications using modern frameworks" },
  { icon: PenTool, title: "Content Writing", desc: "SEO-optimized technical and creative content writing" },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Services</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card-glass p-6 text-center hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <s.icon size={24} />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
