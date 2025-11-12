import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Pricing />
      <Certificates />
      <Footer />
    </div>
  );
};

export default Index;
