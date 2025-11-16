import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "CentroPokémon",
      description: "Plataforma web interactiva para gestión de Pokémon",
      image: "https://images.unsplash.com/photo-1542779283-429940ce8336?w=800&h=600&fit=crop",
      link: "https://emwebdesigner.github.io/Web-Centro-Pokemon/",
    },
    {
      title: "Huddle Subscription",
      description: "Sistema de suscripción moderno y funcional",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "https://emwebdesigner.github.io/Proyecto-landing-page/#",
    },
    {
      title: "Newsletter Sign-up",
      description: "Landing page optimizada para captación de leads",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop",
      link: "https://emwebdesigner.github.io/LP-Newsletter-sign-up/",
    },
    {
      title: "Phoenix Beauty Spa",
      description: "Sitio web premium para spa de belleza con servicios exclusivos",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=600&fit=crop",
      link: "https://phoenix-beauty-spa.netlify.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mi <span className="text-primary">Portafolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proyectos destacados que demuestran mi experiencia en desarrollo web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-4 bg-primary rounded-full hover:bg-primary/90 transform hover:scale-110 transition-all shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
