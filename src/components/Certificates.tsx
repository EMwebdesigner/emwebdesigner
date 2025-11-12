import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Desarrollo Web con HTML",
      institution: "EducaciónIT",
      student: "Ender Marquez",
      hours: "18 horas cronológicas",
      date: "1 de julio de 2025",
    },
    {
      title: "Introducción a Bases de Datos y SQL",
      institution: "EducaciónIT",
      student: "Ender Marquez",
      hours: "18 horas cronológicas",
      date: "13 de agosto de 2025",
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Certificados de <span className="text-primary">Aprobación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formación profesional certificada en desarrollo web y tecnologías modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={cert.title}
              className="relative p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
              
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-secondary/20 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-primary/20 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Certificado de aprobación
                    </h3>
                    <p className="text-sm text-primary font-medium">{cert.institution} acredita que</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-xl font-bold">{cert.student}</p>
                  <p className="text-sm text-muted-foreground">
                    cursó un total de {cert.hours} y aprobó todos los requisitos para obtener 
                    el certificado del curso
                  </p>
                  <p className="text-lg font-semibold text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">con fecha {cert.date}</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex gap-8 text-xs text-muted-foreground">
                    <div>
                      <p className="font-medium">Sebastian Dziekonsky</p>
                      <p>Chief Executive Officer</p>
                    </div>
                    <div>
                      <p className="font-medium">Leanne Samer</p>
                      <p>Coordinadora Académica</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-muted rounded flex items-center justify-center text-xs">
                    QR Code
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
