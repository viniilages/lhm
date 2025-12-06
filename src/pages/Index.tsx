import { Button } from "../components/ui/button.js";
import { Card } from "../components/ui/card.js";
import { useNavigate } from "react-router-dom";
import { imoveis } from "../data/imoveis.js";
import AgendarVisitaButton from "../components/AgendarVisitaButton.js";
import { Building2, Award, Users, TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "../assets/hero-building.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import logoLhm from "../assets/logo-lhm.png";
import zurich from "../assets/zurich.png";
const Index = () => {
  const navigate = useNavigate();

  const handleConhecerOportunidades = () => {
    navigate("/imoveis");
  };

  const handleFaleConosco = () => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Empreendimento LHM" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <div className="mb-8">
            {/* use imported asset so Vite bundles / resolves it correctly */}
            <img alt="LHM Incorporadora" className="h-32 w-auto mx-auto mb-6" src={logoLhm} />
          </div>
          <p className="text-4xl md:text-5xl font-light mb-4 text-foreground">
            Investir no futuro nunca foi tão estratégico, previsível e lucrativo.
          </p>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A LHM identifica, estrutura e entrega empreendimentos de alta performance para investidores que buscam segurança, valorização e visão de longo prazo.
          </p>
        
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent shadow-gold text-lg px-8"
              onClick={handleConhecerOportunidades}
            >
              Conhecer oportunidades
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8" onClick={handleFaleConosco}>
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="empreendimentos" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Empreendimentos Exclusivos
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada projeto é concebido com excelência e atenção aos detalhes, oferecendo o máximo em conforto e sofisticação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imoveis.slice(0, 3).map((project, index) => <Card key={index} className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-gold animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="relative overflow-hidden h-64">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {project.location}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => navigate(`/imoveis/${project.id}`)}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Sobre a LHM
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mb-8" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                LHM Incorporadora — Arquitetura do investimento.
                Nascemos da união entre propósito e estratégia.
                LHM carrega as iniciais de Leona, Heitor e Mendonça, traduzindo a solidez de um nome
                que nasce da família e evolui para um modelo de negócios que une tecnologia,
                transparência e alta performance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa missão é simples:
                transformar empreendimentos em instrumentos de valorização real — seguros,
                acessíveis e inteligentes.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">Empreendimentos</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">5000+</p>
                  <p className="text-sm text-muted-foreground">Famílias Atendidas</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden shadow-glow">
                <img src={project2} alt="LHM Incorporadora" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="diferenciais" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              💰 POR QUE INVESTIR COM A LHM?
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Building2,
            title: "✔ Estratégia baseada em dados",
            description: "Selecionamos regiões com histórico de crescimento, fluxo urbano e expansão imobiliária comprovada."
          }, {
            icon: Award,
            title: "✔ Modelos financeiros claros e previsíveis",
            description: "Taxas de retorno, prazos, riscos e projeções sempre transparentes."
          }, {
            icon: Users,
            title: "✔ Projetos com alta liquidez de mercado",
            description: "Empreendimentos pensados para atrair compradores e valorizar no curto e médio prazo."
          }, {
            icon: TrendingUp,
            title: "✔ Estruturas jurídicas seguras",
            description: "Todo investimento é organizado com respaldo legal e acompanhamento profissional."
          }].map((value, index) => <Card key={index} className="p-8 text-center bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Realize o Seu Sonho
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
            <p className="text-xl text-muted-foreground mb-12">
              Entre em contato conosco e descubra como podemos transformar seu investimento em realidade
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[{
              icon: Phone,
              title: "Telefone",
              info: "(31) 9206-8755"
            }, {
              icon: Mail,
              title: "E-mail",
              info: "lhmincorporadora@gmail.com"
            }, {
              icon: MapPin,
              title: "Endereço",
              info: "Belo Horizonte - Minas Gerais"
            }].map((contact, index) => <div key={index} className="flex flex-col items-center animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{contact.title}</p>
                  <p className="font-medium text-foreground">{contact.info}</p>
                </div>)}
            </div>

            <AgendarVisitaButton className="bg-primary text-primary-foreground hover:bg-accent shadow-gold text-lg px-12" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-4">
              <img
                src={logoLhm}
                alt="LHM Incorporadora"
                className="h-10 w-auto"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-2">
                © 2024 LHM Incorporadora. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground">
                Incorporação de Alto Padrão
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>;
};
export default Index;