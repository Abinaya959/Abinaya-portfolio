import { ArrowRight, Mail } from "lucide-react";

const profileImg = "https://i.postimg.cc/Zn3DqhzS/IMG-20260106-WA0007.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-up">
        <p className="text-primary font-medium mb-2">Hi, I'm</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2 text-foreground">
          Abinaya{" "}
          <span className="gradient-text">Sathiyaseelan</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-4 font-heading">
          AI &amp; Data Science Student
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Building data-driven solutions using machine learning and analytics.
          I extract actionable insights from complex datasets and turn them into
          practical ML-powered applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Contact Me <Mail size={16} />
          </a>
        </div>
      </div>
      <div className="flex justify-center animate-fade-up animate-fade-up-delay-2">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border">
          <img
            src={profileImg}
            alt="Abinaya Sathiyaseelan"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
