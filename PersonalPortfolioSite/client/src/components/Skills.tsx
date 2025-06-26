import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiCplusplus, 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMysql, 
  SiMongodb, 
  SiApachecassandra, 
  SiDocker, 
  SiKubernetes
} from "react-icons/si";
import { Code, Wrench, Database, Cloud, Heart, FolderSync, Settings, Brain, Users, MessageCircle, Clock, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["C++", "JavaScript", "Python"]
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    title: "Databases",
    icon: <Database className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["MySQL", "MongoDB", "Cassandra"]
  },
  {
    title: "Cloud",
    icon: <Cloud className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["Docker", "Kubernetes", "CI/CD Pipeline", "AWS"]
  },
  {
    title: "Coursework",
    icon: <Settings className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["OOPs in C++", "Operating Systems", "Data Structures & Algorithms", "DBMS"]
  },
  {
    title: "Areas of Interest",
    icon: <Heart className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["Problem-Solving", "Cloud", "Web Development"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    skills: ["Leadership", "Time Management", "Communication Skills", "Adaptability", "Teamwork"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        
        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
