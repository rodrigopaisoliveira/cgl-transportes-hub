import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Importar a imagem do logo (o seu logo.png)
import logo from '@/assets/logo.png'; // **AJUSTE ESTE CAMINHO CONFORME A SUA ESTRUTURA DE PASTAS**

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Estrada+Nacional+10+Km+11+2690-361+Santa+Iria+de+Azóia+Portugal";
  
  // FUNÇÃO PARA FORÇAR O SCROLL PARA O TOPO (USADO NO CLIQUE DO LOGO)
  const handleLogoClick = () => {
    // Rola para o topo da janela
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info com o novo Logo clicável e com scroll to top */}
          <div>
            <div className="mb-6"> 
              {/* LOGO AGORA É CLICÁVEL E VAI PARA O TOPO */}
              <Link 
                to="/" 
                onClick={handleLogoClick} // <--- ALTERAÇÃO AQUI
              >
                <img 
                  src={logo} 
                  alt="CGL Transportes Logo" 
                  className="h-14 object-contain" 
                />
              </Link>
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
              {/* Mantemos o Link to="/" aqui sem onClick. Se o utilizador clicar, o router não navega. */}
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
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Estrada Nacional 10 Km 11<br />2690-361 Santa Iria de Azóia, Portugal</span>
              </a>
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

            {/* Prémios */}
            <div className="mt-6">
              <h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Prémios Conquistados</h5>
              <div className="text-xs text-primary-foreground/70">
                <span>
                          Fomos reconhecidos como **PME Líder** e destacamo-nos pela nossa excelência em serviços e inovação no mercado, procurando sempre superar as expectativas dos nossos clientes.
                </span>
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