import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VeriJob",
    subtitle: "Fake Job Detection Platform",
    points: [
      "ML-based system to detect fraudulent job postings",
      "Resume-job matching using NLP",
      "Full-stack app using React, Node.js, MongoDB",
    ],
    tags: ["Machine Learning", "NLP", "React", "Node.js"],
  },
  {
    title: "Pokeshop Product Insights",
    subtitle: "Data Analytics Dashboard",
    points: [
      "Data scraping using BeautifulSoup",
      "Streamlit dashboard for pricing and ratings analysis",
      "Category-wise data insights",
    ],
    tags: ["Python", "BeautifulSoup", "Streamlit"],
  },
  {
    title: "Cancer Care Navigator",
    subtitle: "Healthcare Data Dashboard",
    points: [
      "Data intelligence dashboard for cancer trends",
      "Healthcare resource visualization",
    ],
    tags: ["Data Analysis", "Visualization", "Healthcare"],
  },
  {
    title: "Humanizer AI Platform",
    subtitle: "AI SaaS Application",
    points: [
      "AI SaaS platform for human-like text conversion",
      "Stripe payment integration",
      "Full-stack deployment",
    ],
    tags: ["AI", "SaaS", "Stripe", "Full-Stack"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Projects</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="card-glass p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-primary text-sm font-medium mb-3">{p.subtitle}</p>
            <ul className="space-y-1.5 mb-4">
              {p.points.map((pt) => (
                <li key={pt} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
