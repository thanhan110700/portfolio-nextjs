import Image from "next/image";

type ProjectProp = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

const Project = () => {
  const projects: ProjectProp[] = [
    {
      title: "E-commerce Platform",
      description:
        "Built a scalable e-commerce solution using React and Node.js",
      image: "/images/laptop.jpeg",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "AI ChatBot",
      description:
        "Developed an AI-powered chatbot using Python and TensorFlow",
      image: "/images/asimo.jpeg",
      technologies: ["Python", "TensorFlow", "NLP"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                width={800}
                height={400}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
