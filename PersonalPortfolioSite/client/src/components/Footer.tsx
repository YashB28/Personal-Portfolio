import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">&copy; 2024 Yash Bhushan. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/yash-bhushan-3a43a3262" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/YashB28" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="text-xl" />
            </a>
            <a 
              href="mailto:ybhushan2002@gmail.com" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
