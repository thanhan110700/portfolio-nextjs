const AboutMe = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
        <p className="mb-6">
          I am a passionate Full Stack Developer with over 5 years of experience
          in building web applications. My expertise includes React, Node.js,
          and various other modern technologies.
        </p>
        <p>
          I love solving complex problems and creating efficient, scalable
          solutions. When I am not coding, you can find me contributing to
          open-source projects or mentoring junior developers.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
