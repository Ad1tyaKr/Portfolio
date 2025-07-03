import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaAws,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiSelenium,
  SiScikitlearn,
  SiWebpack,
  SiGooglecolab,
  SiJupyter,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { RiChatSmileAiLine } from "react-icons/ri";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "Laravel",
          icon: <FaLaravel className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Python Libraries",
      color: "text-purple-400",
      skills: [
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Pandas",
          icon: <SiPandas className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Scikit-Learn",
          icon: <SiScikitlearn className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Matplotlib",
          icon: <SiWebpack className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Selenium",
          icon: <SiSelenium className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "XGBoost",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Kubernetes",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Colab", icon: <SiGooglecolab className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Jupyter Notebook",
          icon: <SiJupyter className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Microsoft Suites", icon: <TfiMicrosoftAlt className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Technical Proficiencies",
      color: "text-yellow-400",
      skills: [
        {
          name: "Data Structures & Algorithms",
          icon: <Code2 className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "OOPS",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "DBMS",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Machine Learning",
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
        {
          name: "Artificial Intelligence",
          icon: <RiChatSmileAiLine className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <section className="container mx-auto px-4 py-16 relative z-10">
  <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center mb-4">
    Toolbox
  </h2>
  <p className="text-center text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
    Tools and technologies I use to build scalable, modern applications.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {skillCategories.map((category, index) => (
      <SkillCard
        key={index}
        icon={category.icon}
        title={category.title}
        skills={category.skills}
        color={category.color}
      />
    ))}
  </div>
</section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
