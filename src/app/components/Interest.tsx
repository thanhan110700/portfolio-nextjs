import { FaBook, FaCamera, FaGamepad, FaMusic } from "react-icons/fa";

type InterestProp = {
  name: string;
  icon: React.ReactNode;
};

const Interest = () => {
  const interests: InterestProp[] = [
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Music", icon: <FaMusic /> },
    { name: "Reading", icon: <FaBook /> },
    { name: "Photography", icon: <FaCamera /> },
  ];
  return (
    <section id="interest z-100">
      <h2 className="text-3xl font-bold mb-6">Interests</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl text-blue-500 mb-3">{interest.icon}</div>
            <h3 className="font-semibold">{interest.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interest;
