import { sectionsProps } from "@/types/constant";
import { FaMeh, FaGraduationCap, FaFolder } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdContactEmergency } from "react-icons/md";

export const sectionStyle: string = `min-h-screen flex items-center relative bg-cover bg-center bg-fixed`;
export const sections: sectionsProps[] = [
  {
    section: "about",
    icon: FaMeh,
  },
  {
    section: "skills",
    icon: GiSkills,
  },
  {
    section: "experiences",
    icon: GrTechnology,
  },
  {
    section: "education",
    icon: FaGraduationCap,
  },
  {
    section: "projects",
    icon: FaFolder,
  },
  {
    section: "contact",
    icon: MdContactEmergency,
  },
];
