import React, { useState } from "react";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Textarea } from "./ui/textarea.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog.js";
import { useToast } from "./ui/use-toast.js";
import emailjs from "@emailjs/browser";

interface AgendarVisitaButtonProps {
  imovelNome?: string;
}

// TROQUE esses valores pelos seus do EmailJS:
const EMAILJS_SERVICE_ID = "service_jftxaf6";        // <- seu Service ID
const EMAILJS_TEMPLATE_ID = "template_wbb33x9";      // <- Template ID
const EMAILJS_PUBLIC_KEY = "IYKTyDQ6vpgp-lDel";      // <- Public key

const AgendarVisitaButton = ({ imovelNome }: AgendarVisitaButtonProps) => {
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          mensagem: form.mensagem,
          imovel: imovelNome || "Contato geral",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast?.({
        title: "Mensagem enviada com sucesso",
        description:
          "Recebemos seus dados e em breve a equipe da LHM entrará em contato com você.",
      });

      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast?.({
        title: "Erro ao enviar mensagem",
        description:
          "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Agende uma Visita
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Agendar visita</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {imovelNome && (
            <p className="text-sm text-muted-foreground">
              Imóvel de interesse:{" "}
              <span className="font-semibold text-foreground">
                {imovelNome}
              </span>
            </p>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground" htmlFor="nome">
              Nome completo
            </label>
            <Input
              id="nome"
              name="nome"
              required
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground" htmlFor="email">
              E-mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="telefone"
            >
              Telefone / WhatsApp
            </label>
            <Input
              id="telefone"
              name="telefone"
              required
              value={form.telefone}
              onChange={handleChange}
              placeholder="(31) 99999-9999"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="mensagem"
            >
              Mensagem
            </label>
            <Textarea
              id="mensagem"
              name="mensagem"
              required
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos um pouco sobre o que você procura..."
              className="min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendarVisitaButton;
