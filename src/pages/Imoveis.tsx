import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/card.js";
import { Button } from "../components/ui/button.js";
import { Input } from "../components/ui/input.js";
import { Label } from "../components/ui/label.js";
import { imoveis } from "../data/imoveis.js";
import { MapPin, Search } from "lucide-react";
import type { Imovel } from "../data/imoveis.js";

const Imoveis = () => {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");
  const [tipo, setTipo] = useState<string>("todos");
  const [status, setStatus] = useState<string>("todos");
  const [quartos, setQuartos] = useState<string>("todos");
  const [faixaPreco, setFaixaPreco] = useState<string>("todas");

  const imoveisFiltrados = useMemo(() => {
    return imoveis.filter((imovel) => {
      const termo = termoBusca.toLowerCase().trim();

      if (termo) {
        const texto = `${imovel.name} ${imovel.location} ${imovel.description}`.toLowerCase();
        if (!texto.includes(termo)) {
          return false;
        }
      }

      if (tipo !== "todos" && imovel.type !== tipo) {
        return false;
      }

      if (status !== "todos" && imovel.status !== status) {
        return false;
      }

      if (quartos !== "todos" && imovel.bedrooms) {
        const q = quartos === "4+" ? 4 : parseInt(quartos, 10);
        if (quartos === "4+") {
          if (!imovel.bedrooms || imovel.bedrooms < 4) {
            return false;
          }
        } else if (imovel.bedrooms !== q) {
          return false;
        }
      }

      if (faixaPreco !== "todas" && imovel.priceFrom) {
        if (faixaPreco === "ate-800") {
          if (imovel.priceFrom > 800000) return false;
        } else if (faixaPreco === "800-1100") {
          if (imovel.priceFrom < 800000 || imovel.priceFrom > 1100000) return false;
        } else if (faixaPreco === "acima-1100") {
          if (imovel.priceFrom < 1100000) return false;
        }
      }

      return true;
    });
  }, [termoBusca, tipo, status, quartos, faixaPreco]);

  const handleVerDetalhes = (imovel: Imovel) => {
    navigate(`/imoveis/${imovel.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="border-b border-border bg-card/40">
        <div className="container mx-auto px-6 py-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Oportunidades LHM
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Imóveis selecionados para investidores exigentes.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Encontre o empreendimento ideal para o seu perfil de investimento,
              com segurança jurídica, localização estratégica e alto potencial de valorização.
            </p>
          </div>

          <div className="w-full max-w-md space-y-2">
            <Label htmlFor="busca">Buscar por nome, bairro ou cidade</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="h-4 w-4" />
              </span>
              <Input
                id="busca"
                placeholder="Ex: Zurich, Jardins, Ouro Branco..."
                className="pl-9"
                value={termoBusca}
                onChange={(event) => setTermoBusca(event.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="space-y-2">
            <Label htmlFor="tipo">Tipo de imóvel</Label>
            <select
              id="tipo"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Comercial">Comercial</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="Lançamento">Lançamento</option>
              <option value="Em Construção">Em Construção</option>
              <option value="Previsto">Previsto</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quartos">Número de quartos</Label>
            <select
              id="quartos"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={quartos}
              onChange={(event) => setQuartos(event.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="1">1 quarto</option>
              <option value="2">2 quartos</option>
              <option value="3">3 quartos</option>
              <option value="4+">4+ quartos</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="faixaPreco">Faixa de preço</Label>
            <select
              id="faixaPreco"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={faixaPreco}
              onChange={(event) => setFaixaPreco(event.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="ate-800">Até R$ 800 mil</option>
              <option value="800-1100">Entre R$ 800 mil e R$ 1,1 mi</option>
              <option value="acima-1100">Acima de R$ 1,1 mi</option>
            </select>
          </div>
        </div>

        {imoveisFiltrados.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum imóvel encontrado com os filtros selecionados. Ajuste a busca para ver outras oportunidades.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imoveisFiltrados.map((imovel, index) => (
              <Card
                key={imovel.id}
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={imovel.image}
                    alt={imovel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      {imovel.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {imovel.name}
                    </h2>
                    <p className="text-muted-foreground mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {imovel.location}
                    </p>
                    {imovel.priceFrom && (
                      <p className="font-semibold text-primary mb-2">
                        A partir de{" "}
                        {imovel.priceFrom.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    )}
                    <p className="text-muted-foreground line-clamp-3">
                      {imovel.description}
                    </p>
                    <Button
                    variant="outline"
                    className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    onClick={() => handleVerDetalhes(imovel)}
                  >
                    Saiba mais
                  </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Imoveis;
