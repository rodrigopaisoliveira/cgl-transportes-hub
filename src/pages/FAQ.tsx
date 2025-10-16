import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "Fazem transporte ADR em todas as classes?",
      answer: "Sim, possuímos equipamentos e profissionais certificados para o transporte de todas as classes de mercadorias perigosas (ADR). A nossa equipa tem formação contínua e cumprimos todos os requisitos legais e de segurança."
    },
    {
      question: "Atendem urgências e serviços expresso?",
      answer: "Sim, oferecemos serviços expresso com disponibilidade 24/7. Realizamos recolhas urgentes e entregas rápidas com SLA acordado. A nossa frota está equipada com GPS para acompanhamento em tempo real."
    },
    {
      question: "Cobrem todo o território nacional?",
      answer: "Sim, operamos em todo o território nacional, incluindo Portugal Continental e Ilhas. A nossa rede logística permite-nos realizar entregas eficientes em qualquer localização do país."
    },
    {
      question: "Têm contentores frigoríficos?",
      answer: "Sim, dispomos de contentores frigoríficos de 20″, 40″ e 45″ com monitorização contínua de temperatura. Ideais para produtos que requerem temperatura controlada, com todas as certificações alimentares necessárias."
    },
    {
      question: "Podem bascular contentores a granel?",
      answer: "Sim, temos equipamentos certificados para bascular contentores de 20′, 30′, 40′ e 45′ com carga a granel. Contamos com operadores especializados e todos os sistemas de segurança necessários."
    },
    {
      question: "Como funciona o sistema de tracking?",
      answer: "Toda a nossa frota está equipada com sistema GPS moderno que permite acompanhamento em tempo real. Os nossos clientes recebem atualizações regulares sobre a localização e estado das suas encomendas."
    },
    {
      question: "Trabalham com empresas de todos os setores?",
      answer: "Sim, trabalhamos com empresas de diversos setores. Desenvolvemos soluções à medida para cada cliente, adaptando os nossos serviços às necessidades específicas de cada negócio e setor de atividade."
    },
    {
      question: "Qual o tempo de resposta para um orçamento?",
      answer: "Respondemos a todos os pedidos de orçamento no prazo máximo de 24 horas úteis. Para urgências, temos uma linha de contacto direto que assegura resposta imediata."
    },
    {
      question: "Fazem transporte de pequenas encomendas ou apenas cargas completas?",
      answer: "Realizamos tanto transporte de cargas completas como grupagem. Seja uma pequena encomenda ou uma carga de grandes dimensões, temos a solução adequada para as suas necessidades."
    },
    {
      question: "Que certificações possuem?",
      answer: "Estamos registados na APA (Agência Portuguesa do Ambiente) para transporte de resíduos e na DGAV (Direção-Geral de Alimentação e Veterinária) para transporte de subprodutos de origem animal e derivados, assegurando todos os requisitos específicos."
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
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Encontre respostas para as questões mais comuns sobre os nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Não encontrou a resposta?
              </h3>
              <p className="text-muted-foreground mb-6">
                A nossa equipa está disponível para esclarecer todas as suas dúvidas.
              </p>
              <Button asChild size="lg">
                <Link to="/contactos">
                  Contactar-nos
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

export default FAQ;
