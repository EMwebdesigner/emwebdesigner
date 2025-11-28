import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Básico",
      price: "49.99",
      discountPrice: "34.99",
      features: [
        "Pagina Web/Landing Page",
        "Diseño Web Personalizado",
        "Hasta 8 secciones",
        "Optimización SEO Básica",
        "Administracion y carga de contenido en Hosting",
        "Seguridad Certificado SSL",
        "Copia y Actualizaciones de Seguridad",
      ],
      maintenance: "14.99",
      maintenanceDiscount: "10.49",
      highlighted: false,
      whatsapp: "https://wa.link/l1xqnm", // 💬 Link Básico

    },
    {
      name: "Estándar",
      price: "179.99",
      discountPrice: "125.99",
      features: [
        "Paquete Básico",
        "Diseño Web Avanzado",
        "Hasta 5 páginas completas",
        "Optimización SEO Completa (configuración de títulos, descripciones y URLs amigables)",
        "Alojamiento Web (Hosting) de alta velocidad por 1 mes GRATIS.",
      ],
      maintenance: "24.99",
      maintenanceDiscount: "17.49",
      highlighted: true,
      whatsapp: "https://wa.link/tahb53", // 💬 Link Estándar
    },
    {
      name: "Premium",
      price: "329.99",
      discountPrice: "230.99",
      features: [
        "Paquete Estándar",
        "Diseño Web Premium",
        "Hasta 10 páginas completas",
        "Estrategia de Marketing Digital",
        "Alojamiento Web (Hosting) de alta velocidad por 3 mes GRATIS",
      ],
      maintenance: "42.99",
      maintenanceDiscount: "30.09",
      highlighted: false,
      whatsapp: "https://wa.link/0ur04m", // 💬 Link Premium
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-destructive to-primary text-white px-8 py-3 rounded-full font-bold text-lg mb-4 animate-glow shadow-[0_0_30px_rgba(239,68,68,0.5)]">
            🔥 BLACK FRIDAY - 30% OFF 🔥
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Precios y <span className="text-primary">Paquetes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige el paquete perfecto para ti y comienza tu viaje digital hoy mismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`relative p-8 transition-all duration-300 hover:-translate-y-2 animate-scale-in ${
                pkg.highlighted
                  ? "border-2 border-primary shadow-[0_0_30px_rgba(0,102,255,0.2)] bg-gradient-to-b from-primary/5 to-transparent"
                  : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-glow">
                  Recomendado
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl text-muted-foreground line-through opacity-60">${pkg.price}</span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-primary animate-pulse">${pkg.discountPrice}</span>
                    <span className="bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold">-30%</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-sm font-semibold mb-2">
                  Mantenimiento mensual (Alojamiento + Cambios personalizados):
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg text-muted-foreground line-through opacity-60">${pkg.maintenance}</span>
                  <span className="text-2xl font-bold text-primary">${pkg.maintenanceDiscount}</span>
                  <span className="bg-destructive text-white px-2 py-1 rounded-full text-xs font-bold">-30%</span>
                </div>
              </div>

              {/* BOTÓN WhatsApp por paquete */}
              <Button
                asChild
                variant={pkg.highlighted ? "hero" : "default"}
                className="w-full"
                size="lg"
                >
                    <a
                        href={pkg.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Seleccionar
                    </a>
              </Button>


            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
