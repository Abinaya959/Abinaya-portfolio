const skillCategories = [
  { label: "Programming", skills: ["Python", "SQL", "Java", "C++"] },
  { label: "Libraries & Frameworks", skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"] },
  { label: "Data Analysis", skills: ["Data Cleaning", "EDA", "Feature Engineering"] },
  { label: "Tools", skills: ["Excel", "Streamlit", "Git"] },
  { label: "Databases", skills: ["MySQL"] },
  { label: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Skills</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="card-glass p-6">
            <h3 className="font-heading text-sm font-semibold text-primary mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
