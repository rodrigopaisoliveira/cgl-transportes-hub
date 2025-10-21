import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import { Button } from "@/components/ui/button";
import containersImage from "@/assets/containers.jpg";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Serviço ADR",
      description: "Equipamentos e profissionais certificados para todas as classes de cargas perigosas.",
      features: [
        "Equipamentos especializados",
        "Formação contínua"
      ]
    },
    {
      icon: Zap,
      title: "Serviços Expresso",
      description: "Recolhas urgentes e entregas rápidas com SLA acordado.",
      features: [
        "Disponibilidade 24/7",
        "Entregas em todo o país",
        "Tracking em tempo real"
      ]
    },
    {
      icon: Truck,
      title: "Contentores",
      description: "Transporte e manuseamento de contentores 20″, 40″, 45″.",
      features: [
        "Temperatura ambiente e frigoríficos",
        "Carga a granel",
        "Tanks pressurizados"
      ]
    },
    {
      icon: Users,
      title: "Soluções à Medida",
      description: "Recursos humanos especializados e tecnologia moderna para assegurar eficácia das entregas.",
      features: [
        "Flexibilidade operacional",
        "Equipa dedicada",
        "Continuidade de negócio"
      ]
    }
  ];

  const differentials = [
    {
      title: "Flexibilidade",
      description: "Serviços à medida de cada negócio"
    },
    {
      title: "Tecnologia",
      description: "Frota com GPS e acompanhamento em tempo real"
    },
    {
      title: "Profissionalismo",
      description: "Equipa especializada e formação contínua"
    },
    {
      title: "Continuidade",
      description: "Eficácia das entregas a sustentar o fluxo operacional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Os Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos um vasto leque de soluções de logística e transporte 
              adaptadas às necessidades do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={40} suffix="+" label="Anos de Experiência" />
            <StatsCounter end={100} suffix="%" label="Território Nacional" />
            <StatsCounter end={24} suffix="/7" label="Disponibilidade" />
            <StatsCounter end={1} prefix="" label="Prémio PME Líder" />
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={containersImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diferenciais Competitivos
            </h2>
            <p className="text-lg text-primary-foreground/90">
              O que nos torna o parceiro ideal para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/20 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contacte-nos hoje e descubra como podemos optimizar a sua logística 
              e transporte com soluções à medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contactos">
                  Pedir Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/quem-somos">
                  Conhecer a Empresa
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
