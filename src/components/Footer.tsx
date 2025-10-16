import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CGL</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">TRANSPORTES CARLOS GARCIA</h3>
                <p className="text-xs text-primary-foreground/70">Grupo CGL Transportes</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Com mais de 40 anos de experiência em logística e transporte, 
              somos o seu parceiro de confiança.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Início
              </Link>
              <Link to="/quem-somos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Quem Somos
              </Link>
              <Link to="/servicos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Serviços
              </Link>
              <Link to="/contactos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contactos
              </Link>
              <Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contactos</h4>
            <div className="flex flex-col space-y-3">
              <a href="tel:+351212841177" className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+351 212 841 177</span>
              </a>
              <a href="mailto:cgltransportestrafego@gmail.com" className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>cgltransportestrafego@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Estrada Nacional 10 Km 11<br />2690-361 Santa Iria de Azóia, Portugal</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Horário</h4>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta: 09:00 - 18:00</p>
                <p className="text-xs text-primary-foreground/60 mt-1">
                  Serviço de urgências 24/7
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Certificações</h5>
              <div className="flex gap-2 text-xs text-primary-foreground/70">
                <span className="bg-primary-foreground/10 px-2 py-1 rounded">APA</span>
                <span className="bg-primary-foreground/10 px-2 py-1 rounded">DGAV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} Transportes Carlos Garcia, Lda. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-primary-foreground transition-colors">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
