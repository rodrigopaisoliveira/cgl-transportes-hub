import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import fleetImage from "@/assets/fleet-technology.jpg";

const QuemSomos = () => {
  const values = [
    "Compromisso com a qualidade e segurança",
    "Transparência e confiança nas relações comerciais",
    "Inovação tecnológica contínua",
    "Formação e desenvolvimento da equipa",
    "Responsabilidade ambiental e social",
    "Flexibilidade e adaptação às necessidades dos clientes"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Quem Somos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Com mais de 40 anos de atividade, o Grupo CGL Transportes consolidou 
              a sua posição como parceiro de negócios em diversos setores.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Com mais de 40 anos de atividade, o Grupo CGL Transportes consolidou 
                  a sua posição como parceiro de negócios em diversos setores, oferecendo 
                  um vasto leque de serviços de logística, transporte terrestre, aéreo e marítimo.
                </p>
                <p>
                  O compromisso com a qualidade e a segurança é um pilar da empresa. 
                  Realizamos o transporte de cargas completas ou grupagem, de pequenas 
                  ou grandes dimensões, em todo o país.
                </p>
                <p>
                  A nossa frota está equipada com um moderno sistema GPS e é gerida 
                  por profissionais que prestam ao cliente todo o apoio e informação 
                  necessários ao longo do processo.
                </p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={fleetImage}
                alt="Frota CGL Transportes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 bg-muted/30 rounded-xl">
            <StatsCounter end={40} suffix="+" label="Anos de Experiência" />
            <StatsCounter end={100} suffix="%" label="Território Nacional" />
            <StatsCounter end={24} suffix="/7" label="Disponibilidade" />
            <StatsCounter end={1} prefix="" label="Prémio PME Líder" />
          </div>

          {/* Values */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Os Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Habilitações */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Habilitações e Conformidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Estamos habilitados para o transporte de <strong>matérias perigosas, resíduos veterinários</strong> e <strong>alimentares</strong>, cumprindo todas as normas e regulamentações exigidas pelos organismos competentes.
              Garantimos a segurança e a conformidade em todos os processos.
            </p>
            <div className="flex justify-center gap-6">
              <div className="bg-card border-2 border-secondary rounded-lg p-6 w-40 h-40 flex items-center justify-center">
                <span className="text-lg font-semibold text-secondary text-center">Matérias Perigosas</span>
              </div>
              <div className="bg-card border-2 border-secondary rounded-lg p-6 w-40 h-40 flex items-center justify-center">
                <span className="text-lg font-semibold text-secondary text-center">Resíduos Veterinários</span>
              </div>
              <div className="bg-card border-2 border-secondary rounded-lg p-6 w-40 h-40 flex items-center justify-center">
                <span className="text-lg font-semibold text-secondary text-center">Resíduos Alimentares</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuemSomos;
