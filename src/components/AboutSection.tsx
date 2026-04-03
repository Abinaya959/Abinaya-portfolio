const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-heading text-3xl font-bold mb-2 gradient-text text-center">About Me</h2>
      <div className="w-16 h-1 gradient-bg rounded mx-auto mb-8" />
      <div className="card-glass p-8 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a B.Tech student specializing in <span className="text-foreground font-medium">Artificial Intelligence and Data Science</span>, with a strong foundation in Python, SQL, data analysis, and visualization.
        </p>
        <p>
          I'm passionate about solving real-world problems through data-driven approaches — from cleaning messy datasets to building predictive machine learning models that deliver actionable insights.
        </p>
        <p>
          I believe in continuous learning and hands-on application of ML concepts. Whether it's crafting a fraud detection system or visualizing healthcare trends, I strive to create solutions that make a tangible impact.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
