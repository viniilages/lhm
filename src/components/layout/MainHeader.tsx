import { Link } from "react-router-dom";
import { Button } from "../ui/button.js";
import { NavLink } from "../NavLink.js";
import logoLhm from "../../assets/logo-lhm.png";

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoLhm} alt="LHM Incorporadora" className="h-12 w-auto" />
        </Link>
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
          
          <a href="/#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </a>

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
      </div>
    </header>
  );
};

export default MainHeader;
