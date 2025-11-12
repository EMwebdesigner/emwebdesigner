import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { name: "HTML5", icon: "🔷" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "WordPress", icon: "📝" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐱" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-glow" />
              <div className="relative">
                <img
                  src={profileImg}
                  alt="EMwebdesigner Profile"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-card"
                />
                {/* Tech Stack Icons */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-border">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="text-2xl hover:scale-125 transition-transform cursor-pointer"
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Tu Negocio Listo para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dominar la Web
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hola, soy <span className="text-foreground font-semibold">EMwebdesigner</span>, 
              Desarrollador Web. Transformo ideas de negocio en plataformas digitales 
              visibles, dinámicas y accesibles que funcionan perfectamente en cualquier dispositivo.
            </p>

            <div className="pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToServices}
                className="text-lg px-8 py-6"
              >
                ¡Conoce más!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
