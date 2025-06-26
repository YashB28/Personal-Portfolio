import { GraduationCap, MapPin, Camera, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn more about my journey, interests, and what drives me as a software engineer
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">ECE Graduate with a Passion for Technology</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a recent Electronics and Communication Engineering graduate from BMS College of Engineering with a strong interest in AI, cloud, and full-stack development. I completed a Machine Learning Internship at CodTech IT Solutions and worked as a freelance Prompt Engineer at Outlier.ai, contributing to AI model training and evaluation. I enjoy solving real-world problems through intelligent and scalable tech solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Outside of tech, I pursue freelance photography, blending creativity with precision. I'm always eager to explore new technologies, collaborate on impactful projects, and grow as a developer and innovator.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                <span className="ml-3 text-slate-600 dark:text-slate-400">Electronics & Communication Engineering</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                <span className="ml-3 text-slate-600 dark:text-slate-400">Based in Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Camera className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                <span className="ml-3 text-slate-600 dark:text-slate-400">Photography Enthusiast</span>
              </div>
              <div className="flex items-center">
                <Code className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                <span className="ml-3 text-slate-600 dark:text-slate-400">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
