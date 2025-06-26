import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Code } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import profileImage from "@assets/Yash_1750881479435.jpg";

export function Hero() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Yash Bhushan Profile" 
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-slate-700 object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Yash Bhushan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            Turning ideas into impact through code, cloud, and creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleScrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleScrollToProjects}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Code className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://www.linkedin.com/in/yash-bhushan-3a43a3262" 
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://github.com/YashB28" 
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="text-slate-400 text-2xl" />
      </div>
    </section>
  );
}
