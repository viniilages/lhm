import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/ui/card.js";
import { Button } from "../components/ui/button.js";
import { imoveis } from "../data/imoveis.js";
import type { Imovel } from "../data/imoveis.js";
import { MapPin, ArrowLeft } from "lucide-react";
import AgendarVisitaButton from "../components/AgendarVisitaButton.js";

const ImovelDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const imovelSelecionado: Imovel | undefined = useMemo(
    () => imoveis.find((item) => item.id === id),
    [id]
  );

  if (!imovelSelecionado) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <Card className="p-10 text-center">
            <h1 className="text-2xl font-bold mb-2 text-foreground">
              Imóvel não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              Não localizamos este empreendimento. Ele pode ter sido removido ou estar temporariamente indisponível.
            </p>
            <Button onClick={() => navigate("/imoveis")}>
              Ver todas as oportunidades
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const imovel = imovelSelecionado;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 space-y-10">
        <Button
          variant="ghost"
          className="mb-2"
          onClick={() => navigate("/imoveis")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para oportunidades
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-gold/20 animate-fade-in">
            <img
              src={imovel.image}
              alt={imovel.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-in">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                {imovel.status}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {imovel.name}
              </h1>
              <p className="text-muted-foreground flex items-center mb-3">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                {imovel.location}
              </p>
              {imovel.priceFrom && (
                <p className="text-2xl font-semibold text-primary">
                  A partir de{" "}
                  {imovel.priceFrom.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    maximumFractionDigits: 0,
                  })}
                </p>
              )}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {imovel.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {imovel.bedrooms && (
                <Card className="p-4 bg-card/80 border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Dormitórios
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    {imovel.bedrooms}
                  </p>
                </Card>
              )}
              {imovel.bathrooms && (
                <Card className="p-4 bg-card/80 border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Banheiros
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    {imovel.bathrooms}
                  </p>
                </Card>
              )}
              {imovel.areaFrom && (
                <Card className="p-4 bg-card/80 border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Área privativa
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    {imovel.areaFrom} m²
                  </p>
                </Card>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <AgendarVisitaButton />
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => navigate("/imoveis")}
              >
                Ver outros empreendimentos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImovelDetalhe;
