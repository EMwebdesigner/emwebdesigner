import { Button } from "@/components/ui/button";
import profileImg from "@/assets/developer.png";
import heroBg from "@/assets/hero-bg.jpg";
import html5Logo from '../assets/icons/html5-logo.svg'; // O .png, .webp, etc.
import css3Logo from '../assets/icons/css3-logo.svg';
import jsLogo from '../assets/icons/javascript-logo.svg';
import wordpressLogo from '../assets/icons/wordpress-logo.svg';
import gitLogo from '../assets/icons/git-logo.svg'; // A menudo se usa el logo de Git-SCM o GitKraken
import githubLogo from '../assets/icons/github-logo.svg';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '20px', 
    padding: '10px 0', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: '10px',
    marginBottom: '30px' // Asegúrate de añadir el margen inferior si es necesario
}}>
    <img src={html5Logo} alt="HTML5 Logo" style={{ width: '40px' }} />
    <img src={css3Logo} alt="CSS3 Logo" style={{ width: '40px' }} />
    <img src={jsLogo} alt="JavaScript Logo" style={{ width: '40px' }} />
    <img src={wordpressLogo} alt="WordPress Logo" style={{ width: '40px' }} />
    <img src={gitLogo} alt="Git Logo" style={{ width: '40px' }} />
    <img src={githubLogo} alt="GitHub Logo" style={{ width: '40px' }} />
</div>

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
          <div className="flex justify-center lg:justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-glow" />
              <div className="relative">
                <img
                  src={profileImg}
                  alt="EMwebdesigner Profile"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-pera"
                />

                {/* Contenedor de Logos - MÉTODO ALTERNATIVO DE CENTRADO */}
<div className="absolute -bottom-8 left-0 right-0 
                flex justify-center gap-4 p-3 
                bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-border">
    
    <img src={html5Logo} alt="HTML5 Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="HTML5" />
    <img src={css3Logo} alt="CSS3 Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="CSS3" />
    <img src={jsLogo} alt="JavaScript Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="JavaScript" />
    <img src={wordpressLogo} alt="WordPress Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="WordPress" />
    <img src={gitLogo} alt="Git Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="Git" />
    <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8 hover:scale-125 transition duration-300" title="GitHub" />
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
                onClick={() => window.open("https://wa.link/rl7ps6", "_blank")}
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
