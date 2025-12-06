import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button.js";
import { NavLink } from "../NavLink.js";
import logoLhm from "../../assets/logo-lhm.png";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          onClick={closeMenu}
        >
          <img src={logoLhm} alt="LHM Incorporadora" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Home
          </NavLink>

          <NavLink
            to="/imoveis"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Imóveis
          </NavLink>

          <Link
            to="/#sobre"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre
          </Link>

          <Link
            to="/#diferenciais"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Diferenciais
          </Link>

          <Link to="/#contato">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contato
            </Button>
          </Link>
        </nav>

        {/* Botão menu mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground hover:text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <NavLink
              to="/"
              className="block text-base text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/imoveis"
              className="block text-base text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
              onClick={closeMenu}
            >
              Imóveis
            </NavLink>

            <Link
              to="/#sobre"
              className="block text-base text-muted-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Sobre
            </Link>

            <Link
              to="/#diferenciais"
              className="block text-base text-muted-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Diferenciais
            </Link>

            <Link to="/#contato" className="block" onClick={closeMenu}>
              <Button className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contato
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
