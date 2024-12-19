import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const HomeScreen = () => (
    <section
    id="home"
    className="min-h-screen flex items-center justify-center pt-20"
  >
    <div className="text-center">
      <Image
        width={200}
        height={200}
        src="/images/steve-full.jpeg"
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        John Doe
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Senior Full Stack Developer
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  </section>
);

export default HomeScreen;
