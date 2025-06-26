import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "CodTech IT Solutions",
    period: "2023 - 2024",
    description: "Completed a Machine Learning Internship focused on developing and implementing machine learning models for various business applications. Worked with data preprocessing, feature engineering, and model optimization to deliver actionable insights and automated solutions.",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
  },
  {
    title: "Freelance Prompt Engineer",
    company: "Outlier.ai",
    period: "2024 - Present",
    description: "Working as a freelance Prompt Engineer contributing to AI model training and evaluation. Specialized in designing and optimizing prompts for AI models to improve response quality and accuracy, collaborating with cross-functional teams to implement AI solutions.",
    skills: ["AI/ML", "Prompt Engineering", "NLP", "Model Evaluation"],
    badgeColor: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and key roles in the technology industry
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <Badge className={exp.badgeColor}>
                      {exp.period}
                    </Badge>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
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
