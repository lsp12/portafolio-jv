export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "REST APIs", "SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Frontend",
    icon: "monitor",
    skills: ["React", "Vue.js", "Astro", "Tailwind CSS"],
  },
  {
    category: "Tools & DevOps",
    icon: "tool",
    skills: ["Docker", "Git", "PM2", "ExcelJS", "Power BI"],
  },
  {
    category: "Testing",
    icon: "check-circle",
    skills: ["Mocha", "Chai"],
  },
];
