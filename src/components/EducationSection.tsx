import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">Education</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="card-glass p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Bachelor of Technology – AI &amp; Data Science
            </h3>
            <p className="text-muted-foreground mt-1">
              SRM Madurai College for Engineering and Technology, Sivagangai
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              CGPA: 8.88
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
