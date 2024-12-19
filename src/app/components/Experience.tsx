import { MdWork } from "react-icons/md";

type ExperienceProp = {
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
};

const Experience = () => {
  const experiences: ExperienceProp[] = [
    {
      company: "Tech Giants Inc.",
      role: "Senior Software Engineer",
      duration: "2020-Present",
      description: "Leading development of cloud-based solutions",
      image: "/images/company1.jpg",
    },
    {
      company: "Innovate Labs",
      role: "Software Engineer",
      duration: "2018-2020",
      description: "Developed enterprise web applications",
      image: "/images/company2.jpg",
    },
  ];
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-400 ml-3">
            <div className="mb-8 ml-6">
              <div className="flex items-center mb-2">
                <MdWork className="text-blue-600 dark:text-blue-400 text-2xl absolute -left-4 bg-transparent dark:bg-gray-900" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experiences[0].duration}
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {experiences[0].role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experiences[0].company}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {experiences[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
