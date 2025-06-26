import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Virtual Canvas",
    description: "Developed a virtual canvas using hand gesture recognition and computer vision techniques. Implemented real-time hand gesture recognition to allow drawing and object manipulation on a virtual canvas. Created a smooth user interface using Python scripts for seamless drawing and editing.",
    technologies: [
      { name: "OpenCV", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      { name: "MediaPipe", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
      { name: "Python", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
    ],
    githubUrl: "https://github.com/YashB28/virtual-canvas",
    demoUrl: "https://virtual-canvas-demo.com"
  },
  {
    title: "Shrimp Detection",
    description: "Detection of shrimp using image processing techniques, applicable in marine environments. Implemented to detect shrimps using Image processing algorithms with Raspberry Pi and Sensors. Integrated hardware and software using a simulator for testing and real-time detection.",
    technologies: [
      { name: "Raspberry Pi", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
      { name: "Sensors", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
      { name: "OpenCV", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      { name: "Python", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
    ],
    githubUrl: "https://github.com/YashB28/shrimp-detection",
    demoUrl: "https://shrimp-detection-demo.com"
  },
  {
    title: "IoT-based Food Spoilage Detection",
    description: "Detection of spoilt food using IoT technology, applicable in stores, warehouses, and grocery stores. Implemented to detect any spoilt food using Arduino and Node MCU. Utilized the Blynk IoT platform for monitoring and control.",
    technologies: [
      { name: "Arduino IDE", color: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200" },
      { name: "Arduino UNO", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      { name: "Node MCU", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
      { name: "Blynk IoT", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
    ],
    githubUrl: "https://github.com/YashB28/iot-food-spoilage",
    demoUrl: "https://food-spoilage-demo.com"
  },
  {
    title: "Shop It: An Ecommerce Website",
    description: "A platform to digitalize offline sellers. Provides an e-commerce platform to digitalize offline sellers. Utilized Firebase for backend including authentication and database. Implemented features like authentication, admin dashboard, add to cart, order history, and checkout. Focused on good user experience and responsive design.",
    technologies: [
      { name: "React", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      { name: "Firebase", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
      { name: "JavaScript", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
      { name: "Redux-React Toolkit", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
      { name: "Git & GitHub", color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200" },
    ],
    githubUrl: "https://github.com/YashB28/shop-it-ecommerce",
    demoUrl: "https://shop-it-demo.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical implementations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={tech.color}>
                      {tech.name}
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
