import { Shield, Zap, Package, Settings, Thermometer, Droplet, Truck, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      icon: Shield,
      title: "Serviço ADR",
      description: "Transporte seguro de mercadorias perigosas com equipamentos e profissionais certificados para todas as classes.",
      features: [
        "Certificação completa ADR",
        "Equipamentos especializados e homologados",
        "Formação contínua da equipa",
        "Todas as classes de cargas perigosas"
      ]
    },
    {
      icon: Zap,
      title: "Serviços Expresso",
      description: "Recolhas urgentes e entregas rápidas com SLA acordado e acompanhamento em tempo real.",
      features: [
        "Disponibilidade 24/7",
        "Entregas urgentes em todo o país",
        "Tracking GPS em tempo real",
        "SLA personalizado"
      ]
    },
    {
      icon: Package,
      title: "Transporte e Parqueamento de Contentores",
      description: "Manuseamento profissional de contentores de todas as dimensões e tipos.",
      features: [
        "Contentores 20″, 30″, 40″, 45″",
        "Temperatura ambiente e frigoríficos",
        "Tanks e contentores pressurizados",
        "Parqueamento seguro"
      ]
    },
    {
      icon: Settings,
      title: "Soluções à Medida",
      description: "Recursos humanos especializados e tecnologia moderna para assegurar eficácia das entregas e continuidade do fluxo de negócio.",
      features: [
        "Planos logísticos personalizados",
        "Equipa dedicada ao projeto",
        "Tecnologia de gestão avançada",
        "Consultoria logística"
      ]
    },
    {
      icon: Thermometer,
      title: "Transporte Refrigerado",
      description: "Contentores frigoríficos para transporte de produtos que requerem temperatura controlada.",
      features: [
        "Contentores frigoríficos 20′, 40′, 45′",
        "Monitorização contínua de temperatura",
        "Certificações alimentares",
        "Backup de refrigeração"
      ]
    },
    {
      icon: Gauge,
      title: "Serviço de Báscula",
      description: "Equipamentos especializados para bascular contentores com carga a granel.",
      features: [
        "Bascular contentores 20′, 30′, 40′, 45′",
        "Carga a granel",
        "Equipamentos certificados",
        "Operadores especializados"
      ]
    },
    {
      icon: Droplet,
      title: "Manuseamento Especializado",
      description: "Meios avançados para carga e descarga de diversos tipos de mercadoria.",
      features: [
        "Compressores industriais",
        "Sistemas de bombagem",
        "Descarga de válvula rotativa",
        "Equipamento certificado"
      ]
    },
    {
      icon: Truck,
      title: "Veículos de Lona",
      description: "Transporte versátil com veículos de lona para cargas de grandes dimensões.",
      features: [
        "Carga lateral e superior",
        "Flexibilidade de dimensões",
        "Proteção de mercadoria",
        "Cargas paletizadas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Os Nossos Serviços
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Oferecemos um vasto leque de serviços de logística e transporte, 
              adaptados às necessidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Precisa de um serviço específico?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contacte-nos para discutir as suas necessidades. 
              Desenvolvemos soluções à medida para cada cliente.
            </p>
            <Button asChild size="lg">
              <Link to="/contactos">
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cobertura Nacional
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Operamos em todo o território nacional com uma frota moderna 
            equipada com sistema GPS para acompanhamento em tempo real.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-3xl font-bold text-accent">100%</span>
            <span className="text-lg">Portugal Continental e Ilhas</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
