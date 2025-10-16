import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CGL Transportes - Logística profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            <span className="text-primary-foreground text-sm font-medium">
              40+ anos de experiência
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Logística e transporte com 40+ anos de confiança
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Cargas completas e grupagem, ADR, contentores e soluções à medida — 
            em todo o país.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
              <Link to="/contactos">
                Pedir Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <a href="tel:+351212841177">
                <Phone className="mr-2 h-5 w-5" />
                Falar com a Equipa
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">40+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Atividade</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Serviço Expresso</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Território Nacional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
