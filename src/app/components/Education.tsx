import { MdSchool } from "react-icons/md";

const Education = () => (
  <section
    id="education"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Education
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
          <div className="mb-8 ml-6">
            <div className="flex items-center mb-2">
              <MdSchool className="text-blue-600 dark:text-blue-400 text-2xl absolute -left-4 bg-transparent dark:bg-gray-900" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2014 - 2018
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              University of Technology
            </p>
          </div>
          <div className="mb-8 ml-6">
            <div className="flex items-center mb-2">
              <MdSchool className="text-blue-600 dark:text-blue-400 text-2xl absolute -left-4 bg-transparent dark:bg-gray-900" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2018 - 2020
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Master is in Software Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Tech Institute</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
