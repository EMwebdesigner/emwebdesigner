import { Card } from "@/components/ui/card";
import webPageImg from "@/assets/services/web-page.jpg";
import landingPageImg from "@/assets/services/landing-page.jpg";
import hostingImg from "@/assets/services/hosting.jpg";
import sslImg from "@/assets/services/ssl.jpg";
import seoImg from "@/assets/services/seo.jpg";
import marketingImg from "@/assets/services/marketing.jpg";

const Services = () => {
  const services = [
    {
      title: "Página Web",
      image: webPageImg,
    },
    {
      title: "Landing Page",
      image: landingPageImg,
    },
    {
      title: "Alojamiento Web",
      image: hostingImg,
    },
    {
      title: "Certificado SSL",
      image: sslImg,
    },
    {
      title: "Optimización SEO",
      image: seoImg,
    },
    {
      title: "Marketing Digital",
      image: marketingImg,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para el siguiente nivel? Explora nuestra gama completa de soluciones 
            diseñadas para impulsar tu presencia digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
