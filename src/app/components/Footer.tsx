import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-20">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p>© 2024. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <FaGithub className="text-2xl hover:text-blue-400 cursor-pointer" />
        <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
        <FaEnvelope className="text-2xl hover:text-blue-400 cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default Footer;
