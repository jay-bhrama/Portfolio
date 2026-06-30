import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    "author": "Rohan Sharma",
    "role": "Tech Lead & Mentor, Parivartan Academy",
    "quote": "Jayesh has an incredible knack for data and logic. During his time with us, he didn't just analyze data—he looked at how database architectures could be optimized for full-stack apps. His understanding of backend systems and data patterns is well beyond his years.",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    "author": "Sarah Jenkins",
    "role": "Product Manager, Freelance Client",
    "quote": "Working with Jayesh to build our web application was a seamless experience. He brought fresh ideas regarding MERN stack development and even suggested AI-driven enhancements that we hadn't thought of. A highly motivated and responsive developer!",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    "author": "Dr. R.K. Mehta",
    "role": "Computer Science Professor, Arya College",
    "quote": "Jayesh stands out as a developer who writes remarkably clean and maintainable code. He bridges the gap between academic theory and practical engineering perfectly. His passion for modern frameworks and AI makes him an asset to any engineering team.",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  {
    "author": "Rohan Malhotra",
    "role": "Hackathon Team Lead, DevClash 2025",
    "quote": "Jayesh was the backbone of our development team during the hackathon. His ability to rapidly integrate AI APIs with a robust Node.js backend under tight deadlines was impressive. He doesn’t just write code; he thinks deeply about optimal user experiences.",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150"
  },
  {
    "author": "Aisha Verma",
    "role": "Senior Full-Stack Engineer, TechNova Solutions",
    "quote": "I had the pleasure of reviewing Jayesh's open-source contributions. His command over TypeScript and Tailwind CSS shines through in his clean, modular component structures. He possesses the technical maturity and curiosity of a seasoned engineer.",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150"
  }
]

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }   

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-xs font-medium tracking-wider uppercase animate-fade-in">
                    WHAT PEOPLE SAY
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Kind words from {" "} <span className="font-serif italic font-normal text-white">amazing people.</span>
                </h2>
            </div>

            {/* Testimonials carousel */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/*main Testimonial */}
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                                <Quote className="w-5 h-5 text-primary-foreground"/>
                            </div>
                            <img 
                                src={testimonials[activeIdx].avatar} 
                                alt={testimonials[activeIdx].author} 
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 mb-3" 
                            />
                            <div>
                                <div className="font-semibold text-sm">{testimonials[activeIdx].author}</div>
                                <div className="text-xs text-muted-foreground">{testimonials[activeIdx].role}</div>
                            </div>
                        </div>
                        <blockquote className="text-lg md:text-xl font-medium leading-relaxed">
                            "{testimonials[activeIdx].quote}"
                        </blockquote>
                    </div>
                
                {/* Testimonials Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                        <ChevronLeft />
                    </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, idx)=> (
                            <button onClick={() => setActiveIdx(idx)} className= {`w-2 h-2 rounded-full transition-all duration-300 ${idx=== activeIdx ? "w-8 bg-primary" :"bg-muted-foreground/30 hover:bg-muted-foreground/50" }`}/>
                        ))}
                        </div>
                        <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                            <ChevronRight />
                        </button>
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
};