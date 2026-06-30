import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
            icon: Mail,
            label: "Email",
            value:"jayeshupma6437@gmail.com",
            href: "mailto:jayeshupma6437@gmail.com"   
     },
     {
        icon: Phone,    
        label: "Phone",
        value: "+91-7340241750",
        href:"tel:+917340241750"
     },
     {
        icon: MapPin,
        label: "Location",
        value: "Jaipur",
        href: "https://maps.app.goo.gl/PCnBtWTkinvgFZs79"
     },
];
export const Contact = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can send the form data to your backend
    };

    return(
         <section id="contacts" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get in touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's build {" "} <span className="font-serif italic font-normal text-white">something great.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I'd love to hear about it! Send me a message and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setformData({...formData, name: e.target.value})}
                                    type="text"
                                    required
                                    placeholder="Your Name..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setformData({...formData, email: e.target.value})}
                                    type="email"
                                    required
                                    placeholder="Your@email.com"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    rows={5}
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setformData({...formData, message: e.target.value})}
                                    required
                                    placeholder="Your Message..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <button type="submit" className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all">Send Message <Send /></button>
                        </form>
                    </div>
                      {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
                </div>
            </div>
         </section>
    );
}