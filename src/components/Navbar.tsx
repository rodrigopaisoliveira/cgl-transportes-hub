import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Importar a imagem do logo (o seu logo.png)
import logo from '@/assets/logo.png'; // **AJUSTE ESTE CAMINHO CONFORME A SUA ESTRUTURA DE PASTAS**

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
    setIsMobileMenuOpen(false); 
  }, [location.pathname]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contactos", path: "/contactos" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen 
            ? "bg-background shadow-md" 
            : isScrolled
              ? "bg-background/95 backdrop-blur-md shadow-md"
              : "bg-transparent" 
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* NOVO LOGO (IMAGEM COMPLETA) */}
            {/* NOVO LOGO (IMAGEM COMPLETA) */}
            <Link 
              to="/" 
              className="flex items-center group" 
              // ADICIONAR ESTA FUNÇÃO:
              onClick={() => {
                // Se já estiver na rota inicial, força o scroll para o topo
                if (location.pathname === '/') {
                  window.scrollTo(0, 0);
                }
                // Para outras rotas, o useEffect já trata do scroll e navegação.
              }}
            > 
              <img 
                src={logo} 
                alt="CGL Transportes Logo" 
                className="h-10 md:h-12 object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button asChild variant="default" size="sm">
                <Link to="/contactos">Pedir Orçamento</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in-up"> 
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-2">
                  <a
                    href="tel:+351212841177"
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 text-sm border border-input rounded-md bg-white text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    Ligar
                  </a>

                  <Button asChild className="w-full">
                    <Link to="/contactos">
                      Pedir Orçamento
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;