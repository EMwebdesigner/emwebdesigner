import { Code2, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const sections = {
    soluciones: [
      "Desarrollo personalizado",
      "Alojamiento Web (Hosting)",
      "Certificado SSL",
      "Estructura Lista para SEO",
      "Soporte y Mantenimiento Dedicado",
    ],
    recursos: [
      "Visual Studio Code",
      "HTML5, CSS3 Y JS",
      "WordPress",
      "Git & GitHub",
      "Php & MySQL",
    ],
    proyectos: [
      "CentroPokémon",
      "Huddle subscription",
      "Newsletter sign-up",
      "Phoenix Beauty Spa",
    ],
  };

  return (
    <footer className="bg-dark-bg text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">
                <span className="text-primary">EM</span>webdesigner
              </span>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              Impulsa tu negocio con soluciones innovadoras
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/emwebdesigner/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ender-marquez-576b90379/" },
                { icon: MessageCircle, href: "https://wa.link/rl7ps6" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="text-xl font-bold mb-6">Soluciones</h3>
            <ul className="space-y-3">
              {sections.soluciones.map((item) => (
                <li key={item}
                className="text-gray-300 hover:text-primary transition-colors block hover:translate-x-1 duration-300"
                >
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                  > */}
                    {item}
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recursos</h3>
            <ul className="space-y-3">
              {sections.recursos.map((item) => (
                <li key={item}
                className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-1 duration-300"
                >
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-300"
                  > */}
                    {item}
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Proyectos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Proyectos</h3>
            <ul className="space-y-3">

              {/* Modifica este href si deseas cambiar el link del proyecto CentroPokémon */}
              <li>
                <a
                  href="https://emwebdesigner.github.io/Web-Centro-Pokemon/" // <-- AQUÍ (link Centro Pokémon)
                  className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CentroPokémon
                </a>
              </li>

              {/* Modifica este href si deseas cambiar el link del proyecto Huddle subscription */}
              <li>
                <a
                  href="https://emwebdesigner.github.io/Proyecto-landing-page/#" // <-- AQUÍ (link Huddle subscription)
                  className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Huddle subscription
                </a>
              </li>

              {/* Modifica este href si deseas cambiar el link del proyecto Newsletter */}
              <li>
                <a
                  href="https://emwebdesigner.github.io/LP-Newsletter-sign-up/" // <-- AQUÍ (link Newsletter sign-up)
                  className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsletter sign-up
                </a>
              </li>

              {/* Modifica este href si deseas cambiar el link del proyecto Phoenix Beauty Spa */}
              <li>
                <a
                  href="https://phoenix-beauty-spa.netlify.app/" // <-- AQUÍ (link Phoenix Beauty Spa)
                  className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phoenix Beauty Spa
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 EMwebdesigner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
