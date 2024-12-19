import { ElementType } from "react";

type TechnologyCard = {
  name: string;
  description: string;
  Icon: ElementType;
  color: string;
};
export const TechnologyCard = ({
  name,
  description,
  Icon,
  color,
}: TechnologyCard) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl flex flex-col p-6 shadow-lg transition-all min-h-72 duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700">
    <div className="flex items-center space-x-4 mb-4 flex-1">
      {<Icon className={`text-3xl ${color}`} />}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {name}
      </h3>
    </div>
    <div className="flex-1">
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    </div>
    <div className="flex-1">
      <button
        aria-label={`Learn more about ${name}`}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Learn More
      </button>
    </div>
  </div>
);
