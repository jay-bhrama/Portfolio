import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimimzing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: Users,
        title: "Collabration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest technologies and best practices.",
    },
]
export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left columns */}
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white"> {" "} One Component at a time.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                      I’m a passionate fresher web developer with a strong interest in creating clean, 
                      responsive, and user-friendly websites. I enjoy turning ideas into interactive digital experiences 
                      using technologies like HTML, CSS, JavaScript, and modern web development practices. I’m constantly 
                      learning new skills and improving my ability to build websites that are both visually appealing and
                       functional across different devices.
                    </p>
                    <p>
                        During my learning journey, I have worked on several beginner-friendly projects such as landing pages,
                         portfolio websites, games, and utility applications. These projects helped me strengthen my problem-solving skills,
                          understand responsive design, and improve my ability to write organized and maintainable code. I focus on creating 
                          smooth user experiences while paying attention to details like layout, styling, and performance.
                    </p>
                    <p>
                          As a fresher, I am eager to gain real-world experience, collaborate with creative teams, and contribute to meaningful projects.
                           I am highly motivated, quick to adapt, and always ready to explore new technologies in the web development field. 
                           My goal is to grow as a full-stack developer and build modern web applications that make a positive impact on users.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to build modern, responsive, and user-friendly websites while
                         continuously improving my skills as a web developer. I aim to create digital experiences
                          that combine creativity, functionality, and performance, helping businesses and individuals
                           establish a strong and impactful online presence."
                    </p>
                </div>
                </div>
                {/* Right column-highlight  */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                    <div key={idx} 
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${(idx + 1)* 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                           <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};