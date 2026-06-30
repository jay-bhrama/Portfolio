const experiences = [
    {
    period: "2023 - 2026 (Present)",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Arya Perfect Graduate College",
    description: "Currently pursuing a solid foundation in computer science fundamentals, data structures, and database management. Actively combining academic concepts with hands-on development tools like the MERN stack and Python to build responsive, real-world web applications.",
    current: true    
    },
    {
       period: "November 2025 (3 months Internship)",
    role: "Professional Data Analyst Course",
    company: "Parivartan Skills Academy",
    description: "Completed a specialized certification focused on data analytics, problem-solving, and logical thinking. Mastered core concepts of data handling and structured analysis, which directly enhances my capability to design efficient database architectures and optimize performance in full-stack applications.",
    current: false  
    },
    
    {
        period: "2021 - 2023",
    role: "Senior Secondary Schooling",
    company: "Commerce Stream",
    description: "Graduated with a focus on commerce, which sharpened my analytical, management, and financial logic skills. This background gives me a unique business perspective when building software solutions, helping me bridge the gap between technical code and real-world business needs.",
    current: false
    },
]


export const Experience = () => {
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
    <div
    className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
     />
   <div className="container mx-auto px-6 relative z-10">
    {/*Section header */    }
    <div className="max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            EDUCATION JOURNEY
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Academic foundations {" "} <span className="font-serif italic font-normal text-white">{" "} driving innovation.</span>
        </h2>
        <p
        className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my educational milestones, turning conceptual knowledge into practical engineering skills and ready to build modern web solutions.
        </p>
    </div>
    {/*Timeline */}
    <div className="relative">
       
     <div className= " timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b   from-primary/70 via-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
            
   {/* Experience items */}
   <div className="space-y-12">
    {experiences.map((exp, idx) => (
        <div key={idx} 
        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
        style={{ animationDelay: `${(idx + 1)* 100}ms` }}
        > 
        {/* timeline Dot */}
        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
        {exp.current && ( <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
        </div>

        {/* Content */}
        <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
            <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                <span className="text-sm text-primary font-medium">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
              
            </div>
        </div>
        </div>
        
    ))}
   </div>
    </div>
    </div>
    </section>
    );
};