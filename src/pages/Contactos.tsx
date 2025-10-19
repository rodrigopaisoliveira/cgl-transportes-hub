import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DESTINATION_EMAIL = "cgltransportestrafego@gmail.com";
const Contactos = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    cargoType: "",
    needsADR: false,
    dimensions: "",
    urgency: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // --- NOVA FUNÇÃO PARA CONSTRUIR O CORPO DO EMAIL ---
  const buildMailtoLink = () => {
    // Cabeçalho e Saudação
    let body = `Saudações,\n\n`;
    body += `Sou ${formData.name}, `;
    if (formData.company) {
      body += `da empresa ${formData.company}, `;
    }
    body += `e gostaria de solicitar um orçamento para um serviço de transporte.\n\n`;

    // Detalhes do Pedido
    body += `--- DETALHES DO ORÇAMENTO ---\n`;
    body += `Origem: ${formData.origin || "Não especificada"}\n`;
    body += `Destino: ${formData.destination || "Não especificado"}\n`;
    body += `Tipo de Mercadoria: ${formData.cargoType || "Não especificado"}\n`;
    body += `Dimensões/Peso: ${formData.dimensions || "Não especificado"}\n`;
    body += `Urgência: ${formData.urgency || "Não especificada"}\n`;
    body += `Transporte ADR: ${formData.needsADR ? "SIM (Mercadoria Perigosa)" : "NÃO"}\n\n`;

    // Mensagem Adicional
    if (formData.message) {
      body += `Mensagem Adicional:\n${formData.message}\n\n`;
    }

    // Contactos
    body += `--- CONTACTOS ---\n`;
    body += `Nome: ${formData.name}\n`;
    body += `Email: ${formData.email}\n`;
    body += `Telefone: ${formData.phone}\n`;
    if (formData.company) {
      body += `Empresa: ${formData.company}\n`;
    }

    // Assunto
    const subject = `Pedido de Orçamento - ${formData.company || formData.name}`;

    // Codificação para o link mailto
    return `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  // ----------------------------------------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Construir o link mailto
    const mailtoLink = buildMailtoLink();

    // 2. Abrir o cliente de email
    window.open(mailtoLink, '_self');

    // 3. Simular sucesso (Apesar de não termos a garantia do envio, a abertura do link conta como sucesso da submissão do formulário na web)
    setTimeout(() => {
      toast({
        title: "Pedido de orçamento pronto!",
        description: "O seu cliente de email foi aberto. Por favor, envie o email.",
      });

      // Resetar o formulário
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        origin: "",
        destination: "",
        cargoType: "",
        needsADR: false,
        dimensions: "",
        urgency: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 500);
  };

  // Funções de validação para desabilitar o botão se os campos obrigatórios estiverem vazios
  const isFormValid = formData.name && formData.email && formData.phone;


  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Contactos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Estamos prontos para atender às suas necessidades de transporte e logística.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Informações de Contacto</h3>
                
                <div className="space-y-4">
                  <a href="tel:+351212841177" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Telefone</div>
                      <div className="font-medium">+351 212 841 177</div>
                    </div>
                  </a>

                  <a href={`mailto:${DESTINATION_EMAIL}`} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Email</div>
                      <div className="font-medium text-sm break-all">{DESTINATION_EMAIL}</div>
                    </div>
                  </a>

                  {/* Morada com link para o Maps, agora apontando para o local correto */}
                  <a 
                    href="https://maps.google.com/?cid=10003347754916283150&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Morada</div>
                      {/* Endereço atualizado com mais precisão */}
                      <div className="font-medium text-sm">
                        Estrada Nacional 10 Km 11, Nº 121<br />
                        Edifício CGL Transportes<br />
                        2690-369 Santa Iria de Azóia<br />
                        Portugal
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Horário</div>
                      <div className="font-medium text-sm">
                        Segunda a Sexta: 09:00 - 18:00<br />
                        <span className="text-xs text-muted-foreground">Serviço de urgências 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Iframe atualizado com o URL de incorporação para a localização */}
            <div className="rounded-lg overflow-hidden h-64 border border-border">
              <iframe
                // URL de incorporação do Google Maps atualizado para a morada
                src="https://maps.google.com/maps?q=Estrada%20Nacional%2010%20Km%2011%20n%C2%BA%20121%20Edificio%20CGL%20Transportes,%202690-369%20Santa%20Iria%20de%20Azoia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da CGL Transportes no Google Maps"
              ></iframe>
            </div>
              {/* FIM DA ALTERAÇÃO */}
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-bold text-2xl mb-6 text-foreground">Pedir Orçamento</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Nome <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="O seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Empresa
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Telefone <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Origem
                      </label>
                      <Input
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="Cidade de origem"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Destino
                      </label>
                      <Input
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Cidade de destino"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Tipo de Mercadoria
                      </label>
                      <Input
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleChange}
                        placeholder="Ex: contentores, carga geral..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Urgência
                      </label>
                      <Select 
                        value={formData.urgency} 
                        onValueChange={(value) => handleSelectChange('urgency', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="urgente">Urgente</SelectItem>
                          <SelectItem value="expresso">Expresso 24h</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Dimensões / Peso
                    </label>
                    <Input
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="Ex: 2x2x2m, 1000kg"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="adr"
                      checked={formData.needsADR}
                      onCheckedChange={(checked) => setFormData({ ...formData, needsADR: checked as boolean })}
                    />
                    <label
                      htmlFor="adr"
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Necessita de transporte ADR (mercadorias perigosas)
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Informações adicionais sobre o seu pedido..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" required />
                    <label
                      htmlFor="privacy"
                      className="text-xs text-muted-foreground cursor-pointer"
                    >
                      Concordo com o tratamento dos meus dados pessoais de acordo com a 
                      Política de Privacidade e RGPD. <span className="text-destructive">*</span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting || !isFormValid} // Desabilitar se os campos obrigatórios não estiverem preenchidos
                  >
                    {isSubmitting ? (
                      "A preparar email..."
                    ) : (
                      <>
                        Preparar Email de Orçamento
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contactos;