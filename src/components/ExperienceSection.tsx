import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI & Data Science Intern",
    company: "Elysium Technologies",
    period: "Dec 2025",
    points: [
      "Data cleaning and preprocessing using Python",
      "Conducted EDA to identify patterns and trends",
      "Built machine learning models using Scikit-learn",
      "Created dashboards and reports using Excel",
    ],
  },
  {
    title: "Content Writing Intern",
    company: "InAmigos Foundation",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Developed SEO-optimized content",
      "Worked on awareness campaigns",
      "Collaborated on storytelling and strategy",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Experience</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="card-glass p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
