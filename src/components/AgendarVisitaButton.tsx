import * as React from "react";
import { useState } from "react";
import { Button } from "./ui/button.js";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog.js";
import { Input } from "./ui/input.js";
import { Textarea } from "./ui/textarea.js";
import { Label } from "./ui/label.js";
import { toast } from "../hooks/use-toast.js";

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const AgendarVisitaButton = ({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null;
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Aqui você pode integrar com um serviço de envio de e-mail (EmailJS, API própria, etc.)
      // Exemplo de payload que poderia ser enviado:
      // await api.post("/contato", { ...form });
      console.log("Dados do formulário de agendamento:", form);

      toast?.({
        title: "Mensagem enviada com sucesso",
        description: "Em breve a equipe da LHM entrará em contato com você.",
      });

      // Limpa o formulário e fecha o modal
      setForm({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Erro ao enviar formulário de agendamento:", error);
      toast?.({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um problema ao enviar sua mensagem. Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={size || "lg"}
          className={
            className ||
            "bg-primary text-primary-foreground hover:bg-accent shadow-gold text-lg px-8"
          }
        >
          Agende uma Visita
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Agende uma visita</DialogTitle>
          <DialogDescription>
            Preencha seus dados e nossa equipe entrará em contato para marcar o melhor horário para você.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              required
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={handleChange("nome")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="seuemail@exemplo.com"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone (opcional)</Label>
            <Input
              id="telefone"
              placeholder="(00) 00000-0000"
              value={form.telefone}
              onChange={handleChange("telefone")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              required
              placeholder="Conte um pouco sobre o que você procura ou qual empreendimento te interessou."
              value={form.mensagem}
              onChange={handleChange("mensagem")}
              rows={4}
            />
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendarVisitaButton;
