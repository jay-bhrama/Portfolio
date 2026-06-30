import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import sms from "../assets/projects/SMS.jpg";
import spg from "../assets/projects/SPG.jpg";
import trivia from "../assets/projects/trivia.jpg";
import weather from "../assets/projects/Weather-app.png";
import notes from "../assets/projects/Notes.png";
import amazon from "../assets/projects/amazon.png";
import todolist from "../assets/projects/To-do-list.png";

const projects = [
        {
        title: "Student management system",
        description: "Student Management API is a RESTful backend application built with Python, FastAPI, SQLite, and Pydantic. It provides CRUD operations, search, filtering, pagination, and input validation for managing student records. The project follows a modular architecture, demonstrating clean code practices, database integration, REST API development, and effective backend programming skills.",
        image: sms,
        tags: ["Backend", "python","FastAPI", "SQLite","Rest API", "Pydantic"],
        link: "https://github.com/jay-bhrama/Student-Management-system",
        github: "https://github.com/jay-bhrama/Student-Management-system"
    },
        {
        title: "Secure Password Generator",
        description: "A Python-based password generator that creates strong, customizable passwords based on user preferences. It supports uppercase letters, digits, and special characters while enforcing minimum length for enhanced security.",
        image: spg,
        tags: ["Backend", "python"],
        link: "https://github.com/jay-bhrama/Secure-Password-generator",
        github: "https://github.com/jay-bhrama/Secure-Password-generator"
    },
     {
        title: "Trivia-Quiz-App",
        description: "An interactive Python quiz game that presents random programming questions, evaluates user responses, tracks scores, and provides instant feedback, helping users test and improve their Python fundamentals.",
        image: trivia,
        tags: ["Backend","API", "python"],
        link: "https://github.com/jay-bhrama/Trivia-quiz-game",
        github: "https://github.com/jay-bhrama/Trivia-quiz-game"
    },
    {
        title: "WEATHER-APP",
        description: "It's an weather app which tell weather according to cities using weather API, with weather it also tells windspeed and humidity.",
        image: weather,
        tags: ["HTML","CSS", "JavaScript"],
        link: "https://github.com/jay-bhrama/Weather-Application-",
        github: "https://github.com/jay-bhrama/Weather-Application-"
    },
    {
        title: "NOTES-APP",
        description: "It's an Notes app which can contain all your notes and it keeps them save even if you close it.",
        image: notes,
          tags: ["HTML","CSS", "JavaScript"],
        link: "https://github.com/jay-bhrama/Notes-App",
        github: "https://github.com/jay-bhrama/Notes-App"
    },
    {
        title: "TO-DO-LIST APP",
        description: "It's an TO-DO-LIST APP tracker it keeps an record of your saved works.",
        image: todolist,
          tags: ["HTML","CSS", "JavaScript"],
        link: "https://github.com/jay-bhrama/To-Do-List-Application",
        github: "https://github.com/jay-bhrama/To-Do-List-Application"
    },
    {
        title: "AMAZON [Home-page]",
        description: "It's an amazon homepage which contains navbar and other diffrent styles exactly same as amazon page, we built it using HTML & CSS .",
        image: amazon,
          tags: ["HTML","CSS", ""],
        link: "https://nimble-panda-6538a4.netlify.app/",
        github: "https://nimble-panda-6538a4.netlify.app/"
    },
     
];

export const Projects = () => {
    return(
         <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
           </h2>
           <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent Work, from complex web applications to
             innovative tools that solve real-world problems.
                     </p>
          </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                     style={{ animationDelay: `${(idx + 1)* 100}ms` }}
                    >
                        {/*image*/}
                        <div className="relative overflow-hidden aspect-video"
                       >
                            <img src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div
                            className="absolute inset-0 bg-gradient-to-t fromm-card via-card/50 to transparent opacity-60"/>
                            {/*Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5"/>
                            </a>
                            </div>
                        </div>
                        {/* content */}
                        <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
             </div>
                ))}
            </div>
            {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
        </div>
    </section>
    
)};